import React from "react";
import { Employee } from "../modals/Employee";
import SearchBar from "../components/SearchBar";
import { Table } from "../components/Table";
import { Link } from "react-router-dom";

interface EmployeesPageProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  data: Employee[];
  onSort: (key: keyof Employee) => void;
  sortKey: keyof Employee;
  sortDirection: "asc" | "desc";
}

export const EmployeesPage: React.FC<EmployeesPageProps> = ({
  searchTerm,
  setSearchTerm,
  data,
  onSort,
  sortKey,
  sortDirection,
}) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = (key: keyof Employee) => {
    onSort(key);
  };

  return (
    <div>
      <h1 className="mb-4">Employees</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search by name, id or phone number"
        className="form-control mb-3"
      />
      <Link to="/add" className="btn btn-primary mb-3">
        Add Employee
      </Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th onClick={() => handleSort("id")} className="sortable-header">
              ID {sortKey === "id" && (sortDirection === "asc" ? "↑" : "↓")}
            </th>
            <th
              onClick={() => handleSort("firstname")}
              className="sortable-header"
            >
              First Name{" "}
              {sortKey === "firstname" && (sortDirection === "asc" ? "↑" : "↓")}
            </th>
            <th
              onClick={() => handleSort("lastname")}
              className="sortable-header"
            >
              Last Name{" "}
              {sortKey === "lastname" && (sortDirection === "asc" ? "↑" : "↓")}
            </th>
            <th
              onClick={() => handleSort("salary")}
              className="sortable-header"
            >
              Salary{" "}
              {sortKey === "salary" && (sortDirection === "asc" ? "↑" : "↓")}
            </th>

            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstname}</td>
              <td>{employee.lastname}</td>

              <td>{employee.phonenumber}</td>
              <td>
                <Link to={`/details/${employee.id}`} className="btn btn-info">
                  Details
                </Link>
                <Link
                  to={`/edit/${employee.id}`}
                  className="btn btn-warning ms-2"
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
