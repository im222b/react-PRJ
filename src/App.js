import Movie from "./components/movie";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./components/Detail";

const { useState, useEffect } = require("react");

function App () {
  return <Router>
    <Switch>
      <Route path="/movie">
        <Detail />
      </Route>
      <Route path="/">
      <Home />
      </Route>
    </Switch>
  </Router>;

}

export default App;