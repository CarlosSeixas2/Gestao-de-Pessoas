import type React from "react";
import { Card } from "../atoms/card";

interface StatCardProps {
  title: string;
  value: number | string;
  icon?: React.ReactNode;
  indicator?: React.ReactNode;
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  indicator,
}) => {
  return (
    <Card>
      <div className="p-4">
        <div className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div className="text-sm font-medium">{title}</div>
          {icon || indicator}
        </div>
        <div className="text-2xl font-bold">{value}</div>
      </div>
    </Card>
  );
};
