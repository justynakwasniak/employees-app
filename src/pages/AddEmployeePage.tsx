import React from "react";
import { AddEmployeeForm } from "../components/AddEmployeeForm";
import { Employee } from "../modals/Employee";

interface AddEmployeePageProps {
  onAdd: (employee: Employee) => void;
}

export const AddEmployeePage: React.FC<AddEmployeePageProps> = ({ onAdd }) => {
  return (
    <div>
      <h1 className="mb-4">Add New Employee</h1>
      <AddEmployeeForm onAdd={onAdd} />
    </div>
  );
};
