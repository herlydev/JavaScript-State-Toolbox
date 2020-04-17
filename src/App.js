import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.css";

import NavigationContainer from "./components/navigation/navigation-container";
import Align from "./components/pages/align";
import ChangeColor from "./components/pages/change-color";
import Clock from "./components/pages/clock";
import Counter from "./components/pages/counter";
import FontSizer from "./components/pages/font-sizer";
import Home from "./components/pages/home";
import ShowHide from "./components/pages/show-hide";
import Toggle from "./components/pages/toggle";

export default function App() {
  return (
    <div className="App">
      <Router>
        <NavigationContainer />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/counter" component={Counter} />
          <Route exact path="/toggle" component={Toggle} />
          <Route exact path="/font-sizer" component={FontSizer} />
          <Route exact path="/align" component={Align} />
          <Route exact path="/show-hide" component={ShowHide} />
          <Route exact path="/clock" component={Clock} />
          <Route exact path="/change-color" component={ChangeColor} />
        </Switch>
      </Router>
    </div>
  );
}
