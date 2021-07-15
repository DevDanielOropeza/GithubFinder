import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
// import UserItem from "./components/users/UserItem";
import Home from "./components/pages/Home";
import Notfound from "./components/pages/NotFound";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import User from "./components/users/User";
// Context
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
// Context
import "./App.css";

export const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar title="Github Finder"></Navbar>
            <div className="container">
              <Alert></Alert>
              <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/user/:login" component={User}></Route>
                <Route component={Notfound}></Route>
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
