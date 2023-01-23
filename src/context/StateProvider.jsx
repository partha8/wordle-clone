import { useContext, createContext, useState } from "react";
import { boardDefault } from "../utils/utils";

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [board, setBoard] = useState(boardDefault);

  return (
    <StateContext.Provider
      value={{
        board,
        setBoard,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
