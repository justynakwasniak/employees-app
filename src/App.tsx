import "./App.css";
import React from "react";

function App() {
  const mockData = [
    {
      id: "1",
      firstname: "john",
      lastname: "doe",
      sallary: 5000,
      status: "na urlopie",
    },
    {
      id: "2",
      firstname: "ella",
      lastname: "david",
      sallary: 6000,
      status: "na urlopie",
    },
    {
      id: "3",
      firstname: "ann",
      lastname: "davon",
      sallary: 7000,
      status: "na urlopie",
    },
  ];
  return (
    <div className="App container mt-5">
      <h1 className="mb-4">Employees</h1>
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Salary</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {mockData.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstname}</td>
              <td>{employee.lastname}</td>
              <td>{employee.sallary}</td>
              <td>{employee.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
