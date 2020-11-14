import React, { useState } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Result from "./pages/Result";

const VotingApp = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/result" component={Result} />
        </Switch>
      </div>
    </Router>
  );
};

render(<VotingApp />, document.querySelector("#root"));
