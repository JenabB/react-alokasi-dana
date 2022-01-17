import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "context/GlobalState";

import { formatRp } from "utils/formatRp";

const InComplete = () => {
  const { plan, deletePlan } = useContext(GlobalContext);
  const [totalPrice, setTotalPrice] = useState(0);

  const item = plan.filter((el) => el.complete === false);
  console.log(item);
  // const handleChange = (e) => {
  //   // setValue([...value, [e.target.name]: e.target.checked]);
  // };

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
      <div className="bg-white shadow-sm rounded p-4 m-2">
        <h1>total: {formatRp(totalPrice)}</h1>
        <h2>{plan.length} hal telah direncanakan</h2>
      </div>
      <div className="">
        {plan.map((val, index) => (
          <>
            <div
              key={index}
              className="my-4 rounded bg-white shadow-lg p-4 py-2"
            >
              <div className="items-center flex justify-between">
                <div>
                  <h1 className="text-pribadi font-bold">{val.name}</h1>
                  <h1>{formatRp(val.price)}</h1>
                </div>
                <div className="flex items-center">
                  <button
                    className="material-icons mx-2 text-pribadi"
                    onClick={() => handleDeletePlan(val.planId)}
                  >
                    check_circle
                  </button>
                  <button
                    className="material-icons text-red"
                    onClick={() => handleDeletePlan(val.planId)}
                  >
                    delete
                  </button>
                </div>
                {/* <div className="bg-white shadow-lg inline-block rounded-xl text-center">
                  <h1 className="bg-red text-white rounded-t-xl w-full">
                    {moment(val.date).format("MMM")}
                  </h1>
                  <div className="px-8">
                    <h1>{moment(val.date).format("DD")}</h1>
                    <h1>{moment(val.date).format("YYYY")}</h1>
                  </div>
                </div> */}
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default InComplete;
