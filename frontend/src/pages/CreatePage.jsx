import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { socket } from "../../utils/socket";
import UseMyContext from "../hooks/useMyContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Characters from "../components/Characters";

function CreatePage() {
  const { userData, changeUserData, resetUserData, setTotalMembers } =
    UseMyContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.connect();
    socket.emit(
      "custom-room",
      userData.roomCode,
      "create",
      (responseData, room) => {
        if (responseData === "exits") {
          toast.error(`Room already exits with roomid:${room}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
          });
          resetUserData();
          socket.disconnect();
          navigate("/");
        }
      }
    );
    socket.on("room-size", (val) => {
      setTotalMembers(val);
    });

    navigate("/chat");
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
          className="flex flex-col gap-8 2xl:gap-10 "
        >
          <div className="flex flex-col gap-2">
            <label className="font-bebas text-primary-dark dark:text-white text-lg sm:text-xl 2xl:text-3xl">
              Enter Your Name
            </label>
            <input
              required
              className="border-b-2 border-primary-dark dark:px-2 dark:text-black border-opacity-25 outline-none 2xl:text-2xl"
              value={userData.userName}
              onChange={(e) => {
                changeUserData("userName", e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-bebas text-primary-dark dark:text-white sm:text-xl text-lg 2xl:text-3xl">
              select a character
            </label>
            <Characters />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-bebas text-primary-dark dark:text-white  text-lg sm:text-xl 2xl:text-3xl">
              Set Room code
            </label>
            <input
              required
              className="border-b-2 border-primary-dark dark:px-2 dark:text-black  border-opacity-25 outline-none 2xl:text-2xl"
              value={userData.roomCode}
              onChange={(e) => {
                changeUserData("roomCode", e.target.value);
              }}
            />
          </div>
          <button
            type="submit"
            className="py-2 px-4 2xl:py-4 2xl:px-8 bg-neutral-medium-gray sm:text-lg text-md 2xl:text-2xl rounded text-primary-dark w-24  2xl:w-36 font-inter"
          >
            Create
          </button>
        </form>
      </div>
      <p className="font-chewy mt-12 2xl:mt-16 dark:text-red-100 transition-all duration-200 text-md sm:text-xl 2xl:text-3xl text-center text-accent-red-dark sm:w-1/3 w-2/3 mx-auto ">
        Note:You can create a room with maximum of six users.
      </p>
    </div>
  );
}

export default CreatePage;
