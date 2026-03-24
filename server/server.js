import express from "express";
import dotenv from "dotenv";
import path from "path";
import { createServer } from "node:http";
import { Server } from "socket.io";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: ["http://localhost:3300"],
  },
});

io.on("connection", (socket) => {
  socket.on("custom-room", (room, type, callback) => {
    const roomExits = io.sockets.adapter.rooms.has(room);
    if (roomExits && type === "create") {
      callback("exits", room);
    } else if (!roomExits && type === "join") {
      callback("notexist");
    } else if (roomExits && type === "leave-room") {
      socket.leave(room);
      const roomSize = io.sockets.adapter.rooms.get(room)?.size || 0;
      io.to(room).emit("room-size", roomSize);
      callback(room);
    } else if (room) {
      socket.join(room);
      const roomSize = io.sockets.adapter.rooms.get(room)?.size || 0;
      io.to(room).emit("room-size", roomSize);
      socket.on("new-chat", (data) => {
        socket.to(room).emit("chat-broadcast", data);
      });
    }
  });
});

if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();

  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("api is running.");
  });
}
httpServer.listen(PORT, () => {
  console.log(`Server is listening at PORT:${PORT}`);
});
