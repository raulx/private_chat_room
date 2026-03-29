import UseMyContext from "../../../hooks/useMyContext";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { socket } from "../../../utils/socket";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";
import MessageBox from "../../../components/MessageBox";
import { FaPaperPlane } from "react-icons/fa";

type Chat = {
  id: string;
  text: string;
  avatar: string;
  author: string;
};

const ChatScreen = () => {
  const { userData, resetUserData, totalMembers, setTotalMembers } =
    UseMyContext();

  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const [chats, setChats] = useState<Chat[]>([]);

  useEffect(() => {
    socket.on("room-size", (val: number) => {
      setTotalMembers(val);
    });
    return () => {
      socket.off("room-size");
    };
  }, [totalMembers, setTotalMembers]);

  useEffect(() => {
    socket.on(
      "chat-broadcast",
      (data: {
        message: string;
        userData: { character: string; userName: string };
      }) => {
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
      },
    );
    return () => {
      socket.off("chat-broadcast");
    };
  }, [chats]);

  useEffect(() => {
    if (userData.roomCode === "") {
      toast("Disconnected,Join Again.", { type: "error" });
      navigate("/join");
    }
  }, [userData.roomCode, navigate]);

  const handleClick = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
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
      (responseData: string) => {
        console.log(`exited ${responseData}`);
      },
    );
    socket.disconnect();
    resetUserData();
    navigate("/");
  };

  return (
    <div className="h-screen bg-black py-2 sm:px-0 px-2 overflow-hidden">
      <div className="sm:w-2/3  bg-neutral-light dark:bg-gray-800 h-full grid grid-cols-2 grid-rows-12 mx-auto rounded-lg">
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

        <form
          className="col-span-2 row-span-1 dark:bg-primary-dark bg-neutral-dark-gray  flex items-center px-2 gap-2"
          onSubmit={(e) => handleClick(e)}
        >
          <input
            placeholder="Enter Message"
            type="text"
            className="w-full p-2 rounded-lg bg-white outline-hidden text-black"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            className="h-10 w-10 rounded-full bg-primary-medium flex justify-center items-center"
          >
            <FaPaperPlane />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatScreen;
