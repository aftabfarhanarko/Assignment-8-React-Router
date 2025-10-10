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
  console.log(app);
//   const chartData = {
//     name: app.name,
//     uv: app,
//   }
  const getIntroOfPage = (label) => {
    if (label === "Page A") {
      return "Page A is about men's clothing";
    }
    if (label === "Page B") {
      return "Page B is about women's dress";
    }
    if (label === "Page C") {
      return "Page C is about women's bag";
    }
    if (label === "Page D") {
      return "Page D is about household goods";
    }
    if (label === "Page E") {
      return "Page E is about food";
    }
    if (label === "Page F") {
      return "Page F is about baby food";
    }
    return "";
  };

  const CustomTooltip = ({ active, payload, label }) => {
    const isVisible = active && payload && payload.length;
    return (
      <div
        className="custom-tooltip"
        style={{ visibility: isVisible ? "visible" : "hidden" }}
      >
        {isVisible && (
          <>
            <p className="label">{`${label} : ${payload[0].value}`}</p>
            <p className="intro">{getIntroOfPage(label)}</p>
            <p className="desc">Anything you want can be displayed here.</p>
          </>
        )}
      </div>
    );
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={CustomTooltip} />
        <Legend />
        <Bar dataKey="pv" barSize={20} fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
