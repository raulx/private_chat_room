import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});
app.listen(PORT, () => {
  console.log(`Server is listening at PORT:${PORT}`);
});
