import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Main";
import StateProps from "./1-state-props";
import Monsters from "./2-monsters";
import OnChange from "./3-onChange";
import ActiveTab from "./4-active-tab";
import LiftingStateUp from "./5-lifting-state-up";
import UrlParameters from "./6-url-parameters";

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/stateprops" component={StateProps} />
          <Route exact path="/monsters" component={Monsters} />
          <Route exact path="/onchange" component={OnChange} />
          <Route exact path="/active-tab" component={ActiveTab} />
          <Route exact path="/lifting-state-up" component={LiftingStateUp} />
          <Route exact path="/url-parameters" component={UrlParameters} />
        </Switch>
      </Router>
    );
  }
}
