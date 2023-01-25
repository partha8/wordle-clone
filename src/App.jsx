import React from "react";
import { Board } from "./components/Board";
import { Keyboard } from "./components/Keyboard";
import { GameOver } from "./components/GameOver";
import "./App.css";
import { useStateContext } from "./context/StateProvider";

export const App = () => {
  const { gameOver } = useStateContext();
  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
      </nav>
      <Board />
      {gameOver.gameOver ? <GameOver /> : <Keyboard />}
    </div>
  );
};
