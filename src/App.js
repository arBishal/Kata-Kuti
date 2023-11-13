import {useState} from "react";
import "./App.css";

function Box() {
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue("X");
  }

  return (
    <button className="box" onClick={handleClick}>
      {value}
    </button>
  );
}

export default function App() {
  return (
    <div className="main">
      <h1>কাটাকুটি</h1>

      <div className="board">
        <Box />
        <Box />
        <Box />

        <Box />
        <Box />
        <Box />

        <Box />
        <Box />
        <Box />
      </div>
    </div>
  );
}
