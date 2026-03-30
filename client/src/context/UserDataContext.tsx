import { createContext, useState, ReactNode } from "react";

/* -------------------- TYPES -------------------- */

type UserData = {
  character: string;
  userName: string;
  roomCode: string;
};

type UserDataContextType = {
  userData: UserData;
  changeUserData: (key: keyof UserData, value: string) => void;
  resetUserData: () => void;
  totalMembers: number;
  setTotalMembers: React.Dispatch<React.SetStateAction<number>>;
};

type UserDataProviderProps = {
  children: ReactNode;
};

/* -------------------- CONTEXT -------------------- */

// undefined default forces proper usage with provider
const userDataContext = createContext<UserDataContextType | undefined>(
  undefined,
);

/* -------------------- PROVIDER -------------------- */

function UserDataProvider({ children }: UserDataProviderProps) {
  const [userData, setUserData] = useState<UserData>({
    character: "Doge",
    userName: "",
    roomCode: "",
  });

  const [totalMembers, setTotalMembers] = useState<number>(0);

  const resetUserData = () => {
    setUserData({
      character: "Doge",
      userName: "",
      roomCode: "",
    });
  };

  const changeUserData = (key: keyof UserData, value: string) => {
    setUserData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <userDataContext.Provider
      value={{
        userData,
        changeUserData,
        resetUserData,
        totalMembers,
        setTotalMembers,
      }}
    >
      {children}
    </userDataContext.Provider>
  );
}
// eslint-disable-next-line react-refresh/only-export-components
export { userDataContext };
export default UserDataProvider;
