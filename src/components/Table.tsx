import React, { useState } from "react";
import { Employee } from "../modals/Employee";

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

  const sortedData = [...data].sort((a, b) => {
    if (a[sortKey] < b[sortKey]) return sortOrder === "asc" ? -1 : 1;
    if (a[sortKey] > b[sortKey]) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

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
    <div className="table-responsive">
      <table className="table table-striped table-bordered table-dark">
        <thead>
          <tr>
            <th
              onClick={() => handleSort("id")}
              className="sortable-header text-center"
            >
              ID {sortKey === "id" && (sortDirection === "asc" ? "↑" : "↓")}
            </th>
            <th
              onClick={() => handleSort("firstname")}
              className="sortable-header text-center"
            >
              {t("firstName")}{" "}
              {sortKey === "firstname" && (sortDirection === "asc" ? "↑" : "↓")}
            </th>
            <th
              onClick={() => handleSort("lastname")}
              className="sortable-header text-center"
            >
              {t("lastName")}{" "}
              {sortKey === "lastname" && (sortDirection === "asc" ? "↑" : "↓")}
            </th>
            <th
              onClick={() => handleSort("salary")}
              className="sortable-header text-center"
            >
              {t("salary")}{" "}
              {sortKey === "salary" && (sortDirection === "asc" ? "↑" : "↓")}
            </th>
            <th
              onClick={() => handleSort("status")}
              className="sortable-header text-center"
            >
              {t("status")}{" "}
              {sortKey === "status" && (sortDirection === "asc" ? "↑" : "↓")}
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
