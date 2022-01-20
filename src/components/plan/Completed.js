import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "context/GlobalState";
import Swal from "sweetalert2";
import { formatRp } from "utils/formatRp";
import moment from "moment";
import { motion } from "framer-motion";

const Completed = () => {
  const { plan, setToCompletePlan, deletePlan } = useContext(GlobalContext);
  const [totalPrice, setTotalPrice] = useState(0);

  const item = plan.filter((el) => el.complete === true);
  console.log(item);

  const [upPlan, setUpdate] = useState({});

  const handleComplete = (planId) => {
    const matchPlan = plan.find((el) => el.planId === planId);

    const updatedPlan = {
      ...matchPlan,
      complete: !matchPlan.complete,
    };

    setUpdate(updatedPlan);
    console.log(upPlan, "ini up plan");
    setToCompletePlan(updatedPlan);
  };

  console.log(plan, "ini plan");

  useEffect(() => {
    const t = item.reduce((a, b) => a + b.price, 0);

    setTotalPrice(t);
  }, [item]);

  const handleDeletePlan = (planId) => {
    Swal.fire({
      title: "Hapus Plan?",
      text: "Kamu tidak bisa membatalkan ini!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deletePlan(planId);
        Swal.fire("Hapus!", "Plan sudah dihapus.", "success");
      }
    });
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
    >
      <div className="bg-white shadow-sm rounded p-4 my-2">
        <h1>total: {formatRp(totalPrice)}</h1>
        <h2>{plan.length} hal telah direalisasikan</h2>
      </div>
      <div className="">
        {item.map((val, index) => (
          <>
            <div key={index} className="my-4  rounded bg-white shadow-lg ">
              <div
                className={
                  moment().format() > moment(val.date).fromNow()
                    ? "bg-asmara p-1 px-2"
                    : "bg-tabungan p-1 px-2 "
                }
              >
                <h1 className="text-white line-through">
                  {moment(val.date).fromNow()}
                </h1>
              </div>
              <div className="items-center flex justify-between p-2">
                <div className="line-through">
                  <h1 className="text-pribadi font-bold">{val.name}</h1>
                  <h1>{formatRp(val.price)}</h1>
                </div>
                <div className="flex items-center">
                  <button
                    className="material-icons mx-2 text-tabungan"
                    onClick={() => handleComplete(val.planId)}
                  >
                    check_circle
                  </button>
                  <button
                    className="material-icons mx-2 text-pribadi"
                    onClick={() => handleDeletePlan(val.planId)}
                  >
                    edit
                  </button>
                  <button
                    className="material-icons text-red"
                    onClick={() => handleDeletePlan(val.planId)}
                  >
                    delete
                  </button>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </motion.div>
  );
};

export default Completed;
