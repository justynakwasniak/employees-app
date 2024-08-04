import React from "react";
import { AddEmployeeForm } from "../components/AddEmployeeForm";
import { Employee } from "../modals/Employee";
import { BackButton } from "../components/BackButton";

interface AddEmployeePageProps {
  onAdd: (employee: Employee) => void;
}

export const AddEmployeePage: React.FC<AddEmployeePageProps> = ({ onAdd }) => {
  return (
    <div>
      <BackButton />
      <h1 className="mb-4">Add New Employee</h1>
      <AddEmployeeForm onAdd={onAdd} />
    </div>
  );
};
