import React from "react";
import Card1 from "./dashboard/card1";
import Card2 from "./dashboard/card2";
import Card3 from "./dashboard/card3";
import Card4 from "./dashboard/card4";
import Card5 from "./dashboard/card5";
import Card6 from "./dashboard/card6";

const Dashboard = () => {
  return (
    <div className="bg-blue-50 min-h-screen p-6">
      <h1 className="text-3xl mb-6 font-bold">DASHBOARD</h1>
    
      <div className="grid grid-cols-4 gap-6">
        <div className="col-span-3">
          <Card1 />
        </div>
        <div className="col-span-1">
          <Card2 />
        </div>
        <div className="col-span-3">
          <Card3 />
        </div>
        <div className="col-span-1">
          <Card4 />
        </div>
        <div className="col-span-3">
          <Card5 />
        </div>
        <div className="col-span-1">
          <Card6 />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
