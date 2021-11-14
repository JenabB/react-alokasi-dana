import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import moment from "moment";
import { formatRp } from "utils/formatRp";

const Header = ({ detail }) => {
  return (
    <div>
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
        className="px-2"
      >
        <div className="text-center text-white mt-2">
          <div className="bg-primary p-4 rounded">
            <div className="flex justify-between px-4">
              <div></div>
              <h1 className="text-3xl font-bold">{detail.namaPendanaan}</h1>
              <Link to={`${detail.id}/edit`}>
                <span className="material-icons md-24">edit</span>
              </Link>
            </div>
            <p>
              {moment(detail.createdAt).format("dddd, MMMM Do YYYY, h:mm:ss a")}
            </p>
          </div>

          <div className="grid grid-cols-2 mt-1 bg-primary p-4 rounded">
            <div>
              <h1>Dana Awal</h1>
              <h1 className="font-bold text-xl">{formatRp(detail.danaAwal)}</h1>
            </div>
            <div>
              <h1>Dana Akhir</h1>
              <h1 className="font-bold text-xl">
                {formatRp(detail.danaAkhir)}
              </h1>
            </div>
            <div className="mt-4">
              <h1>Total Pengeluaran</h1>
              <p className="font-bold text-xl">
                {formatRp(detail.danaAwal - detail.danaAkhir)}
              </p>
            </div>
            <div className="mt-4">
              <h1>Pendanaan Produk</h1>
              <p className="font-bold text-xl">{detail.semuaProduk.length}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
