import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreatePendanaan from "./pages/CreatePendanaan";
import Home from "./pages/Home";

export default function Navigation() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about">
            <About />
          </Route>
          <Route path="/create" component={CreatePendanaan} />
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
