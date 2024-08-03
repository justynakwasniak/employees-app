// src/pages/DetailsPage.tsx
import React from "react";
import { useParams } from "react-router-dom";
import { Employee } from "../modals/Employee";

interface DetailsPageProps {
  data: Employee[];
}

export function DetailsPage({ data }: DetailsPageProps) {
  const { id } = useParams<{ id: string }>();
  const employee = data.find((emp) => emp.id === id);

  if (!employee) {
    return <div>Employee not found</div>;
  }

  return (
    <div>
      <h3>Employee Details</h3>
      <p>
        <strong>ID:</strong> {employee.id}
      </p>
      <p>
        <strong>First Name:</strong> {employee.firstname}
      </p>
      <p>
        <strong>Last Name:</strong> {employee.lastname}
      </p>
      <p>
        <strong>Date of Birth:</strong> {employee.birthdate}
      </p>
      <p>
        <strong>Street:</strong> {employee.street}
      </p>
      <p>
        <strong>City:</strong> {employee.city}
      </p>
      <p>
        <strong>Postal Code:</strong> {employee.postalCode}
      </p>
      <p>
        <strong>Salary:</strong> ${employee.salary}
      </p>
      <p>
        <strong>Status:</strong> {employee.status}
      </p>
      <p>
        <strong>Phone Number:</strong> {employee.phonenumber}
      </p>
    </div>
  );
}
