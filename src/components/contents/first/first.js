import React from 'react';
import "./first.css";
import Table from "./table";
import GaugeChart from "react-gauge-chart";
import Bar from "./bar";
const First = () => {
  // Sample data for the gauge chart
  const gaugeData = 0.7; // Value between 0 and 1

  return (
    <div className="acc">
      <div className="title">
        KINEUTKAL
      </div>
      <div className="chart">
        <Table/>
      </div>
      <div className="graph">
      {/* <Bar/>      */}
 </div>
    </div>
  )
}

export default First;
