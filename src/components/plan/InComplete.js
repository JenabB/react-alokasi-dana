import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "context/GlobalState";
import moment from "moment";
import { formatRp } from "utils/formatRp";
import ActionPopover from "./ActionPopover";

const InComplete = () => {
  const { plan, deletePlan } = useContext(GlobalContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [actionOpen, setActionOpen] = useState(false);

  const item = plan.filter((el) => el.complete === false);
  console.log(item);
  // const handleChange = (e) => {
  //   // setValue([...value, [e.target.name]: e.target.checked]);
  // };

  const handleActionOpen = () => setActionOpen(true);
  const handleActionClose = () => setActionOpen(false);

  useEffect(() => {
    const t = item.reduce((a, b) => parseInt(a.price) + parseInt(b.price));

    setTotalPrice(t);
  }, [item]);

  console.log(totalPrice);

  const handleDeletePlan = (planId) => {
    console.log(planId, "ini planId");
    deletePlan(planId);
  };

  return (
    <div>
      <div className="bg-white shadow-sm p-4 m-2">
        <h1>total: {formatRp(totalPrice)}</h1>
      </div>
      <div className="">
        {plan.map((val, index) => (
          <>
            <ActionPopover
              open={actionOpen}
              planId={val.planId}
              handleClose={handleActionClose}
            />
            <div key={index} className="my-4 bg-white shadow-lg p-4">
              <div className="text-right">
                <button
                  className="material-icons"
                  onClick={() => handleDeletePlan(val.planId)}
                >
                  delete
                </button>
              </div>
              <div className="items-center flex justify-between">
                <div>
                  <h1 htmlFor={val.name}>{val.name}</h1>
                  <h1>{formatRp(val.price)}</h1>
                </div>
                <div className="bg-white shadow-lg inline-block rounded-xl text-center">
                  <h1 className="bg-red text-white rounded-t-xl w-full">
                    {moment(val.date).format("MMM")}
                  </h1>
                  <div className="px-8">
                    <h1>{moment(val.date).format("DD")}</h1>
                    <h1>{moment(val.date).format("YYYY")}</h1>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default InComplete;
