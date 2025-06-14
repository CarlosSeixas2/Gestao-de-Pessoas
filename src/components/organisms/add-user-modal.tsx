"use client";

import type React from "react";
import { Button } from "../atoms/button";
import { Input } from "../atoms/input";
import { Select } from "../atoms/select";

interface AddUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  formData: {
    name: string;
    email: string;
    status: "active" | "inactive";
  };
  formErrors: {
    name: string;
    email: string;
  };
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const AddUserModal: React.FC<AddUserModalProps> = ({
  isOpen,
  onClose,
  formData,
  formErrors,
  onChange,
  onSubmit,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          onClick={onClose}
          aria-hidden="true"
        ></div>

        <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex flex-col sm:items-center">
              <div className="flex flex-col items-center text-center">
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-blue-600"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h3 className="text-lg leading-6 font-medium text-gray-900 mt-3">
                  Adicionar Novo Usuário
                </h3>
              </div>
              <div className="mt-4 w-full">
                <form onSubmit={onSubmit} className="space-y-4">
                  <Input
                    id="name"
                    name="name"
                    label="Nome"
                    value={formData.name}
                    onChange={onChange}
                    error={formErrors.name}
                  />

                  <Input
                    id="email"
                    name="email"
                    type="email"
                    label="Email"
                    value={formData.email}
                    onChange={onChange}
                    error={formErrors.email}
                  />

                  <Select
                    id="status"
                    name="status"
                    label="Status"
                    value={formData.status}
                    onChange={onChange}
                    options={[
                      { value: "active", label: "Ativo" },
                      { value: "inactive", label: "Inativo" },
                    ]}
                  />
                </form>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <Button
              onClick={onSubmit}
              className="w-full justify-center sm:ml-3 sm:w-auto"
            >
              Adicionar
            </Button>
            <Button
              variant="secondary"
              onClick={onClose}
              className="mt-3 w-full justify-center sm:mt-0 sm:ml-3 sm:w-auto"
            >
              Cancelar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
