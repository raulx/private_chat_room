import { useNavigate } from "react-router-dom";
import { FaPaperPlane } from "react-icons/fa";
import MessageBox from "../components/MessageBox";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { socket } from "../../utils/socket";

import UseMyContext from "../hooks/useMyContext";

function ChatPage() {
  const { userData, resetUserData } = UseMyContext();
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const [chats, setChats] = useState([]);
  const [totalMembers, setTotalMembers] = useState(0);

  useEffect(() => {
    socket.on("room-size", (val) => {
      setTotalMembers(val);
    });
    return () => {
      socket.off("room-size");
    };
  }, [totalMembers]);

  useEffect(() => {
    socket.on("chat-broadcast", (data) => {
      setChats((prevValue) => {
        return [
          ...prevValue,
          {
            id: nanoid(),
            text: data.message,
            avatar: data.userData.character,
            author: data.userData.userName,
          },
        ];
      });
    });
    return () => {
      socket.off("chat-broadcast");
    };
  }, [chats]);

  const handleClick = () => {
    setChats((prevValue) => {
      return [
        ...prevValue,
        {
          id: nanoid(),
          text: message,
          avatar: userData.character,
          author: userData.userName,
        },
      ];
    });
    socket.emit("new-chat", { userData, message });
    setMessage("");
  };

  const handleLeaveRoom = () => {
    socket.emit(
      "custom-room",
      userData.roomCode,
      "leave-room",
      (responseData) => {
        console.log(`exited ${responseData}`);
      }
    );
    socket.disconnect();
    resetUserData();
    navigate("/");
  };

  return (
    <div className="h-screen bg-black py-4 overflow-hidden">
      <div className="sm:w-2/3 w-11/12 bg-neutral-light dark:bg-gray-800 h-full grid grid-cols-2 grid-rows-12 mx-auto rounded-lg">
        <div className="col-span-2 row-span-1">
          <div className="flex justify-between dark:bg-primary-dark items-center sm:px-10 px-4 py-2 bg-neutral-light-gray rounded-lg">
            <p className="font-inter text-primary-medium-green sm:text-lg text-xs dark:text-primary-light">
              Connected to room:
              <span className=" dark:text-primary-light">
                {userData.roomCode}
              </span>
            </p>
            <p className="text-accent-light font-inter dark:text-white font-semibold sm:text-lg text-xs">
              Connected:{totalMembers}
            </p>

            <div
              className="flex flex-col items-center cursor-pointer"
              onClick={handleLeaveRoom}
            >
              <img
                src="/resources/Exit.png"
                className="sm:w-auto sm:h-auto h-5 w-5"
              />
              <p className="font-joti text-xs">Exit</p>
            </div>
          </div>
        </div>

        <div className="col-span-2 row-span-10 w-full h-full sm:px-10 px-2 sm:py-4 py-2 overflow-y-scroll flex flex-col gap-4">
          {chats.map((v) => {
            return (
              <MessageBox
                key={v.id}
                text={v.text}
                avatar={v.avatar}
                author={v.author}
              />
            );
          })}
        </div>
        <div className="col-span-2 row-span-1 dark:bg-primary-dark bg-neutral-dark-gray rounded-lg flex items-center justify-between gap-2 px-8">
          <input
            placeholder="Enter Message"
            type="text"
            className="w-full p-2 rounded-lg outline-none dark:text-black"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            className="bg-primary-medium rounded-full h-10 w-10 flex justify-center items-center"
            onClick={handleClick}
          >
            <FaPaperPlane className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
