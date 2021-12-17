import * as React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Link,
} from "react-router-dom";
import {
  Home,
  ViewAllPendanaan,
  CreatePendanaan,
  Report,
  Plan,
  // Welcome,
  // TotalDetail,
  DanaDetail,
  EditPendanaan,

  // ProductByCategory,
} from "pages";
import InComplete from "components/plan/InComplete";
import Completed from "components/plan/Completed";

export default function BottomNavigation() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BottomLayout />}>
          <Route index element={<Home />} />
          <Route path="dana" element={<ViewAllPendanaan />} />
          <Route path="pendanaan/:id" element={<DanaDetail />} />
          <Route path="pendanaan/:id/edit" element={<EditPendanaan />} />
          <Route path="create" element={<CreatePendanaan />} />
          <Route path="report" element={<Report />} />
          <Route path="plan" element={<Plan />}>
            <Route index element={<InComplete />} />
            <Route path="complete" element={<Completed />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </Router>
  );
}

function BottomLayout() {
  return (
    <div>
      <Outlet />
      <nav className="text-primary fixed bottom-0 w-full p-2 flex justify-evenly bg-white shadow-lg items-center">
        <Link className="flex flex-col items-center" to="/">
          <span className="material-icons">home</span>
          Home
        </Link>
        <Link className="flex flex-col items-center" to="/dana">
          <span className="material-icons">payment</span>
          Dana
        </Link>
        <div>
          <button className="material-icons" style={{ fontSize: "60px" }}>
            <Link to="/create"> add_circle</Link>
          </button>
        </div>
        <Link className="flex flex-col items-center" to="/report">
          <span className="material-icons">bar_chart</span>
          Report
        </Link>
        <Link className="flex flex-col items-center" to="/plan">
          <span className="material-icons">event</span>
          Plan
        </Link>
      </nav>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
