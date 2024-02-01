import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import UseMyContext from "../hooks/useMyContext";
import characters from "../../utils/variables";
import { socket } from "../../utils/socket";
import { toast } from "react-toastify";

function JoinPage() {
  const { userData, changeUserData, resetUserData } = UseMyContext();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    socket.connect();
    socket.emit("custom-room", userData.roomCode, "join", (response) => {
      if (response === "notexist") {
        toast.error("room does not exist", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
        });
        resetUserData();
        navigate("/");
      }
    });
    navigate("/chat");
  };
  const handleSelect = (selectedCharacter) => {
    changeUserData("character", selectedCharacter);
  };
  return (
    <div>
      <div className="md:mx-20 my-4 mx-4">
        <Link to={"/"}>
          <FaArrowLeft className="text-md sm:text-xl 2xl:text-2xl" />
        </Link>
      </div>
      <div className="sm:w-1/3 w-full  mx-auto sm:px-2 sm:py-4 p-4 px-8 sm:mt-0 mt-4">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-8 2xl:gap-10"
        >
          <div className="flex flex-col gap-2">
            <label className="font-bebas text-primary-dark text-lg sm:text-xl 2xl:text-3xl">
              Enter Your Name
            </label>
            <input
              required
              className="border-b-2 border-primary-dark border-opacity-25 outline-none 2xl:text-2xl"
              value={userData.userName}
              onChange={(e) => changeUserData("userName", e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-bebas text-primary-dark sm:text-xl text-lg 2xl:text-3xl">
              select a character
            </label>
            <div className="flex gap-4">
              {characters.map((c) => {
                return (
                  <div
                    key={c.id}
                    onClick={() => {
                      handleSelect(c.character);
                    }}
                    className="cursor-pointer"
                  >
                    <div
                      className={
                        c.character === userData.character
                          ? "rounded-xl border-2 border-gray-700"
                          : "border-none"
                      }
                    >
                      <img
                        src={`../src/resources/characters/${c.character}.png`}
                      />
                    </div>
                    <p className="font-inter text-xs 2xl:text-lg">
                      {c.character}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className=" font-bebas text-primary-dark text-lg sm:text-xl 2xl:text-3xl">
              Enter Room Code
            </label>
            <input
              required
              className="border-b-2 border-primary-dark border-opacity-25 outline-none 2xl:text-2xl"
              value={userData.roomCode}
              onChange={(e) => changeUserData("roomCode", e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="py-2 px-4 2xl:py-4 2xl:px-8 bg-neutral-light-pink sm:text-lg text-md 2xl:text-2xl rounded text-primary-dark w-24  2xl:w-36 font-inter"
          >
            Join
          </button>
        </form>
      </div>
    </div>
  );
}

export default JoinPage;
