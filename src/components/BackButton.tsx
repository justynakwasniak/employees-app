import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const BackButton: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)} className="btn btn-secondary mb-3">
      {t("back")}
    </button>
  );
};
