import React, { useState } from "react";
import { Employee } from "../modals/Employee";
import { Link } from "react-router-dom";
import ConfirmDeleteModal from "../components/ConfirmDeleteModal";
import { useTranslation } from "react-i18next";

interface EmployeesPageProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  data: Employee[];
  onSort: (key: keyof Employee) => void;
  sortKey: keyof Employee;
  sortDirection: "asc" | "desc";
  onDelete: (id: string) => void;
}

export const EmployeesPage: React.FC<EmployeesPageProps> = ({
  searchTerm,
  setSearchTerm,
  data,
  onSort,
  sortKey,
  sortDirection,
  onDelete,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<string | null>(null);
  const { t } = useTranslation();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = (key: keyof Employee) => {
    onSort(key);
  };

  const handleDelete = (id: string) => {
    setSelectedEmployee(id);
    setShowModal(true);
  };

  const confirmDelete = () => {
    if (selectedEmployee) {
      onDelete(selectedEmployee);
      setShowModal(false);
      setSelectedEmployee(null);
    }
  };

  return (
    <div>
      <h1 className="mb-4">{t("employees")}</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder={t("searchPlaceholder")}
        className="form-control mb-3"
      />
      <Link to="/add" className="btn btn-primary mb-3">
        {t("add")}
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
              {t("firstName")}{" "}
              {sortKey === "firstname" && (sortDirection === "asc" ? "↑" : "↓")}
            </th>
            <th
              onClick={() => handleSort("lastname")}
              className="sortable-header"
            >
              {t("lastName")}{" "}
              {sortKey === "lastname" && (sortDirection === "asc" ? "↑" : "↓")}
            </th>
            <th
              onClick={() => handleSort("salary")}
              className="sortable-header"
            >
              {t("salary")}{" "}
              {sortKey === "salary" && (sortDirection === "asc" ? "↑" : "↓")}
            </th>
            <th>{t("actions")}</th>
          </tr>
        </thead>
        <tbody>
          {data.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstname}</td>
              <td>{employee.lastname}</td>
              <td>{employee.salary}</td>
              <td>
                <Link
                  to={`/details/${employee.id}`}
                  className="btn btn-secondary-custom"
                >
                  {t("details")}
                </Link>
                <Link
                  to={`/edit/${employee.id}`}
                  className="btn btn-secondary-custom ms-2"
                >
                  {t("edit")}
                </Link>
                <button
                  onClick={() => handleDelete(employee.id)}
                  className="btn btn-secondary-custom ms-2"
                >
                  {t("delete")}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ConfirmDeleteModal
        show={showModal}
        onHide={() => setShowModal(false)}
        onConfirm={confirmDelete}
      />
    </div>
  );
};
