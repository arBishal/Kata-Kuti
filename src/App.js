import { useState, useEffect } from "react";
import "./App.css";

function Box({ value, onBoxClick }) {
  return (
    <button className="box" onClick={onBoxClick}>
      {value}
    </button>
  );
}

function Board({xNext, board, onPlay}) {
  const [count, setCount] = useState(0);
  
  function handleClick(index) {
    setCount(count + 1);

    if(board[index] || winnerCalculation(board)) return;

    const nextBoard = board.slice();
    nextBoard[index] = xNext ? "X" : "O";

    onPlay(nextBoard);
  }

  const winner = winnerCalculation(board);

  let status;
  if (count === 0) status = "শুরু করবে: কাটা";
  else {
    if (winner) {
      if (winner === "X") status = "কাটা জিতেছে!";
      else if (winner === "O") status = "কুটি জিতেছে!";
    } else if (winner === null && count > 8) status = "কেউ জিতেনি!";
    else status = "এবার খেলবে: " + (xNext ? "কাটা" : "কুটি");
  }

  return (
    <>
      <div className="status">{status}</div>

      <div className="board">
        <Box value={board[0]} onBoxClick={() => handleClick(0)} />
        <Box value={board[1]} onBoxClick={() => handleClick(1)} />
        <Box value={board[2]} onBoxClick={() => handleClick(2)} />

        <Box value={board[3]} onBoxClick={() => handleClick(3)} />
        <Box value={board[4]} onBoxClick={() => handleClick(4)} />
        <Box value={board[5]} onBoxClick={() => handleClick(5)} />

        <Box value={board[6]} onBoxClick={() => handleClick(6)} />
        <Box value={board[7]} onBoxClick={() => handleClick(7)} />
        <Box value={board[8]} onBoxClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default function App() {
  const [xNext, setXNext] = useState(true);
  const [historyBoard, setHistoryBoard] = useState([Array(9).fill(null)]);
  const currentBoard = historyBoard[historyBoard.length - 1];

  function handlePlay(nextBoard) {
    setHistoryBoard([...historyBoard, nextBoard]);
    setXNext(!xNext);
  }

  return (
    <div className="main">
      <h1>কাটা-কুটি</h1>

      <Board xNext={xNext} board={currentBoard} onPlay={handlePlay} />

      <div className="history"></div>
    </div>
  );
}

function winnerCalculation(board) {
  const moves = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < moves.length; i++) {
    const [a, b, c] = moves[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}
