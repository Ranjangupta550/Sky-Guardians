import React from "react";
import Navbar from "./navbar";
import Video from "../assets/pollution_stack.mp4";

const Home = () => {
  return (
    <div>
      <div className="relative h-screen w-full">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src={Video}
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
          controlsList="nodownload noplaybackrate nofullscreen"
        ></video>

        <div className="relative z-10">
          <nav className="absolute top-0 left-0 w-full bg-transparent z-50 shadow-none transition duration-300 hover:bg-black/10">
            <Navbar />
          </nav>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center p-6 bg-gray-100">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Weather</h2>
          <div className="text-5xl font-bold mb-2">25°C</div>
          <div className="text-lg text-gray-600 mb-4">Clear Sky</div>
          <div className="flex flex-col sm:flex-row justify-between text-sm text-gray-500">
            <div className="mb-2 sm:mb-0">Humidity: 60%</div>
            <div>Wind: 15 km/h</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
