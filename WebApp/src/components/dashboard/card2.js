import React from "react";

const Card2 = () => {
  return (
    <div className="w-full bg-white shadow-lg rounded-lg sm:h-[312px] h-auto">
      <div className="p-4">
        <h2 className="text-xl font-monda font-semibold">Weather</h2>
      </div>

      <div className="flex flex-col items-center font-monda justify-center p-4">
        <div className="text-3xl font-bold mb-4">25°C</div> 
        <div className="text-lg text-gray-500 mb-4">Clear Sky</div> 
        <div className="flex flex-col sm:flex-row justify-between w-full text-sm text-gray-600">
          <div className="mb-2 sm:mb-0">Humidity: 60%</div>
          <div>Wind: 15 km/h</div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
