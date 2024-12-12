import React from "react";
import CanvasJSReact from "@canvasjs/react-charts";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Card3 = () => {
  const bounceRateOptions = {
    height: 200,
    animationEnabled: true,
    exportEnabled: true,
    theme: "light2",
    axisY: {
      title: "Bounce Rate",
      suffix: "%",
    },
    axisX: {
      title: "Week of Year",
      prefix: "W",
      interval: 2,
    },
    data: [
      {
        type: "line",
        toolTipContent: "Week {x}: {y}%",
        dataPoints: [
          {
            x: 1,
            y: 64,
          },
          {
            x: 2,
            y: 61,
          },
          {
            x: 3,
            y: 64,
          },
          {
            x: 4,
            y: 62,
          },
          {
            x: 5,
            y: 64,
          },
          {
            x: 6,
            y: 60,
          },
          {
            x: 7,
            y: 58,
          },
          {
            x: 8,
            y: 59,
          },
          {
            x: 9,
            y: 53,
          },
          {
            x: 10,
            y: 54,
          },
          {
            x: 11,
            y: 61,
          },
          {
            x: 12,
            y: 60,
          },
          {
            x: 13,
            y: 55,
          },
          {
            x: 14,
            y: 60,
          },
          {
            x: 15,
            y: 56,
          },
          {
            x: 16,
            y: 60,
          },
          {
            x: 17,
            y: 59.5,
          },
          {
            x: 18,
            y: 63,
          },
          {
            x: 19,
            y: 58,
          },
          {
            x: 20,
            y: 54,
          },
          {
            x: 21,
            y: 59,
          },
          {
            x: 22,
            y: 64,
          },
          {
            x: 23,
            y: 59,
          },
        ],
      },
    ],
  };

  const temperatureVariationOptions = {
    height: 200,
    animationEnabled: true,
    theme: "light2",
    subtitles: [
      {
        text: "Gurugram vs Shimla",
      },
    ],
    axisX: {
      valueFormatString: "MMMM",
    },
    axisY: {
      suffix: " °C",
    },
    toolTip: {
      shared: true,
    },
    legend: {
      cursor: "pointer",
      horizontalAlign: "right",
      verticalAlign: "top",
    },
    data: [
      {
        type: "rangeArea",
        showInLegend: true,
        name: "Gurugram",
        markerSize: 0,
        xValueFormatString: "MMM YYYY",
        yValueFormatString: "#0.## °C",
        color: "#FF9800",
        dataPoints: [
          {
            x: new Date(2020, 0, 1),
            y: [2.389, 23.5],
          },
          {
            x: new Date(2020, 1, 1),
            y: [5.278, 28],
          },
          {
            x: new Date(2020, 2, 1),
            y: [10, 33.3],
          },
          {
            x: new Date(2020, 3, 1),
            y: [13.5, 41.222],
          },
          {
            x: new Date(2020, 4, 1),
            y: [19.5, 47.611],
          },
          {
            x: new Date(2020, 5, 1),
            y: [19.778, 44.222],
          },
          {
            x: new Date(2020, 6, 1),
            y: [20.778, 43.222],
          },
          {
            x: new Date(2020, 7, 1),
            y: [24, 37.611],
          },
          {
            x: new Date(2020, 8, 1),
            y: [21.778, 38],
          },
          {
            x: new Date(2020, 9, 1),
            y: [12.5, 37],
          },
          {
            x: new Date(2020, 10, 1),
            y: [6.278, 31.611],
          },
          {
            x: new Date(2020, 11, 1),
            y: [3.278, 29],
          },
        ],
      },
      {
        type: "rangeArea",
        showInLegend: true,
        name: "Shimla",
        markerSize: 0,
        yValueFormatString: "#0.## °C",
        color: "#BA68C8",
        dataPoints: [
          {
            x: new Date(2020, 0, 1),
            y: [-1.3, 22],
          },
          {
            x: new Date(2020, 1, 1),
            y: [-2, 26.4],
          },
          {
            x: new Date(2020, 2, 1),
            y: [0.6, 29.4],
          },
          {
            x: new Date(2020, 3, 1),
            y: [6.6, 37.9],
          },
          {
            x: new Date(2020, 4, 1),
            y: [8.278, 43.111],
          },
          {
            x: new Date(2020, 5, 1),
            y: [10.389, 40.4],
          },
          {
            x: new Date(2020, 6, 1),
            y: [13, 39.111],
          },
          {
            x: new Date(2020, 7, 1),
            y: [15.6, 39.778],
          },
          {
            x: new Date(2020, 8, 1),
            y: [14.6, 36.611],
          },
          {
            x: new Date(2020, 9, 1),
            y: [9.6, 35.3],
          },
          {
            x: new Date(2020, 10, 1),
            y: [2.778, 31.111],
          },
          {
            x: new Date(2020, 11, 1),
            y: [-1.111, 28.111],
          },
        ],
      },
    ],
  };

  return (
    <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-6 gap-6 sm:gap-0">
      <div className="bg-white p-6 rounded-lg shadow-md flex-1 h-72">
        <h1 className="text-2xl font-semibold font-monda mb-5 text-gray-800">
          Live Information
        </h1>
        <CanvasJSChart options={bounceRateOptions} />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md flex-1 h-72">
        <h1 className="text-2xl font-monda font-semibold mb-5 text-gray-800">
          Temperature Variation
        </h1>
        <CanvasJSChart options={temperatureVariationOptions} />
      </div>
    </div>
  );
};

export default Card3;
