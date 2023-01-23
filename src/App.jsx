import React from "react";
import { Board } from "./components/Board";
import { Keyboard } from "./components/Keyboard";
import "./App.css";

export const App = () => {
  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
        <Board />
        <Keyboard />
      </nav>
    </div>
  );
};
