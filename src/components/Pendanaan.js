import React, { useContext } from "react";
import { Link } from "react-router-dom";

//context
import { GlobalContext } from "../context/GlobalState";

//utils
import moment from "moment";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { formatRp } from "../utils/formatRp";

const Pendanaan = ({ h, i }) => {
  const { getPendanaanDetail, deleteOnePendanaan } = useContext(GlobalContext);

  return (
    <motion.div
      key={i}
      className="p-4 m-2 shadow-lg bg-white rounded-lg"
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.7 },
      }}
      whileTap={{
        scale: 1,
      }}
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
            delay: 0.5 + i / 2,
          },
        },
      }}
    >
      <div className="flex justify-between">
        <Link
          to={`pendanaan/${h.id}`}
          onClick={() => getPendanaanDetail(h)}
          className="text-green-800 font-bold text-lg"
        >
          {h.namaPendanaan}
        </Link>
        <button
          className="text-red-700 text-sm"
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
                deleteOnePendanaan(h.id);
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
              }
            });
          }}
        >
          Hapus
        </button>
      </div>

      <div className="mb-2">
        <p className="text-sm text-gray-500">
          {h.semuaProduk.length} pendanaan
        </p>
      </div>

      <hr />

      <div className="grid grid-cols-2 mt-2 mb-2">
        <div>
          <h1>Dana awal</h1>
          <h1>{formatRp(h.danaAwal)}</h1>
        </div>
        <div>
          <h1>Dana akhir</h1>
          <h1>{formatRp(h.danaAkhir)}</h1>
        </div>
      </div>
      <p className="text-gray-400 text-xs">{moment(h.createdAt).fromNow()}</p>
    </motion.div>
  );
};

export default Pendanaan;
