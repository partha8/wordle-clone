import React from "react";
import { useStateContext } from "../context/StateProvider";

export const Letter = ({ letterPos, attemptValue }) => {
  const { board } = useStateContext();
  const letter = board[attemptValue][letterPos];
  return <div className="letter">{letter}</div>;
};
