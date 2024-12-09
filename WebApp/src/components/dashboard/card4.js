import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularChart = () => {
  const percentage = 63;

  return (
    <div style={{ width: "80px", height: "80px", margin: "auto" }}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          rotation: 0.5,
          pathColor: "#4caf50",
          textColor: "#000",
          trailColor: "#d6d6d6",
          pathTransitionDuration: 0.5,
        })}
      />
    </div>
  );
};

// Card4 component with CircularChart
const Card4 = () => {
  return (
    <div
  className="w-full bg-white shadow-lg rounded-lg sm:h-[385px] h-auto"
>
  <div className="p-4 flex flex-col items-center justify-center space-y-0">
    <h2 className="text-xl font-semibold mb-4">AQI Status</h2>
    <div className="flex flex-wrap justify-center gap-4">
      <div className="flex flex-col sm:flex-row items-center">
        <CircularChart />
        <h6 className="mt-2">hello</h6>
      </div>
      <div className="flex flex-col items-center">
        <CircularChart />
        <h6 className="mt-2">hello</h6>
      </div>
      <div className="flex flex-col items-center">
        <CircularChart />
        <h6 className="mt-2">hello</h6>
      </div>
      <div className="flex flex-col items-center">
        <CircularChart />
        <h6 className="mt-2">hello</h6>
      </div>
    </div>
  </div>
</div>

  );
};

export default Card4;
