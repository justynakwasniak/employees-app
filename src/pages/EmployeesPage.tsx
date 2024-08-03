import React from "react";
import { Employee } from "../modals/Employee";
import SearchBar from "../components/SearchBar";
import { Table } from "../components/Table";
import { Link } from "react-router-dom";

interface EmployeesPageProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  data: Employee[];
}

export function EmployeesPage({
  searchTerm,
  setSearchTerm,
  data,
}: EmployeesPageProps) {
  return (
    <>
      <h1 className="mb-4">Employees</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Link to="/add" className="btn btn-primary mb-4">
        Add Employee
      </Link>
      <Table data={data} />
    </>
  );
}
