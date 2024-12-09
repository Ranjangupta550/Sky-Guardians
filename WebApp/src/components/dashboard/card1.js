import React, { Component } from "react";
import CanvasJSReact from "@canvasjs/react-charts";
import "react-circular-progressbar/dist/styles.css";
import { GaugeComponent } from "react-gauge-component";
import "../../input.css";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class App extends Component {
  render() {
    const options = {
      height: 300,
      animationEnabled: true,
      exportEnabled: true,
      theme: "light2",
      title: {
        text: "Last 3 Days",
      },
      axisY: {
        prefix: "$",
        suffix: "K",
        title: "Sales in USD",
        includeZero: true,
      },
      legend: {
        cursor: "pointer",
        itemclick: function (e) {
          if (
            typeof e.dataSeries.visible === "undefined" ||
            e.dataSeries.visible
          ) {
            e.dataSeries.visible = false;
          } else {
            e.dataSeries.visible = true;
          }
          e.chart.render();
        },
      },
      toolTip: {
        shared: true,
      },
      data: [
        {
          type: "column",
          name: "Germany",
          showInLegend: true,
          color: "#118AB2",
          yValueFormatString: "$##,###K",
          dataPoints: [
            {
              label: "Q1",
              y: 50,
            },
            {
              label: "Q2",
              y: 100,
            },
            {
              label: "Q3",
              y: 120,
            },
            {
              label: "Q4",
              y: 140,
            },
          ],
        },
        {
          type: "column",
          name: "India",
          color: "#06D6A0",
          showInLegend: true,
          yValueFormatString: "$##,###K",
          dataPoints: [
            {
              label: "Q1",
              y: 75,
            },
            {
              label: "Q2",
              y: 115,
            },
            {
              label: "Q3",
              y: 150,
            },
            {
              label: "Q4",
              y: 160,
            },
          ],
        },
        {
          type: "column",
          name: "United States of America",
          color: "#EF476F",
          showInLegend: true,
          yValueFormatString: "$##,###K",
          dataPoints: [
            {
              label: "Q1",
              y: 140,
            },
            {
              label: "Q2",
              y: 150,
            },
            {
              label: "Q3",
              y: 170,
            },
            {
              label: "Q4",
              y: 180,
            },
          ],
        },
      ],
    };

    return (
      <div className="flex justify-center items-center w-full">
        <div className="w-full md:w-[1500px] bg-white shadow-lg rounded-lg p-6 flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-8">
          <div className="flex-1 flex flex-col items-center">
            <h1 className="text-4xl font-semibold mb-4">AQI</h1>
            <div className="w-[350px] h-64 -ml-9 custom-gauge">
              <GaugeComponent
                value={40}
                type="grafana"
                labels={{
                  tickLabels: {
                    type: "outer",
                    ticks: [
                      { value: 0 }, 
                      { value: 100 }
                    ],
                  },
                }}
                arc={{
                  colorArray: ["#5BE12C", "#EA4228"],
                  subArcs: [{ limit: 10 }, { limit: 30 }, {}, {}, {}],
                  padding: 0.01,
                  width: 0.2,
                }}
                pointer={{
                  elastic: true,
                  type: "blob",
                  color: "black",
                  length: 0.8,
                  width: 3,
                  animationDelay: 0,
                }}
              />
            </div>
          </div>

          <div className="flex-1 w-full lg:w-2/3">
            <CanvasJSChart options={options} />
          </div>

          <div className="flex-1 w-full lg:w-1/3 h-auto p-4 rounded-lg shadow-md">
            <h4 className="text-2xl font-semibold text-center mb-4">
              Gas Levels
            </h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center font-bold">
                <span>PM10:</span>
                <span className="font-normal">25 µg/m³</span>
              </div>
              <div className="flex justify-between items-center font-bold">
                <span>NO2:</span>
                <span className="font-normal">15 µg/m³</span>
              </div>
              <div className="flex justify-between items-center font-bold">
                <span>CO2:</span>
                <span className="font-normal">400 ppm</span>
              </div>
              <div className="flex justify-between items-center font-bold">
                <span>CO:</span>
                <span className="font-normal">0.4 ppm</span>
              </div>
              <div className="flex justify-between items-center font-bold">
                <span>NH3:</span>
                <span className="font-normal">5 µg/m³</span>
              </div>
              <div className="flex justify-between items-center font-bold">
                <span>O3:</span>
                <span className="font-normal">12 µg/m³</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
