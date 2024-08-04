// src/pages/DetailsPage.tsx
import React from "react";
import { Link, useParams } from "react-router-dom";
import { Employee } from "../modals/Employee";
import { BackButton } from "../components/BackButton";

interface DetailsPageProps {
  data: Employee[];
}

export const DetailsPage: React.FC<DetailsPageProps> = ({ data }) => {
  const { id } = useParams<{ id: string }>();
  const employee = data.find((emp) => emp.id === id);

  if (!employee) {
    return <div>Employee not found</div>;
  }

  return (
    <div>
       <BackButton /> 
      <h1 className="mb-4">Employee Details</h1>
      <ul className="list-group">
        <li className="list-group-item">ID: {employee.id}</li>
        <li className="list-group-item">First Name: {employee.firstname}</li>
        <li className="list-group-item">Last Name: {employee.lastname}</li>
        <li className="list-group-item">Date of Birth: {employee.birthdate}</li>
        <li className="list-group-item">Street: {employee.street}</li>
        <li className="list-group-item">City: {employee.city}</li>
        <li className="list-group-item">Postal Code: {employee.postalCode}</li>
        <li className="list-group-item">Salary: {employee.salary}</li>
        <li className="list-group-item">Status: {employee.status}</li>
        <li className="list-group-item">
          Phone Number: {employee.phonenumber}
        </li>
      </ul>
      <Link to={`/edit/${employee.id}`} className="btn btn-warning mt-3">
        Edit
      </Link>
    </div>
  );
};
