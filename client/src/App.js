import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import TopNav from "./components/Navbar/Navbar";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Dummy from "./pages/Dummy";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <Router>
      <Container>
        <TopNav />
        <Switch>
          <Route exact path="/" component={Dummy}></Route>
          <Route path="/search" component={Search}></Route>
          <Route path="/saved" component={Saved}></Route>
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
