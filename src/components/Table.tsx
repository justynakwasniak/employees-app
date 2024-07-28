import React from "react";

// Zdefiniuj interfejs dla danych pracowników
interface Employee {
  id: string;
  firstname: string;
  lastname: string;
  salary: number;
  status: string;
}

// Zdefiniuj typ dla propsów komponentu Table
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
            <td>{employee.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
