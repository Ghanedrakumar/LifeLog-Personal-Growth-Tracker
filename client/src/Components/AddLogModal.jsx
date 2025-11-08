import React, { useState } from "react";
const AddLogModal = ({ isOpen, onClose, onAddLog }) => {
  const [log, setLog] = useState({
    title: "",
    description: "",
    category: "",
    hours: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!log.title || !log.category) return;
    onAddLog(log);
    setLog({ title: "", description: "", category: "", hours: "" });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white p-6 rounded-xl w-96 shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-center">Add New Log</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            className="w-full border p-2 mb-2 rounded"
            value={log.title}
            onChange={(e) => setLog({ ...log, title: e.target.value })}
          />
          <textarea
            placeholder="Description"
            className="w-full border p-2 mb-2 rounded"
            value={log.description}
            onChange={(e) => setLog({ ...log, description: e.target.value })}
          ></textarea>
          <select
            className="w-full border p-2 mb-2 rounded"
            value={log.category}
            onChange={(e) => setLog({ ...log, category: e.target.value })}
          >
            <option value="">Select Category</option>
            <option value="Learning">Learning</option>
            <option value="Health">Health</option>
            <option value="Habit">Habit</option>
            <option value="Work">Work</option>
            <option value="Other">Other</option>
          </select>
          <input
            type="number"
            placeholder="Hours Spent"
            className="w-full border p-2 mb-3 rounded"
            value={log.hours}
            onChange={(e) => setLog({ ...log, hours: e.target.value })}
          />
          <div className="flex justify-between">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 px-3 py-1 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-3 py-1 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddLogModal;
