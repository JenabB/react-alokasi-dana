import { useState } from "react";
import AppBar from "components/home/B1.AppBar";
import AddPlanModal from "components/plan/AddPlanModal";
import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const Plan = () => {
  const [isShow, setIshow] = useState(false);

  const handleShow = () => {
    setIshow(!isShow);
  };
  return (
    <div>
      <AppBar />
      <AddPlanModal isShow={isShow} handleShow={handleShow} />
      <div className="p-4">
        <h1>Tulis rencana pendanaan disini</h1>
        <button
          className="bg-primary my-8 p-2 rounded-lg flex text-white items-center"
          onClick={handleShow}
        >
          <span className="material-icons" style={{ fontSize: "12px" }}>
            add
          </span>
          <h1 style={{ fontSize: "12px" }}>Tambahkan</h1>
        </button>

        <nav className=" w-full p-2 flex justify-evenly bg-white shadow-lg items-center">
          <div className="flex flex-col items-center">
            <div className="material-icons">home</div>
            <NavLink to="/plan">incomplete</NavLink>
          </div>
          <div className="flex flex-col items-center">
            <div className="material-icons">payment</div>
            <NavLink to="/plan/complete">complete</NavLink>
          </div>
        </nav>
        <Outlet />
      </div>
    </div>
  );
};

export default Plan;
