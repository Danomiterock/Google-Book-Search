import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Search}></Route>
          <Route path="/search" component={Search}></Route>
          <Route path="/saved" component={Saved}></Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
