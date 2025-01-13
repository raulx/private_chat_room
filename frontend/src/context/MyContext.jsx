/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const myContext = createContext();

function MyContext({ children }) {
  const [userData, setUserData] = useState({
    character: "Doge", // default character
    userName: "",
    roomCode: "",
  });

  const resetUserData = () => {
    setUserData(() => {
      return { character: "Doge", userName: "", roomCode: "" };
    });
  };
  const changeUserData = (action, payload) => {
    setUserData((prevValue) => {
      return { ...prevValue, [action]: payload };
    });
  };
  return (
    <myContext.Provider value={{ userData, changeUserData, resetUserData }}>
      {children}
    </myContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export { myContext };
export default MyContext;
