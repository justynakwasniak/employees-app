// src/components/BackButton.tsx (nowa funkcjonalność)
import React from "react";
import { useNavigate } from "react-router-dom";

export const BackButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)} className="btn btn-secondary mb-3">
      Back
    </button>
  );
};
