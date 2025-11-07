import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => navigate("/");

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="flex justify-between items-center bg-blue-600 p-4 text-white">
        <h1 className="text-xl font-bold">LifeLog</h1>
        <button
          onClick={handleLogout}
          className="bg-white text-blue-600 px-3 py-1 rounded"
        >
          Logout
        </button>
      </nav>

      <div className="p-4 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Welcome to Your Dashboard 👋
        </h2>
        <p className="text-gray-600">Logs and charts will appear here soon.</p>
      </div>
    </div>
  );
};

export default Dashboard;
