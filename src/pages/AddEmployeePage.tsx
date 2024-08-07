import React from "react";
import { AddEmployeeForm } from "../components/AddEmployeeForm";
import { Employee } from "../modals/Employee";
import { BackButton } from "../components/BackButton";
import { useTranslation } from "react-i18next";

interface AddEmployeePageProps {
  onAdd: (employee: Employee) => void;
}

export const AddEmployeePage: React.FC<AddEmployeePageProps> = ({ onAdd }) => {
  const { t } = useTranslation();

  return (
    <div>
      <BackButton />
      <h1 className="mb-4 text-center ">{t("addNewEmployee")}</h1>
      <AddEmployeeForm onAdd={onAdd} />
    </div>
  );
};
