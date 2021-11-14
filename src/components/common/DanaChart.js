import React, { useContext } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { GlobalContext } from "context/GlobalState";

export default function DanaChart() {
  const { pendanaanDetail } = useContext(GlobalContext);

  const data = pendanaanDetail.semuaProduk.map((dana, index) => ({
    name: dana.nama,
    value: parseInt(dana.harga),
  }));

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  let renderLabel = function (data) {
    return data.name;
  };

  return (
    <ResponsiveContainer width="95%" height={260}>
      <PieChart width={150} height={150}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label={renderLabel}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
