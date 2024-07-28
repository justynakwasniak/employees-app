import React, { useState } from "react";
import { Employee } from "../modals/Employee";

interface TableProps {
  data: Employee[];
}

type SortKey = keyof Employee; //określa, według którego klucza obiektu Employee dane mają być sortowane.
type SortOrder = "asc" | "desc"; //określa, czy sortowanie jest rosnące czy malejące
//asc: Ascending – rosnąco, czyli od najmniejszej wartości do największej (np. od A do Z, od 1 do 10).
//desc: Descending – malejąco, czyli od największej wartości do najmniejszej (np. od Z do A, od 10 do 1).
export const Table: React.FC<TableProps> = ({ data }) => {
  const [sortKey, setSortKey] = useState<SortKey>("firstname");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  const sortedData = [...data].sort((a, b) => {
    if (a[sortKey] < b[sortKey]) return sortOrder === "asc" ? -1 : 1;
    if (a[sortKey] > b[sortKey]) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });
  //renderowanie ikony sortowania obok nagłówka kolumny w tabeli
  const renderSortIcon = (key: SortKey) => {
    if (sortKey === key) {
      return sortOrder === "asc" ? (
        <i className="bi bi-arrow-up"></i>
      ) : (
        <i className="bi bi-arrow-down"></i>
      );
    }
    return null;
  };

  return (
    <table className="table table-striped table-bordered table-dark">
      <thead className="thead-dark">
        <tr>
          <th onClick={() => handleSort("id")}>ID {renderSortIcon("id")}</th>
          <th onClick={() => handleSort("firstname")}>
            First Name {renderSortIcon("firstname")}
          </th>
          <th onClick={() => handleSort("lastname")}>
            Last Name {renderSortIcon("lastname")}
          </th>
          <th onClick={() => handleSort("salary")}>
            Salary {renderSortIcon("salary")}
          </th>
          <th onClick={() => handleSort("phonenumber")}>
            Phone Number {renderSortIcon("phonenumber")}
          </th>
          <th onClick={() => handleSort("status")}>
            Status {renderSortIcon("status")}
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map((employee) => (
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
