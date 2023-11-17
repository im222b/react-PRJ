import Movie from "./components/movie";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

const { useState, useEffect } = require("react");

function App () {
  return <Router>
    <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />  
        {/*id에 :넣지 않으면 그저 텍스트로 인식 아이디 값을 받지 못함*/}
    </Routes> 
  </Router>;
}

export default App;