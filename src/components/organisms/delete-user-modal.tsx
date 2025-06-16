import { Button } from "../atoms/button";
import type { User } from "../../interfaces/user";
import { Trash2 } from "lucide-react";

interface DeleteUserModalProps {
  isOpen: boolean;
  user: User | null;
  onConfirm: () => void;
  onCancel: () => void;
}

export const DeleteUserModal = ({
  isOpen,
  user,
  onConfirm,
  onCancel,
}: DeleteUserModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center min-h-screen"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
    >
      <div className="relative inline-block bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-center">
            <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
              <Trash2 color="red" />
            </div>
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Confirmar Deleção
              </h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Tem certeza que deseja remover <strong>{user?.name}</strong>?
                  Esta ação não pode be desfeita.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <Button
            variant="danger"
            onClick={onConfirm}
            className="sm:ml-3 sm:w-auto"
          >
            Remover
          </Button>
          <Button
            variant="secondary"
            onClick={onCancel}
            className="mt-3 sm:mt-0 sm:ml-3 sm:w-auto"
          >
            Cancelar
          </Button>
        </div>
      </div>
    </div>
  );
};
