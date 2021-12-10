import React from "react";

const AddPlanModal = ({ isShow, handleShow }) => {
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
          className="bg-white lg:w-1/4 xs:w-3/4 shadow-lg p-4 rounded-md absolute z-10 top-40"
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
              className="bg-input w-full p-2 m-2 rounded-md"
            />
            <br />
            <input
              type="number"
              placeholder="biaya"
              className="bg-input p-2 m-2 w-full mb-8 rounded-lg"
            />
            <br />
            <label>Rencana akan dilakukan</label>
            <input type="date" className="bg-input p-2 m-2 rounded-lg" />
          </div>
          <div className="flex justify-center mt-10">
            <button className="flex bg-primary px-3 py-1 justify-center items-center rounded-lg">
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
