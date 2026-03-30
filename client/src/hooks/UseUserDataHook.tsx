import { userDataContext } from "../context/UserDataContext";
import { useContext } from "react";

function UseUserDataContext() {
  return useContext(userDataContext);
}

export default UseUserDataContext;
