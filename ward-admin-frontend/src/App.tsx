import React from "react";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={DashboardPage}></Route>
          <Route path="/login" exact component={LoginPage}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
