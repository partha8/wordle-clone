import { useStateContext } from "../context/StateProvider";

export const Key = ({ keyVal, bigKey, disabled }) => {
  const { gameOver, onSelectLetter, onDelete, onEnter } = useStateContext();
  
  const selectLetter = () => {
    if (gameOver.gameOver) return;
    if (keyVal === "ENTER") {
      onEnter();
    } else if (keyVal === "DELETE") {
      onDelete();
    } else {
      onSelectLetter(keyVal);
    }
  };
  return (
    <div
      className="key"
      id={bigKey ? "big" : disabled && "disabled"}
      onClick={selectLetter}
    >
      {keyVal}
    </div>
  );
};
