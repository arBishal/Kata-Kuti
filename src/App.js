import "./App.css";

function Box({value}) {
  return <button className="box">{value}</button>
}

export default function App() {
  return (
    <div className="main">
      
      <h1>কাটাকুটি</h1>
      
      <div className="board">
      
        <Box value="১"/>
        <Box value="২"/>
        <Box value="৩"/>

        <Box value="৪"/>
        <Box value="৫"/>
        <Box value="৬"/>

        <Box value="৭"/>
        <Box value="৮"/>
        <Box value="৯"/>
      
      </div>

    </div>
  );
}
