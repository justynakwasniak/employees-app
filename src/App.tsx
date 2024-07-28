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
      lastname: "adams",
      salary: 6000,
      status: "na urlopie",
      phonenumber: 987654321,
    },
    {
      id: "3",
      firstname: "ann",
      lastname: "owen",
      salary: 7000,
      status: "na urlopie",
      phonenumber: 198123456,
    },
    {
      id: "4",
      firstname: "lily",
      lastname: "colins",
      salary: 20000,
      status: "na urlopie",
      phonenumber: 6728373,
    },
    {
      id: "5",
      firstname: "nick",
      lastname: "werty",
      salary: 1000000,
      status: "na urlopie",
      phonenumber: 63828373,
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
