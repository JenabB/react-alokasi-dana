import React, { useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  CartesianGrid,
} from "recharts";

export default function ReportChart({ data }) {
  const [dataShown, setDataShown] = useState("");
  const handleDataShownChange = (e) => {
    setDataShown(e.target.value);
  };

  return (
    <>
      <select
        name="dataShown"
        value={dataShown}
        className="p-2 w-full my-4"
        onChange={handleDataShownChange}
      >
        <option style={{ display: "none" }} value="">
          Filter Data
        </option>
        <option value="">None</option>
        <option value="totalDana">Total Dana Dialokasikan</option>
        <option value="danaAwal">Dana Awal</option>
        <option value="danaAkhir">Dana Akhir</option>
      </select>

      <ResponsiveContainer width="95%" height={260}>
        <BarChart width={150} height={150} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          {["", "totalDana"].includes(dataShown) && (
            <Bar
              name="Total Dana Dialokasikan"
              dataKey="totalDana"
              fill="#0088FE"
            />
          )}
          {["", "danaAwal"].includes(dataShown) && (
            <Bar name="Dana Awal" dataKey="danaAwal" fill="#00C49F" />
          )}
          {["", "danaAkhir"].includes(dataShown) && (
            <Bar name="Dana Akhir" dataKey="danaAkhir" fill="#FFBB28" />
          )}
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}
