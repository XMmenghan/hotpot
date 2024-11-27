import React from "react";

const TableCard = ({ table, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`p-4 border rounded-lg mb-2 cursor-pointer ${
        table.isOccupied ? "bg-red-100" : "bg-green-100"
      } hover:shadow-md`}
    >
      <h3 className="text-lg font-bold">{table.name}</h3>
      <p>Capacity: {table.capacity}</p>
      <p>Status: {table.isOccupied ? "Occupied" : "Available"}</p>
    </div>
  );
};

export default TableCard;
