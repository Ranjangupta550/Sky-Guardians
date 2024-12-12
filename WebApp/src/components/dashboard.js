import React from 'react';
import Navbar from './navbar';
import { Link } from 'react-router-dom';
import { MdArrowOutward } from 'react-icons/md';
import Dash1 from '../assets/dash1.png';
import Dash from '../assets/dash.png';

const Dashboard = () => {
  const data = [
    {
      id: 1,
      title: 'Authorities Dashboard',
      description: 'Monitor public infrastructure, environmental metrics, and public safety with real-time data visualization.',
      link: '/dashboard1',
      image: Dash1,
    },
    {
      id: 2,
      title: 'Industries Dashboard',
      description: 'Track production, supply chain efficiency, and energy utilization metrics for operational optimization.',
      link: '/industries-dashboard',
      image: Dash,
    },
    {
      id: 3,
      title: 'Health Sector Dashboard',
      description: 'Enhance patient care and monitor public health trends with actionable insights.',
      link: '/health-sector-dashboard',
      image: Dash,
    },
    {
      id: 4,
      title: 'Education Sector Dashboard',
      description: 'Evaluate academic performance, attendance, and administrative efficiency for educational institutions.',
      link: '/education-sector-dashboard',
      image: Dash,
    },
    {
      id: 5,
      title: 'Corporate and Financial Dashboard',
      description: 'Track sales performance, expenses, and employee productivity to inform strategic decisions.',
      link: '/corporate-dashboard',
      image: Dash,
    },
  ];

  return (
    <div>
      <nav className="bg-black shadow-none transition duration-300 top-0 left-0 w-full z-50">
        <Navbar />
      </nav>

      <div className="bg-gray-100 min-h-screen">
        <h1 className="text-4xl font-bold font-monda px-10 py-5 p-6">Dashboard Overview</h1>
        <div className="space-y-10">
          {data.map((dataItem, id) => (
            <div
              key={id}
              className={`flex flex-col lg:flex-row items-center justify-center lg:justify-between space-y-4 px-6 ${
                id % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'
              }`}
            >
              <div className="lg:w-1/2 w-full mb-6 lg:mb-4">
                <img
                  src={dataItem.image}
                  alt={dataItem.title}
                  className="rounded-lg shadow-lg w-full object-cover"
                />
              </div>

              <div className="lg:w-1/2 w-full font-monda text-gray-800 lg:ml-8 lg:mr-8">
                <h2 className="text-2xl font-monda font-semibold">{dataItem.title}</h2>
                <p className="text-gray-600 font-monda">{dataItem.description}</p>
                {dataItem.link && (
                  <Link
                    to={dataItem.link}
                    className="flex flex-row text-blue-500 font-monda hover:text-blue-700 font-bold"
                  >
                    View {dataItem.title} <MdArrowOutward className="mt-1" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;