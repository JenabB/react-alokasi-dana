import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreatePendanaan from "./pages/CreatePendanaan";
import DanaDetail from "./pages/DanaDetail";
import EditPendanaan from "./pages/EditPendanaan";
import Home from "./pages/Home";
import TotalDetail from "./pages/TotalDetail";
import Welcome from "./pages/Welcome";

export default function Navigation() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/home" component={Home} />
          <Route path="/create" component={CreatePendanaan} />
          <Route path="/detail" component={TotalDetail} />
          <Route exact path="/pendanaan/:id" component={DanaDetail} />
          <Route path="/pendanaan/:id/edit" component={EditPendanaan} />
        </Switch>
      </div>
    </Router>
  );
}
