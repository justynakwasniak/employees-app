import React from "react";

interface StatusBadgeProps {
  status?: string; // Status może być opcjonalny
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status = "indefinite" }) => {
  const getBadgeClass = () => {
    switch (status.toLowerCase()) {
      case "employed":
        return "badge bg-success";
      case "dismissed":
        return "badge bg-danger";
      case "on leave":
        return "badge bg-warning";
      default:
        return "badge bg-secondary";
    }
  };

  return <span className={getBadgeClass()}>{status}</span>;
};

export default StatusBadge;
