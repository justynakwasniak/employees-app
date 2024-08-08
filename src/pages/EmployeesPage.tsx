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
      <h1 className="mb-4 text-center">{t("employees")}</h1>
      <div className="d-flex justify-content-center mb-3">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder={t("searchPlaceholder")}
          className="form-control mb-3 w-50"
        />
      </div>
      <div className="mb-4 text-center">
        <Link to="/add" className="btn custom-btn mt-3">
          {t("add")}
        </Link>
      </div>

      <table className="table table-striped">
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

      <ConfirmDeleteModal
        show={showModal}
        onHide={() => setShowModal(false)}
        onConfirm={confirmDelete}
      />
    </div>
  );
};
