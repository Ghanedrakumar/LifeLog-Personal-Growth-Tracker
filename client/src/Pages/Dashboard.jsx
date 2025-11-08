import React, { useState } from "react";
import AddLogModal from "../Components/AddLogModal.jsx";
import LogCard from "../Components/LogCard";

const Dashboard = () => {
  const [logs, setLogs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddLog = (newLog) => {
    setLogs([...logs, newLog]);
  };



  return (
    <>


      <div className="min-h-screen bg-gray-100">

        <nav className="flex justify-between items-center bg-blue-600 p-4 text-white">
          <h1 className="text-xl font-bold">LifeLog</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-blue-600 px-3 py-1 rounded"
          >
            + Add Log
          </button>
        </nav>

        <div className="p-6">
          {logs.length === 0 ? (
            <p className="text-center text-gray-500 mt-10">
              No logs yet. Click “+ Add Log” to begin.
            </p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {logs.map((log, i) => (
                <LogCard key={i} log={log} />
              ))}
            </div>
          )}
        </div>


        <AddLogModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddLog={handleAddLog}
        />
      </div>

    </>
  );
};
export default Dashboard;
