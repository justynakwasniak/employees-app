import "./App.css";
import React, { useState } from "react";
import { Table } from "./components/Table";
import SearchBar from "./components/SearchBar";
import { Employee } from "./modals/Employee";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const mockData: Employee[] = [
    {
      id: "1",
      firstname: "john",
      lastname: "doe",
      salary: 5000,
      status: "na urlopie",
      phonenumber: 123456789,
    },
    {
      id: "2",
      firstname: "ella",
      lastname: "david",
      salary: 6000,
      status: "na urlopie",
      phonenumber: 987654321,
    },
    {
      id: "3",
      firstname: "ann",
      lastname: "davon",
      salary: 7000,
      status: "na urlopie",
      phonenumber: 198123456,
    },
  ];

  const filteredData = mockData.filter((employee) =>
    `${employee.firstname} ${employee.lastname} ${employee.id} ${employee.phonenumber}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App container mt-5">
      <h1 className="mb-4">Employees</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Table data={filteredData} />
    </div>
  );
}

export default App;
