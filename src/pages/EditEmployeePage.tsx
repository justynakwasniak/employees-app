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
      <h1 className="mb-4">{t("editEmployee")}</h1>
      <form className="edit-employee-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="id">ID:</label>
          <input
            type="text"
            id="id"
            name="id"
            value={formData.id}
            onChange={handleChange}
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstname">{t("firstName")}:</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">{t("lastName")}:</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="birthdate">{t("dateOfBirth")}(YYYY-MM-DD):</label>
          <input
            type="date"
            id="birthdate"
            name="birthdate"
            value={formData.birthdate}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="street">{t("street")}:</label>
          <input
            type="text"
            id="street"
            name="street"
            value={formData.street}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">{t("city")}:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="postalCode">{t("postalCode")}:</label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="salary">{t("salary")}:</label>
          <input
            type="number"
            id="salary"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="status">{t("status")}:</label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="Zatrudniony">{t("status")}</option>
            <option value="Na urlopie">{t("status")}</option>
            <option value="Zwolniony">{t("status")}</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="phonenumber">{t("phoneNumber")}:</label>
          <input
            type="text"
            id="phonenumber"
            name="phonenumber"
            value={formData.phonenumber}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {t("updateEmployee")}
        </button>
      </form>
    </div>
  );
};
