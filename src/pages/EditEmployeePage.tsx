import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Employee } from "../modals/Employee";
import { fetchEmployeeById, updateEmployee } from "../services/API";
import { BackButton } from "../components/BackButton";
import { useTranslation } from "react-i18next";

interface EditEmployeePageProps {
  data: Employee[];
  onUpdate: (updatedEmployee: Employee) => void;
}

export const EditEmployeePage: React.FC<EditEmployeePageProps> = ({
  data,
  onUpdate,
}) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<Employee | null>(null);
  const { t } = useTranslation();

  useEffect(() => {
    if (id) {
      fetchEmployeeById(id).then((employee) => setFormData(employee));
    }
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) =>
      prevData ? { ...prevData, [name]: value } : null
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData) {
      updateEmployee(formData).then((updatedEmployee) => {
        onUpdate(updatedEmployee);
        navigate("/");
      });
    }
  };

  if (!formData) return <div>{t("loading")}</div>;

  return (
    <div>
      <BackButton />
      <h1 className="mb-4 text-center">{t("editEmployee")}</h1>
      <form
        className="edit-employee-form mx-auto"
        onSubmit={handleSubmit}
        style={{ maxWidth: "400px" }}
      >
        <div className="form-group text-center">
          <label htmlFor="id">{t("id")}:</label>
          <input
            type="text"
            id="id"
            name="id"
            value={formData.id}
            onChange={handleChange}
            readOnly
            className="form-control"
          />
        </div>
        <div className="form-group text-center">
          <label htmlFor="firstname">{t("firstName")}:</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        <div className="form-group text-center">
          <label htmlFor="lastname">{t("lastName")}:</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        <div className="form-group text-center">
          <label htmlFor="birthdate">{t("dateOfBirth")}(YYYY-MM-DD):</label>
          <input
            type="date"
            id="birthdate"
            name="birthdate"
            value={formData.birthdate}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group text-center">
          <label htmlFor="street">{t("street")}:</label>
          <input
            type="text"
            id="street"
            name="street"
            value={formData.street}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group text-center">
          <label htmlFor="city">{t("city")}:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group text-center">
          <label htmlFor="postalCode">{t("postalCode")}:</label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group text-center">
          <label htmlFor="salary">{t("salary")}:</label>
          <input
            type="number"
            id="salary"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        <div className="form-group text-center">
          <label htmlFor="status">{t("status")}:</label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="form-control"
          >
            <option value="Zatrudniony">{t("employed")}</option>
            <option value="Na urlopie">{t("onLeave")}</option>
            <option value="Zwolniony">{t("dismissed")}</option>
          </select>
        </div>
        <div className="form-group text-center">
          <label htmlFor="phonenumber">{t("phoneNumber")}:</label>
          <input
            type="text"
            id="phonenumber"
            name="phonenumber"
            value={formData.phonenumber}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="text-center">
          <button type="submit" className="btn custom-btn mt-3">
            {t("updateEmployee")}
          </button>
        </div>
      </form>
    </div>
  );
};
