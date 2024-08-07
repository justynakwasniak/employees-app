import React, { useState } from "react";
import { Employee } from "../modals/Employee";
import { useTranslation } from "react-i18next";

interface AddEmployeeFormProps {
  onAdd: (employee: Employee) => void;
}

export const AddEmployeeForm: React.FC<AddEmployeeFormProps> = ({ onAdd }) => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState<Employee>({
    id: "",
    firstname: "",
    lastname: "",
    birthdate: "",
    street: "",
    city: "",
    postalCode: "",
    salary: 0,
    status: "Zatrudniony",
    phonenumber: 0,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      formData.id &&
      formData.firstname &&
      formData.lastname &&
      formData.salary
    ) {
      onAdd(formData);
      setFormData({
        id: "",
        firstname: "",
        lastname: "",
        birthdate: "",
        street: "",
        city: "",
        postalCode: "",
        salary: 0,
        status: "Zatrudniony",
        phonenumber: 0,
      });
    }
  };

  return (
    <form className="add-employee-form text-center" onSubmit={handleSubmit}>
      <div className="form-group mb-3">
        <label htmlFor="id">{t("id")}:</label>
        <input
          type="text"
          id="id"
          name="id"
          value={formData.id}
          onChange={handleChange}
          required
          className="form-control w-50 mx-auto" // Wyśrodkowanie i szerokość 50%
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="firstname">{t("firstName")}:</label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
          required
          className="form-control w-50 mx-auto" // Wyśrodkowanie i szerokość 50%
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="lastname">{t("lastName")}:</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
          required
          className="form-control w-50 mx-auto" // Wyśrodkowanie i szerokość 50%
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="birthdate">{t("birthdate")}:</label>
        <input
          type="date"
          id="birthdate"
          name="birthdate"
          value={formData.birthdate}
          onChange={handleChange}
          className="form-control w-50 mx-auto" // Wyśrodkowanie i szerokość 50%
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="street">{t("street")}:</label>
        <input
          type="text"
          id="street"
          name="street"
          value={formData.street}
          onChange={handleChange}
          className="form-control w-50 mx-auto" // Wyśrodkowanie i szerokość 50%
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="city">{t("city")}:</label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="form-control w-50 mx-auto" // Wyśrodkowanie i szerokość 50%
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="postalCode">{t("postalCode")}:</label>
        <input
          type="text"
          id="postalCode"
          name="postalCode"
          value={formData.postalCode}
          onChange={handleChange}
          className="form-control w-50 mx-auto" // Wyśrodkowanie i szerokość 50%
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="salary">{t("salary")}:</label>
        <input
          type="number"
          id="salary"
          name="salary"
          value={formData.salary}
          onChange={handleChange}
          required
          className="form-control w-50 mx-auto" // Wyśrodkowanie i szerokość 50%
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="status">{t("status")}:</label>
        <select
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="form-select w-50 mx-auto" // Wyśrodkowanie i szerokość 50%
        >
          <option value="Zatrudniony">{t("employed")}</option>
          <option value="Na urlopie">{t("onLeave")}</option>
          <option value="Zwolniony">{t("dismissed")}</option>
        </select>
      </div>
      <div className="form-group mb-3">
        <label htmlFor="phonenumber">{t("phoneNumber")}:</label>
        <input
          type="text"
          id="phonenumber"
          name="phonenumber"
          value={formData.phonenumber}
          onChange={handleChange}
          className="form-control w-50 mx-auto" // Wyśrodkowanie i szerokość 50%
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        style={{
          backgroundColor: "rgb(2, 154, 136)",
          borderColor: "rgb(2, 154, 136)",
          color: "#fff",
        }}
      >
        {t("addEmployee")}
      </button>
    </form>
  );
};
