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
  Welcome,
  CreatePendanaan,
  TotalDetail,
  ViewAllPendanaan,
  DanaDetail,
  EditPendanaan,
  ProductByCategory,
  Report,
} from "pages";

export default function BottomNavigation() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BottomLayout />}>
          <Route index element={<Home />} />
          <Route path="dana" element={<ViewAllPendanaan />} />
          <Route path="create" element={<CreatePendanaan />} />
          <Route path="report" element={<Report />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </Router>
  );
}

function BottomLayout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}

      <Outlet />
      <nav className="text-primary fixed bottom-0 w-full p-2 flex justify-evenly bg-white shadow-lg items-center">
        <div className="flex flex-col items-center">
          <div className="material-icons">home</div>
          <Link to="/">Home</Link>
        </div>
        <div className="flex flex-col items-center">
          <div className="material-icons">payment</div>
          <Link to="/dana">Dana</Link>
        </div>
        <div>
          <button className="material-icons" style={{ fontSize: "60px" }}>
            <Link to="/create"> add_circle</Link>
          </button>
        </div>
        <div className="flex flex-col items-center">
          <div className="material-icons">bar_chart</div>
          <Link to="/report">Report</Link>
        </div>
        <div className="flex flex-col items-center">
          <div className="material-icons">event</div>
          <Link to="/plan">Plan</Link>
        </div>
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
