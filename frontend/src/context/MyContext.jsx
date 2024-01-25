/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const myContext = createContext();

function MyContext({ children }) {
  const [character, setCharacter] = useState("Doge");
  const changeCharacter = (val) => {
    setCharacter(val);
  };
  return (
    <myContext.Provider value={{ character, changeCharacter }}>
      {children}
    </myContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export { myContext };
export default MyContext;
