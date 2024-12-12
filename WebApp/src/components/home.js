import React from "react";
import Navbar from "./navbar";
import Video from "../assets/pollution_stack.mp4";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  const data = [
    {
      id: 1,
      title: "Breathe Easy with Real-Time Insights",
      point1: "Live AQI Updates",
      point2: "Hyper-Local Precision",
      point3: "Interactive Visuals",
    },
    {
      id: 2,
      title: "Smarter Sensing for Better Living",
      point1: "Technology",
      point2: "Seamless Integration",
      point3: "Reliable Accuracy",
    },
    {
      id: 3,
      title: "Your Heaalth, Our Priority",
      point1: "Health Alerts",
      point2: "Personalized Tips",
      point3: "Empowering Decisions",
    },
  ];

  return (
    <div>
      <div className="relative h-screen w-full pb-56">
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

      <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-b from-purple-300 via-purple-200 to-red-100">
        <div className="text-center">
          <h1 className="text-7xl font-extrabold">VAAYU</h1>
          <div className="text-5xl font-monda font-bold mt-10">
            Clean Air, We All Share
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm gap-20 mt-16 text-center">
            {data.map((data, id) => (
              <div
                key={id} 
                className="flex flex-col h-52 w-72 rounded-xl border-2 border-black p-4 card bg-gradient-to-b from-purple-300 via-purple-100 to-red-100"
              >
                <div className="flex items-center">
                  <div className="mr-2 text-black">
                    <FaArrowRight size={20} />
                  </div>
                  <div className="text-black font-monda font-medium">
                    {data.title}
                  </div>
                </div>
                <ul className="list-disc ml-8 mt-3 text-black text-start">
                  <li>{data.point1}</li>
                  <li>{data.point2}</li>
                  <li>{data.point3}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
