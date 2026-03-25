import { myContext } from "../context/MyContext";
import { useContext } from "react";

function UseMyContext() {
  return useContext(myContext);
}

export default UseMyContext;
