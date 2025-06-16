"use client";

import { Button } from "../atoms/button";

interface AddUserButtonProps {
  onClick: () => void;
}

export const AddUserButton = ({ onClick }: AddUserButtonProps) => {
  return (
    <Button onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4 mr-2"
      >
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
      </svg>
      Adicionar Usuário
    </Button>
  );
};
