import moment from "moment";
import { formatRp } from "utils/formatRp";

import { Link } from "react-router-dom";
import { danaCard } from "theme/rectangularTheme";

const Dana = ({ dana }) => {
  const categoryColor = (category) => {
    if (category === "pribadi") return "bg-pribadi";
    if (category === "umum") return "bg-umum";
    if (category === "keluarga") return "bg-keluarga";
    if (category === "tabungan") return "bg-tabungan";
    if (category === "hiburan") return "bg-hiburan";
    if (category === "asmara") return "bg-asmara";
    if (category === "pendidikan") return "bg-pendidikan";
    if (category === "kesehatan") return "bg-kesehatan";
    if (category === "pembangunan") return "bg-pembangunan";
    if (category === "makanan") return "bg-makanan";
    if (category === "ibadah") return "bg-ibadah";
    if (category === "estetika") return "bg-estetika";
    if (category === "cicilan") return "bg-cicilan";
    if (category === "tagihan") return "bg-tagihan";

    return "bg-primary";
  };

  return (
    <div className={danaCard}>
      <h1 className="text-primary text-xl font-bold">{dana.nama}</h1>
      <div className="grid grid-cols-2 items-center">
        <Link to={`/kategori/${dana.category}`}>
          <h2
            className={`inline-block px-3 py-1 rounded-lg text-white my-2 ${categoryColor(
              dana.category
            )} text-xs`}
          >
            {dana.category}
          </h2>
        </Link>
        <h3 className="mx-2">{formatRp(dana.harga)}</h3>
      </div>
      <p className="text-gray-400 text-sm ">
        {moment(dana.createdAt).fromNow()}
      </p>
    </div>
  );
};

export default Dana;
