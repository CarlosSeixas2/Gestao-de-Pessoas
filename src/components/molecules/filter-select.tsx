"use client";

import type React from "react";
import { Select } from "../atoms/select";

interface FilterSelectProps {
  value: "all" | "active" | "inactive";
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const FilterSelect: React.FC<FilterSelectProps> = ({
  value,
  onChange,
}) => {
  const options = [
    { value: "all", label: "Todos os usuários" },
    { value: "active", label: "Apenas ativos" },
    { value: "inactive", label: "Apenas inativos" },
  ];

  return (
    <Select
      value={value}
      onChange={onChange}
      options={options}
      className="w-full sm:w-48"
    />
  );
};
