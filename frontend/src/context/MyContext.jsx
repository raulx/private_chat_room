/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const myContext = createContext();

function MyContext({ children }) {
  const [userData, setUserData] = useState({
    character: "Doge",
    userName: "",
    roomCode: "",
  });
  const changeUserData = (action, payload) => {
    setUserData((prevValue) => {
      return { ...prevValue, [action]: payload };
    });
  };
  return (
    <myContext.Provider value={{ userData, changeUserData }}>
      {children}
    </myContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export { myContext };
export default MyContext;
