import { Select } from "../atoms/select";

interface FilterSelectProps {
  value: "all" | "active" | "inactive";
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const FilterSelect = ({ value, onChange }: FilterSelectProps) => {
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
