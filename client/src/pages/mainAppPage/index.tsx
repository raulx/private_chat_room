import { ToastContainer } from "react-toastify";
import Navbar from "../../components/Navbar";
import { Suspense, lazy, useEffect } from "react";
import { socket } from "../../utils/socket";
import { Route, Routes } from "react-router";
import HomeScreen from "./screens/home-screen";
import Spinner from "../../components/Loaders";

const ChatScreen = lazy(() => import("./screens/chat-screen"));
const CreateScreen = lazy(() => import("./screens/create-screen"));
const JoinScreen = lazy(() => import("./screens/join-screen"));

const MainAppPage: React.FC = () => {
  useEffect(() => {
    socket.on("connect", () => {
      console.log(socket.id);
    });
  }, []);

  return (
    <div className="min-h-screen bg-neutral-light dark:bg-black dark:text-white transition-all duration-200">
      <ToastContainer />
      <>
        <Navbar />
      </>
      <Suspense
        fallback={
          <div className="h-screen w-screen flex justify-center items-center">
            <Spinner />
          </div>
        }
      >
        <Routes>
          <Route index element={<HomeScreen />} />
          <Route path="/create" element={<CreateScreen />} />
          <Route path="/join" element={<JoinScreen />} />
          <Route path="/chat" element={<ChatScreen />} />
          <Route path="/*" element={<div>Error 404 : Page Not Found</div>} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default MainAppPage;
