import { useState } from "react";
import "./App.css";
import Board from "./Board";

export default function App() {
  const [historyBoard, setHistoryBoard] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [historyVisibility, setHistoryVisibility] = useState(false);
  const currentBoard = historyBoard[currentMove];
  const xNext = currentMove % 2 === 0;

  function handlePlay(nextBoard) {
    const nextHistoryBoard = [
      ...historyBoard.slice(0, currentMove + 1),
      nextBoard,
    ];
    setHistoryBoard(nextHistoryBoard);
    setCurrentMove(nextHistoryBoard.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = historyBoard.map((board, move) => {
    let description;
    if (move > 0) description = "চাল #" + move;
    else description = "শুরু!";
    return (
      <button
        className="history-button"
        key={move}
        onClick={() => jumpTo(move)}
      >
        {description}
      </button>
    );
  });

  function handleReset() {
    setHistoryBoard([Array(9).fill(null)]);
    setCurrentMove(0);
  }

  function handleUndo() {
    if (currentMove === 0) return;
    setCurrentMove(currentMove - 1);
  }

  function toggleHistoryVisibility() {
    setHistoryVisibility(!historyVisibility);
  }

  return (
    <div className="main">
      <h1>কাটা-কুটি</h1>

      <Board xNext={xNext} board={currentBoard} onPlay={handlePlay} />

      <div className="buttons">
        <button className="buttons-button" onClick={handleReset}>শুরু থেকে শুরু হোক!</button>
        <button className="buttons-button" onClick={handleUndo}>খেলব না, এই চাল বাদ!</button>
        <button className="buttons-button" onClick={toggleHistoryVisibility}>
          {historyVisibility? "থাক দেখা লাগবে না!":"কী যে হইসিল এইখানে!"}
        </button>
      </div>

      <div className={historyVisibility ? "history" : ""} hidden={!historyVisibility}>
        {moves}
      </div>
    </div>
  );
}
