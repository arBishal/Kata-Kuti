import { useState } from "react";
import "./App.css";
import Board from "./Board";

export default function App() {
  const [historyBoard, setHistoryBoard] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
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
      <button className="history-button" key={move} onClick={() => jumpTo(move)}>
        {description}
      </button>
    );
  });

  return (
    <div className="main">
      <h1>কাটা-কুটি</h1>

      <Board xNext={xNext} board={currentBoard} onPlay={handlePlay} />

      <div className="history">{moves}</div>
    </div>
  );
}
