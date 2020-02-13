import React from "react";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { BrowserRouter as Router, Route, Switch, RouteComponentProps  } from "react-router-dom";
import "./App.css";

// interface MatchParams {
//   mode: string;
// }

// interface MatchProps extends RouteComponentProps<MatchParams> {
// }

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={DashboardPage}></Route>
          <Route path="/account/:mode" exact component={LoginPage}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
