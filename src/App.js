import { useState, useEffect } from "react";

function Hello() {
  function byFn() {
    console.log("bye :(");
  }
  
  function hiFn() {
    console.log("crarted :)");
    return byFn;
  }
    
  useEffect((hiFn), [])
  return <h1>Hello!</h1>;
}

function App() {
  const [showing, setshowing] = useState(false);
  const onClick = () => setshowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" :"Show"}</button>
    </div>
  );
}

export default App;
