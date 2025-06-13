"use client";

import type React from "react";
import { Card, CardHeader, CardContent } from "../atoms/card";
import { SearchInput } from "../molecules/search-input";
import { FilterSelect } from "../molecules/filter-select";

interface FilterSectionProps {
  searchTerm: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  filter: "all" | "active" | "inactive";
  onFilterChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const FilterSection: React.FC<FilterSectionProps> = ({
  searchTerm,
  onSearchChange,
  filter,
  onFilterChange,
}) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
          </svg>
          <h2 className="text-lg font-medium">Filtros e Busca</h2>
        </div>
        <p className="text-sm text-gray-500 mt-1">
          Use os filtros abaixo para encontrar usuários específicos
        </p>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col sm:flex-row gap-4">
          <SearchInput
            value={searchTerm}
            onChange={onSearchChange}
            placeholder="Buscar por nome ou email..."
          />
          <FilterSelect value={filter} onChange={onFilterChange} />
        </div>
      </CardContent>
    </Card>
  );
};
