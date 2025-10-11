import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ app }) => {
  const ratingData = app ? [...app].reverse() : [];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-[#fff] border border-[#ccc] p-3 rounded-lg shadow-xl ">
          <p className="font-semibold text-gray-600">{label}</p>
          <p className="font-semibold text-gray-600">
            Count : {payload[0].value}
          </p>
        </div>
      );
    }
    return null;
  };
  return (
    <div className="  rounded-lg shadow-sm bg-white mt-10">
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          layout="vertical"
          data={ratingData}
          margin={{ right: 20, left: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis type="category" dataKey="name" />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar dataKey="count" fill="#FF8811" barSize={22} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
