import React from "react";
import { Component } from "react";
import CanvasJSReact from "@canvasjs/react-charts";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class App extends Component {
  render() {
    const options = {
      height: 200,
      data: [
        {
          type: "column",
          dataPoints: [
            {
              label: "January",
              y: 10,
            },
            {
              label: "February",
              y: 15,
            },
            {
              label: "March",
              y: 25,
            },
            {
              label: "April",
              y: 30,
			        color: "#FFC300"
            },
            {
              label: "May",
              y: 30,
            },
            {
              label: "June",
              y: 30,
            },
            {
              label: "July",
              y: 30,
            },
            {
              label: "August",
              y: 30,
            },
            {
              label: "September",
              y: 30,
            },
            {
              label: "October",
              y: 30,
            },
            {
              label: "November",
              y: 30,
            },
            {
              label: "December",
              y: 28,
            },
          ],
        },
      ],
    };
    return (
      <div className="bg-white p-6 rounded-lg shadow-md mx-auto">
        <h1 className="text-2xl font-semibold mb-4">Weekly Information</h1>
        <CanvasJSChart options={options} />
      </div>
    );
  }
}
export default App;
