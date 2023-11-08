import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev +1);
  const onChange = (evnet) => setKeyword(evnet.target.value);
  useEffect(() => {
    console.log("I run only once");
  }, []);
  useEffect(() => {
    console.log("I run when 'keyword' Changes.");
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' Changes.");
  }, [counter]);
  return (
    <div>
      <input 
      value={keyword} 
      onChange={onChange} 
      type="text" placeholder="Search here....." />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me!</button>
    </div>
  );
}

export default App;
