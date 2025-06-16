import { Button } from "../atoms/button";
import { Input } from "../atoms/input";
import { Select } from "../atoms/select";
import { User } from "lucide-react";

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

export const AddUserModal = ({
  isOpen,
  onClose,
  formData,
  formErrors,
  onChange,
  onSubmit,
}: AddUserModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center min-h-screen"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
    >
      <div className="relative inline-block bg-white rounded-xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:max-w-xl sm:w-full">
        <div className="bg-white px-6 pt-6 pb-4 sm:p-8 sm:pb-6">
          <div className="flex flex-col items-center border-b border-gray-200 pb-4">
            <div className="flex-shrink-0 flex items-center justify-center h-14 w-14 rounded-full bg-blue-100">
              <User color="blue" className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mt-4">
              Adicionar Novo Usuário
            </h3>
          </div>
          <div className="mt-6 w-full">
            <form onSubmit={onSubmit} className="space-y-6">
              <Input
                id="name"
                name="name"
                label="Nome"
                value={formData.name}
                onChange={onChange}
                error={formErrors.name}
                className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
              />
              <Input
                id="email"
                name="email"
                type="email"
                label="Email"
                value={formData.email}
                onChange={onChange}
                error={formErrors.email}
                className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
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
                className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
              />
            </form>
          </div>
        </div>
        <div className="bg-gray-50 px-6 py-4 sm:px-8 sm:flex sm:flex-row-reverse sm:gap-3">
          <Button
            onClick={onSubmit}
            className="w-full sm:w-auto bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
          >
            Adicionar
          </Button>
          <Button
            variant="secondary"
            onClick={onClose}
            className="w-full sm:w-auto mt-3 sm:mt-0"
          >
            Cancelar
          </Button>
        </div>
      </div>
    </div>
  );
};
