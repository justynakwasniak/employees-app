import React from "react";
import { Link, useParams } from "react-router-dom";
import { Employee } from "../modals/Employee";
import { BackButton } from "../components/BackButton";
import { useTranslation } from "react-i18next";

interface DetailsPageProps {
  data: Employee[];
}

export const DetailsPage: React.FC<DetailsPageProps> = ({ data }) => {
  const { id } = useParams<{ id: string }>();
  const employee = data.find((emp) => emp.id === id);
  const { t } = useTranslation();

  if (!employee) {
    return <div>{t("employeeNotFound")}</div>;
  }

  return (
    <div>
      <BackButton />
      <h1 className="mb-4 text-center">{t("employeeDetails")}</h1>
      <ul
        className="list-group text-center mx-auto"
        style={{ maxWidth: "400px" }}
      >
        <li className="list-group-item">ID: {employee.id}</li>
        <li className="list-group-item">
          {t("firstName")}: {employee.firstname}
        </li>
        <li className="list-group-item">
          {t("lastName")}: {employee.lastname}
        </li>
        <li className="list-group-item">
          {t("dateOfBirth")}: {employee.birthdate}
        </li>
        <li className="list-group-item">
          {t("street")}: {employee.street}
        </li>
        <li className="list-group-item">
          {t("city")}: {employee.city}
        </li>
        <li className="list-group-item">
          {t("postalCode")}: {employee.postalCode}
        </li>
        <li className="list-group-item">
          {t("salary")}: {employee.salary}
        </li>
        <li className="list-group-item">
          {t("status")}: {employee.status}
        </li>
        <li className="list-group-item">
          {t("phoneNumber")}: {employee.phonenumber}
        </li>
      </ul>
      <Link to={`/edit/${employee.id}`} className="btn custom-btn mt-3">
        {t("edit")}
      </Link>
    </div>
  );
};
