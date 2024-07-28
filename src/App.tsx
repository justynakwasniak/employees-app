import "./App.css";
import React from "react";
import { Table } from "./components/Table";

function App() {
  const mockData = [
    {
      id: "1",
      firstname: "john",
      lastname: "doe",
      salary: 5000,
      status: "na urlopie",
    },
    {
      id: "2",
      firstname: "ella",
      lastname: "david",
      salary: 6000,
      status: "na urlopie",
    },
    {
      id: "3",
      firstname: "ann",
      lastname: "davon",
      salary: 7000,
      status: "na urlopie",
    },
  ];
  return (
    <div className="App container mt-5">
      <h1 className="mb-4">Employees</h1>
      <Table data={mockData} />
    </div>
  );
}

export default App;
