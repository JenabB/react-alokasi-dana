import React from "react";
import { formatRp } from "utils/formatRp";
const Suggestions = ({ danaAwal }) => {
  return (
    <div className="bg-white p-4 my-8 shadow-lg">
      <h1 className="text-primary font-bold mb-3">
        Saram dari Elizabeth Warren
      </h1>
      <p className="text-sm">{formatRp(danaAwal * 0.5)} untuk kebutuhan</p>
      <p className="text-sm">{formatRp(danaAwal * 0.3)} untuk keinginan</p>
      <p className="text-sm">{formatRp(danaAwal * 0.2)} untuk tabungan</p>
    </div>
  );
};

export default Suggestions;
