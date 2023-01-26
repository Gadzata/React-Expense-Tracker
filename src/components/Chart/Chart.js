import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props) {
  console.log(props.dataPoints);
  const dataPointValues = props.dataPoints.map(
    (dataPointh) => dataPointh.value
  );
  console.log(dataPointValues);
  let totalMaximum = 0;
  if (dataPointValues.length > 0) {
    totalMaximum = Math.max(...dataPointValues);
  }

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
