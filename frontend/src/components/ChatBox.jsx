import { Link } from "react-router-dom";
import { FaPaperPlane } from "react-icons/fa";
import MessageBox from "./MessageBox";
function ChatBox() {
  return (
    <div className="sm:w-2/3 w-11/12 bg-neutral-light h-full grid grid-cols-2 grid-rows-12 mx-auto rounded-lg">
      <div className="col-span-2 row-span-1">
        <div className="flex justify-between items-center sm:px-10 px-4 py-2 bg-neutral-light-gray rounded-lg">
          <p className="font-bebas text-primary-medium-green sm:text-lg text-xs">
            Connected to room:secret room
          </p>
          <p className="text-accent-light font-inter font-semibold sm:text-lg text-xs">
            Connected:5
          </p>
          <Link to={"/"}>
            <div className="flex flex-col items-center">
              <img
                src="../src/resources/Exit.png"
                className="sm:w-auto sm:h-auto h-5 w-5"
              />
              <p className="font-joti text-xs">Exit</p>
            </div>
          </Link>
        </div>
      </div>

      <div className="col-span-2 row-span-10 w-full h-full sm:px-10 px-2 sm:py-4 py-2 overflow-y-scroll flex flex-col gap-4">
        <MessageBox />
        <MessageBox />
        <MessageBox />
        <MessageBox />
        <MessageBox />
        <MessageBox />
        <MessageBox />
      </div>
      <div className="col-span-2 row-span-1 bg-neutral-dark-gray rounded-lg flex items-center justify-between gap-2 px-8">
        <input
          placeholder="Enter Message"
          type="text"
          className="w-full p-2 rounded-lg outline-none"
        />
        <button className="bg-primary-medium rounded-full h-10 w-10 flex justify-center items-center">
          <FaPaperPlane className="text-xl" />
        </button>
      </div>
    </div>
  );
}

export default ChatBox;
