"use client";

import type React from "react";
import { useState } from "react";
import { useUsers } from "../hooks/use-users";
import type { User } from "../interfaces/user";
import { UserDashboardTemplate } from "../templates/user-dashboard-template";

export function UserDashboard() {
  const { users, isLoading, deleteUser, createUser } = useUsers();
  const [filter, setFilter] = useState<"all" | "active" | "inactive">("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState<{
    show: boolean;
    user: User | null;
  }>({
    show: false,
    user: null,
  });
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    status: "active" as "active" | "inactive",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    let valid = true;
    const errors = { name: "", email: "" };

    if (!newUser.name.trim()) {
      errors.name = "Nome é obrigatório";
      valid = false;
    }

    if (!newUser.email.trim()) {
      errors.email = "Email é obrigatório";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(newUser.email)) {
      errors.email = "Email inválido";
      valid = false;
    }

    setFormErrors(errors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      createUser.mutate(newUser);
      setNewUser({
        name: "",
        email: "",
        status: "active",
      });
      setFormErrors({ name: "", email: "" });
      setIsModalOpen(false);
    }
  };

  const handleDeleteClick = (user: User) => {
    setDeleteConfirm({ show: true, user });
  };

  const handleDeleteConfirm = () => {
    if (deleteConfirm.user) {
      deleteUser.mutate(deleteConfirm.user.id);
      setDeleteConfirm({ show: false, user: null });
    }
  };

  const handleDeleteCancel = () => {
    setDeleteConfirm({ show: false, user: null });
  };

  const handleEditUser = (user: User) => {
    console.log("editar", user);
  };

  return (
    <UserDashboardTemplate
      users={users}
      isLoading={isLoading}
      filter={filter}
      searchTerm={searchTerm}
      isModalOpen={isModalOpen}
      deleteConfirm={deleteConfirm}
      newUser={newUser}
      formErrors={formErrors}
      onSearchChange={(e) => setSearchTerm(e.target.value)}
      onFilterChange={(e) =>
        setFilter(e.target.value as "all" | "active" | "inactive")
      }
      onAddUserClick={() => setIsModalOpen(true)}
      onModalClose={() => setIsModalOpen(false)}
      onInputChange={handleInputChange}
      onSubmit={handleSubmit}
      onEditUser={handleEditUser}
      onDeleteClick={handleDeleteClick}
      onDeleteConfirm={handleDeleteConfirm}
      onDeleteCancel={handleDeleteCancel}
    />
  );
}
