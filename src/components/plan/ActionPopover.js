import React, { useContext } from "react";
import { GlobalContext } from "context/GlobalState";
import Swal from "sweetalert2";

const ActionPopover = ({ open, planId, handleClose }) => {
  const { deletePlan } = useContext(GlobalContext);

  const handleDelete = (planId) => console.log(planId);
  return (
    <>
      {open && (
        <div className="absolute z-20 rounded-lg bg-white shadow-2xl p-2">
          <div className="text-right pt-2">
            <button className="material-icons text-red" onClick={handleClose}>
              close
            </button>
          </div>
          <div className="px-4 pb-2">
            <button className="mb-2">selesai</button>
            <br />

            <button
              className="text-red"
              onClick={() => {
                Swal.fire({
                  title: "Hapus pendanaan?",
                  text: "You won't be able to revert this!",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, delete it!",
                }).then((result) => {
                  if (result.isConfirmed) {
                    handleDelete(planId);
                    Swal.fire(
                      "Deleted!",
                      "Your file has been deleted.",
                      "success"
                    );
                  }
                });
              }}
            >
              hapus
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ActionPopover;
