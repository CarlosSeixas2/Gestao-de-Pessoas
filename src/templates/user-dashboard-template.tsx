"use client";

import type React from "react";
import type { User } from "../interfaces/user";
import { LoadingSkeletonDashboard } from "../components/organisms/loading-skeleton-dashboard";
import { AddUserButton } from "../components/molecules/add-user-button";
import { StatsOverview } from "../components/organisms/stats-overview";
import { FilterSection } from "../components/organisms/filter-section";
import { UserTable } from "../components/organisms/user-table";
import { AddUserModal } from "../components/organisms/add-user-modal";
import { DeleteConfirmModal } from "../components/organisms/delete-confirm-modal";

interface UserDashboardTemplateProps {
  users: User[];
  isLoading: boolean;
  filter: "all" | "active" | "inactive";
  searchTerm: string;
  isModalOpen: boolean;
  deleteConfirm: {
    show: boolean;
    user: User | null;
  };
  newUser: {
    name: string;
    email: string;
    status: "active" | "inactive";
  };
  formErrors: {
    name: string;
    email: string;
  };
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFilterChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onAddUserClick: () => void;
  onModalClose: () => void;
  onInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  onSubmit: (e: React.FormEvent) => void;
  onEditUser: (user: User) => void;
  onDeleteClick: (user: User) => void;
  onDeleteConfirm: () => void;
  onDeleteCancel: () => void;
}

export const UserDashboardTemplate: React.FC<UserDashboardTemplateProps> = ({
  users,
  isLoading,
  filter,
  searchTerm,
  isModalOpen,
  deleteConfirm,
  newUser,
  formErrors,
  onSearchChange,
  onFilterChange,
  onAddUserClick,
  onModalClose,
  onInputChange,
  onSubmit,
  onEditUser,
  onDeleteClick,
  onDeleteConfirm,
  onDeleteCancel,
}) => {
  if (isLoading) {
    return <LoadingSkeletonDashboard />;
  }

  const filteredUsers = users.filter((user) => {
    const matchesFilter = filter === "all" || user.status === filter;
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const activeUsers = users.filter((user) => user.status === "active").length;
  const inactiveUsers = users.filter(
    (user) => user.status === "inactive"
  ).length;

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            Gestão de Usuários
          </h1>
          <p className="text-gray-500">
            Gerencie e monitore todos os usuários da plataforma
          </p>
        </div>
        <AddUserButton onClick={onAddUserClick} />
      </div>

      <StatsOverview
        totalUsers={users.length}
        activeUsers={activeUsers}
        inactiveUsers={inactiveUsers}
      />

      <FilterSection
        searchTerm={searchTerm}
        onSearchChange={onSearchChange}
        filter={filter}
        onFilterChange={onFilterChange}
      />

      <UserTable
        users={filteredUsers}
        onEdit={onEditUser}
        onDelete={onDeleteClick}
      />

      <AddUserModal
        isOpen={isModalOpen}
        onClose={onModalClose}
        formData={newUser}
        formErrors={formErrors}
        onChange={onInputChange}
        onSubmit={onSubmit}
      />

      <DeleteConfirmModal
        isOpen={deleteConfirm.show}
        user={deleteConfirm.user}
        onConfirm={onDeleteConfirm}
        onCancel={onDeleteCancel}
      />
    </div>
  );
};
