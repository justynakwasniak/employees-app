import React, { useState } from "react";
import { Employee } from "../modals/Employee";

interface AddEmployeeFormProps {
  onAdd: (employee: Employee) => void;
}
function calculate() {}

export const AddEmployeeForm: React.FC<AddEmployeeFormProps> = ({ onAdd }) => {
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
    <form className="add-employee-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="id">ID:</label>
        <input
          type="text"
          id="id"
          name="id"
          value={formData.id}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="firstname">First Name:</label>
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
        <label htmlFor="lastname">Last Name:</label>
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
        <label htmlFor="birthdate">Date of Birth (YYYY-MM-DD):</label>
        <input
          type="date"
          id="birthdate"
          name="birthdate"
          value={formData.birthdate}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="street">Street:</label>
        <input
          type="text"
          id="street"
          name="street"
          value={formData.street}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="postalCode">Postal Code:</label>
        <input
          type="text"
          id="postalCode"
          name="postalCode"
          value={formData.postalCode}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="salary">Salary:</label>
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
        <label htmlFor="status">Status:</label>
        <select
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="Zatrudniony">Zatrudniony</option>
          <option value="Na urlopie">Na urlopie</option>
          <option value="Zwolniony">Zwolniony</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="phonenumber">Phone Number:</label>
        <input
          type="text"
          id="phonenumber"
          name="phonenumber"
          value={formData.phonenumber}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add Employee
      </button>
    </form>
  );
};
