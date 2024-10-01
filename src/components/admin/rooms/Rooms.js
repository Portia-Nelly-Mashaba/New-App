import React from 'react'
import { useState } from 'react';
import AddForm from './AddRoom';
import { NavLink } from 'react-router-dom';
import Rooms from '../viewRooms/ViewRooms';
import SingleRoom from '../viewRooms/SingleRoom';

const Rooms = () => {
  const [activeTab, setActiveTab] = useState("room");
  

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800" role="tablist">
      <li className="me-2">
    <NavLink to="/admin/rooms" className="inline-block" role="tab" aria-controls="rooms" aria-selected={activeTab === "rooms"}>
        <button
            onClick={() => setActiveTab("rooms")}
            type="button"
            className={`p-4 ${activeTab === "rooms" ? "text-blue-600 rounded-ss-lg dark:text-blue-500" : "hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700"}`}
        >
            Hotel Rooms
        </button>
    </NavLink>
</li>
<li className="me-2">
    <NavLink to="/admin/add-room" className="inline-block" role="tab" aria-controls="add-room" aria-selected={activeTab === "add-room"}>
        <button
            onClick={() => setActiveTab("add-room")}
            type="button"
            className="p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300"
        >
            Add New Room
        </button>
    </NavLink>
</li>
<li className="me-2">
    <NavLink to="/admin/update-rooms" className="inline-block" role="tab" aria-controls="action" aria-selected={activeTab === "update-rooms"}>
        <button
            onClick={() => setActiveTab("action")}
            type="button"
            className="p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300"
        >
            Update Rooms
        </button>
    </NavLink>
</li>
      </ul>

      <div>
        {activeTab === "rooms" && (
          <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" role="tabpanel">
            <Rooms />
          </div>
        )}

        {activeTab === "add-room" && (
          <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" role="tabpanel">
            <AddForm/>
          </div>
        )}

        {activeTab === "update-rooms" && (
          <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" role="tabpanel">
            <SingleRoom />
          </div>
        )}
      </div>
    </div>
  );
}

export default Rooms
