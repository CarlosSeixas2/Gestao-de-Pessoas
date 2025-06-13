import type React from "react";
import { StatCard } from "../molecules/stat-card";

interface StatsOverviewProps {
  totalUsers: number;
  activeUsers: number;
  inactiveUsers: number;
}

export const StatsOverview: React.FC<StatsOverviewProps> = ({
  totalUsers,
  activeUsers,
  inactiveUsers,
}) => {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <StatCard
        title="Total de Usuários"
        value={totalUsers}
        icon={
          <div className="h-4 w-4 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
        }
      />
      <StatCard
        title="Usuários Ativos"
        value={activeUsers}
        indicator={<div className="h-2 w-2 bg-green-500 rounded-full"></div>}
      />
      <StatCard
        title="Usuários Inativos"
        value={inactiveUsers}
        indicator={<div className="h-2 w-2 bg-red-500 rounded-full"></div>}
      />
    </div>
  );
};
