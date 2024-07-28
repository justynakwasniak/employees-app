import React from "react";
import { Employee } from "../modals/Employee";

interface TableProps {
  data: Employee[];
}

export const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <table className="table table-striped table-bordered table-dark">
      <thead className="thead-dark">
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Salary</th>
          <th>Phone Number</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map((employee) => (
          <tr key={employee.id}>
            <td>{employee.id}</td>
            <td>{employee.firstname}</td>
            <td>{employee.lastname}</td>
            <td>{employee.salary}</td>

            <td>{employee.phonenumber}</td>
            <td>{employee.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
