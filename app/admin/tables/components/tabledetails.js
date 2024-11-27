import React from "react";

const TableDetails = ({ table, setTables, tables }) => {
  const handleOpenTable = () => {
    // update table status
    const updatedTables = tables.map((t) =>
      t.id === table.id ? { ...t, isOccupied: true } : t
    );
    setTables(updatedTables);
    console.log(`Opening table: ${table.name}`);
    // QR code sacnning
    alert("QR code generated and printed!");
  };

  const handleCompleteOrder = () => {
    // update table status
    const updatedTables = tables.map((t) =>
      t.id === table.id ? { ...t, isOccupied: false } : t
    );
    setTables(updatedTables);
    console.log(`Completing order for: ${table.name}`);
    alert("Order completed. QR code invalidated!");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{table.name} Details</h2>
      <p>Capacity: {table.capacity}</p>
      <p>Status: {table.isOccupied ? "Occupied" : "Available"}</p>

      <div className="flex gap-4 mt-4">
        {!table.isOccupied && (
          <button
            onClick={handleOpenTable}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Open Table
          </button>
        )}
        {table.isOccupied && (
          <button
            onClick={handleCompleteOrder}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Complete Order
          </button>
        )}
      </div>
    </div>
  );
};

export default TableDetails;
