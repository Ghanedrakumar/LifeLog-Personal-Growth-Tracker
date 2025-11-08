import React from "react";

const LogCard = ({ log }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 border">
      <h3 className="text-lg font-semibold">{log.title}</h3>
      <p className="text-sm text-gray-600 mb-1">{log.description}</p>
      <p className="text-sm text-gray-500">
        Category: <span className="font-medium">{log.category}</span>
      </p>
      <p className="text-sm text-gray-500">
        Hours: <span className="font-medium">{log.hours}</span>
      </p>
    </div>
  );
};

export default LogCard;
