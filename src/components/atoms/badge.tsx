import type React from "react";

interface BadgeProps {
  status: "active" | "inactive";
  children: React.ReactNode;
}

export const Badge = ({ status, children }: BadgeProps) => {
  const statusClasses = {
    active: "bg-green-100 text-green-800",
    inactive: "bg-red-100 text-red-800",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusClasses[status]}`}
    >
      {children}
    </span>
  );
};
