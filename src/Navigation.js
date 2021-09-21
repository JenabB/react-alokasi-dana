import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreatePendanaan from "./pages/C.CreatePendanaan";
import DanaDetail from "./pages/D.DanaDetail";
import EditPendanaan from "./pages/E.EditPendanaan";
import Home from "./pages/B.Home";
import TotalDetail from "./pages/G.TotalDetail";
import ViewAllPendanaan from "./pages/F.ViewAllPendanaan";
import Welcome from "./pages/A.Welcome";
import ProdukByCategory from "./pages/H.ProdukByCategory";

export default function Navigation() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/home" component={Home} />
          <Route path="/create" component={CreatePendanaan} />
          <Route path="/detail" component={TotalDetail} />
          <Route path="/all" component={ViewAllPendanaan} />
          <Route exact path="/pendanaan/:id" component={DanaDetail} />
          <Route path="/pendanaan/:id/edit" component={EditPendanaan} />
          <Route
            exact
            path="/kategori/:kategori"
            component={ProdukByCategory}
          />
        </Switch>
      </div>
    </Router>
  );
}
