import {useState} from "react";
import "./App.css";

function Box({value, onBoxClick}) {
  return (
    <button className="box" onClick={onBoxClick}>
      {value}
    </button>
  );
}

export default function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xNext, setXNext] = useState(true);

  function handleClick(index) {
    if(board[index] != null) return;
    
    const nextBoard = board.slice();
    
    if(xNext) {
      nextBoard[index] = "X";
      setXNext(false);
    }
    else {
      nextBoard[index] = "O";
      setXNext(true);
    }
    
    setBoard(nextBoard);
  };

  return (
    <div className="main">
      <h1>কাটাকুটি</h1>

      <div className="board">
        <Box value={board[0]} onBoxClick={() => handleClick(0)}/>
        <Box value={board[1]} onBoxClick={() => handleClick(1)}/>
        <Box value={board[2]} onBoxClick={() => handleClick(2)}/>

        <Box value={board[3]} onBoxClick={() => handleClick(3)}/>
        <Box value={board[4]} onBoxClick={() => handleClick(4)}/>
        <Box value={board[5]} onBoxClick={() => handleClick(5)}/>

        <Box value={board[6]} onBoxClick={() => handleClick(6)}/>
        <Box value={board[7]} onBoxClick={() => handleClick(7)}/>
        <Box value={board[8]} onBoxClick={() => handleClick(8)}/>
      </div>
    </div>
  );
}
