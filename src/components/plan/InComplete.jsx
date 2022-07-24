import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "context/GlobalState";
import Swal from "sweetalert2";
import { formatRp } from "utils/formatRp";
import moment from "moment";
import { motion } from "framer-motion";
import EditPlanModal from "./EditPlanModal";
import { searchInput } from "theme/inputTheme";
import Summary from "./components/Summary";
import SortItem from "./components/SortItem";

const InComplete = () => {
  const { plan, setToCompletePlan, deletePlan } = useContext(GlobalContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedId, setSelectedId] = useState("");
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("terdekat");

  const handleIsEdit = (planId) => {
    setSelectedId(planId);
    setIsEdit(!isEdit);
  };

  const item = plan.filter((el) => el.complete === false);

  // eslint-disable-next-line array-callback-return
  const ddd = item.filter((dat) => {
    if (query === null) return dat;
    else if (dat.name.toLowerCase().includes(query.toLowerCase())) return dat;
  });

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };
  const handleComplete = (planId) => {
    const matchPlan = plan.find((el) => el.planId === planId);

    const updatedPlan = {
      ...matchPlan,
      complete: !matchPlan.complete,
    };

    setToCompletePlan(updatedPlan);
  };

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

  const handleSelectChange = (e) => {
    setSortBy(e.target.value);
  };

  const da = ddd.sort((a, b) => {
    if (sortBy === "a-z") return a.name.localeCompare(b.name);
    else if (sortBy === "z-a") return b.name.localeCompare(a.name);
    else if (sortBy === "termahal") return b.price - a.price;
    else if (sortBy === "termurah") return a.price - b.price;
    else if (sortBy === "terdekat") return new Date(a.date) - new Date(b.date);
    else if (sortBy === "terjauh") return new Date(b.date) - new Date(a.date);
    return ddd;
  });

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
      <EditPlanModal
        isEdit={isEdit}
        selectedId={selectedId}
        handleEdit={handleIsEdit}
      />
      <Summary totalPrice={totalPrice} length={plan.length} />
      <div className="text-center my-8">
        <input
          type="search"
          value={query}
          onChange={handleQueryChange}
          className={searchInput}
          placeholder="cari plan"
        />
      </div>
      <SortItem sortBy={sortBy} handleSelectChange={handleSelectChange} />
      <div>
        {da.map((val, index) => (
          <div key={index}>
            <div className="my-4 rounded bg-white shadow-lg ">
              <div
                className={
                  moment().format() > moment(val.date).fromNow()
                    ? "bg-asmara p-1 px-2"
                    : "bg-tabungan p-1 px-2"
                }
              >
                <h1 className="text-white font-">
                  {moment(val.date).fromNow()}
                </h1>
              </div>
              <div className="items-center flex justify-between p-2">
                <div>
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
                    className="material-icons mx-2 text-primary"
                    onClick={() => handleIsEdit(val.planId)}
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
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default InComplete;
