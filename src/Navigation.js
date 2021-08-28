import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreatePendanaan from "./pages/CreatePendanaan";
import DanaDetail from "./pages/DanaDetail";
import Home from "./pages/Home";
import TotalDetail from "./pages/TotalDetail";

export default function Navigation() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/create" component={CreatePendanaan} />
          <Route path="/detail" component={TotalDetail} />
          <Route path="/pendanaan/:id" component={DanaDetail} />
        </Switch>
      </div>
    </Router>
  );
}
