import { useState, useContext } from "react";

import AddPlanModal from "components/plan/AddPlanModal";
import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { GlobalContext } from "context/GlobalState";
import NoPlan from "components/plan/NoPlan";
import { motion } from "framer-motion";
import { AppBar } from "components/common";

const Plan = () => {
  const [isShow, setIshow] = useState(false);
  const { plan } = useContext(GlobalContext);

  const handleShow = () => {
    setIshow(!isShow);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          scale: 0.8,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 0.4,
          },
        },
      }}
      className="pb-20"
    >
      <AppBar title="Plan" />
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

        {plan.length > 0 ? (
          <div className="lg:w-2/4 mx-auto w-full pb-20">
            <nav className=" w-full p-2 flex justify-evenly bg-white shadow-lg items-center">
              <div className="flex flex-col items-center">
                <div className="material-icons">credit_card_off</div>
                <NavLink to="/plan">Belum Selesai</NavLink>
              </div>
              <div className="flex flex-col items-center">
                <div className="material-icons">view_stream</div>
                <NavLink to="/plan/complete">Selesai</NavLink>
              </div>
            </nav>
            <Outlet />
          </div>
        ) : (
          <NoPlan />
        )}
      </div>
    </motion.div>
  );
};

export default Plan;
