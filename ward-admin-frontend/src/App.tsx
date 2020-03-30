import React from "react";

import 'react-uikit-ward/dist/index.css';

import DashboardPage from "./pages/DashboardPage/DashboardPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProductManagePage from "./pages/ProductManagePage/ProductManagePage";
import ProductDetailPage from "./pages/ProductDetailPage/ProductDetailPage";
import HolyGrailTemplate from "./components/templates/HolyGrail/HolyGrail";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  RouteComponentProps
} from "react-router-dom";
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
        <HolyGrailTemplate>
          <Switch>
            <Route path="/" exact component={DashboardPage}></Route>
            <Route path="/account/:mode" exact component={LoginPage}></Route>
            <Route
              path="/productManage"
              exact
              component={ProductManagePage}
            ></Route>
            <Route
              path="/productDetail/:productIdx"
              exact
              component={ProductDetailPage}
            ></Route>
          </Switch>
        </HolyGrailTemplate>
      </Router>
    </div>
  );
};

export default App;
