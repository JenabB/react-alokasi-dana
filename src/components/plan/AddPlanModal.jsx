import React, { useState, useContext } from "react";
import { GlobalContext } from "context/GlobalState";
import { v4 as uuidv4 } from "uuid";

const AddPlanModal = ({ isShow, handleShow }) => {
  const { createPlan } = useContext(GlobalContext);

  const [payload, setPayload] = useState({
    name: "",
    price: "",
    date: null,
  });

  const handleChange = (e) => {
    setPayload({ ...payload, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createPlan({
      planId: uuidv4(),
      createdAt: new Date(),
      name: payload.name,
      price: parseInt(payload.price),
      date: payload.date,
      complete: false,
    });
  };

  return (
    <>
      {isShow && (
        <div
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
          }}
          className="bg-white lg:w-1/4 xs:w-3/4 shadow-lg p-4 rounded-md absolute z-10 top-20"
        >
          <div className="flex justify-between">
            <div></div>
            <button className="material-icons text-red" onClick={handleShow}>
              close
            </button>
          </div>
          <h1 className="text-xl mb-4">Bua Planning keuanganmu</h1>
          <div className="p-4">
            <input
              type="text"
              placeholder="nama plan"
              name="name"
              className="bg-input w-full p-2 m-2 rounded-md"
              value={payload.name}
              onChange={handleChange}
            />
            <br />
            <input
              type="number"
              name="price"
              placeholder="biaya"
              className="bg-input p-2 m-2 w-full mb-8 rounded-lg"
              value={payload.price}
              onChange={handleChange}
            />
            <br />
            <label>Rencana akan dilakukan</label>
            <input
              type="date"
              name="date"
              className="bg-input p-2 m-2 rounded-lg"
              value={payload.date}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-center mt-10">
            <button
              className="flex bg-primary px-3 py-1 justify-center items-center rounded-lg"
              onClick={handleSubmit}
            >
              <h1 className="material-icons text-white">save</h1>
              <h1 className="text-white">simpan</h1>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AddPlanModal;
