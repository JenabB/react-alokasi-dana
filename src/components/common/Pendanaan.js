import React, { useContext } from "react";
import { Link } from "react-router-dom";

//context
import { GlobalContext } from "context/GlobalState";

//utils
import moment from "moment";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { danaCard } from "theme/rectangularTheme";
import { formatRp } from "utils/formatRp";

const Pendanaan = ({ h, i }) => {
  const { getPendanaanDetail, deleteOnePendanaan } = useContext(GlobalContext);

  return (
    <motion.div
      key={i}
      className={danaCard}
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
          to={`/pendanaan/${h.id}`}
          onClick={() => getPendanaanDetail(h)}
          className="text-primary font-bold text-lg"
        >
          {h.namaPendanaan}
        </Link>
        <button
          className="material-icons text-red"
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
          delete
        </button>
      </div>

      <div className="mb-2">
        <p className="text-sm text-gray-500">
          {h.semuaProduk.length} pendanaan
        </p>
      </div>

      <hr />

      <div className="flex justify-between my-4 px-4">
        <div>
          <h1 className="text-lg">Dana awal</h1>
          <p>{formatRp(h.danaAwal)}</p>
        </div>
        <div>
          <h1 className="text-lg">Dana akhir</h1>
          <p>{formatRp(h.danaAkhir)}</p>
        </div>
      </div>
      <p className="text-gray-400 text-xs">{moment(h.createdAt).fromNow()}</p>
    </motion.div>
  );
};

export default Pendanaan;
