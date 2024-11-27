"use client";

import React, { useState } from "react";
import TableCard from "@/components/Table/tablecards";
import TableDetails from "./components/tabledetails";

const TablesPage = () => {
  // mock data
  const [tables, setTables] = useState([
    { id: 1, name: "Table 1", capacity: 4, isOccupied: false },
    { id: 2, name: "Table 2", capacity: 6, isOccupied: true },
    { id: 3, name: "Table 3", capacity: 8, isOccupied: false },
  ]);

  const [selectedTable, setSelectedTable] = useState(null);

  return (
    <div className="flex h-screen">
      {/* table list */}
      <div className="w-1/3 border-r border-gray-200 p-4">
        <h2 className="text-xl font-bold mb-4">Table Management</h2>
        {tables.map((table) => (
          <TableCard
            key={table.id}
            table={table}
            onClick={() => setSelectedTable(table)}
          />
        ))}
      </div>

      {/* details */}
      <div className="w-2/3 p-4">
        {selectedTable ? (
          <TableDetails
            table={selectedTable}
            setTables={setTables}
            tables={tables}
          />
        ) : (
          <p className="text-gray-500">Select a table to view details</p>
        )}
      </div>
    </div>
  );
};

export default TablesPage;
