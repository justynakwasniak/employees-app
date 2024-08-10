import React, { useState } from "react";
import { Employee } from "../modals/Employee";
import { t } from "i18next";
import { Link } from "react-router-dom";

interface TableProps {
  data: Employee[];
}

type SortKey = keyof Employee;
type SortOrder = "asc" | "desc";

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

  // Define the handleDelete function to accept an id
  function handleDelete(id: string): void {
    // Your delete logic here
    console.log(`Deleting employee with id: ${id}`);
  }

  return (
    <div className="table-responsive">
      <table className="table table-striped table-bordered table-dark">
        <thead>
          <tr>
            <th
              onClick={() => handleSort("id")}
              className="sortable-header text-center"
            >
              ID {sortKey === "id" && (sortOrder === "asc" ? "↑" : "↓")}
            </th>
            <th
              onClick={() => handleSort("firstname")}
              className="sortable-header text-center"
            >
              {t("firstName")}{" "}
              {sortKey === "firstname" && (sortOrder === "asc" ? "↑" : "↓")}
            </th>
            <th
              onClick={() => handleSort("lastname")}
              className="sortable-header text-center"
            >
              {t("lastName")}{" "}
              {sortKey === "lastname" && (sortOrder === "asc" ? "↑" : "↓")}
            </th>
            <th
              onClick={() => handleSort("salary")}
              className="sortable-header text-center"
            >
              {t("salary")}{" "}
              {sortKey === "salary" && (sortOrder === "asc" ? "↑" : "↓")}
            </th>
            <th
              onClick={() => handleSort("status")}
              className="sortable-header text-center"
            >
              {t("status")}{" "}
              {sortKey === "status" && (sortOrder === "asc" ? "↑" : "↓")}
            </th>
            <th className="text-center">{t("actions")}</th>
          </tr>
        </thead>
        <tbody>
          {data.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td className="text-center">{employee.firstname}</td>
              <td className="text-center">{employee.lastname}</td>
              <td className="text-center">{employee.salary}</td>
              <td className="text-center">{employee.status}</td>
              <td className="text-center">
                <Link
                  to={`/details/${employee.id}`}
                  className="btn btn-secondary-custom btn-sm d-inline-block mb-1 mb-sm-0"
                >
                  {t("details")}
                </Link>
                <Link
                  to={`/edit/${employee.id}`}
                  className="btn btn-secondary-custom btn-sm d-inline-block mb-1 mb-sm-0 ms-2"
                >
                  {t("edit")}
                </Link>
                <button
                  onClick={() => handleDelete(employee.id)}
                  className="btn btn-secondary-custom btn-sm d-inline-block mb-1 mb-sm-0 ms-2"
                >
                  {t("delete")}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
