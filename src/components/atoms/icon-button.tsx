import type React from "react";

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  label: string;
  variant?: "default" | "danger";
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  label,
  variant = "default",
  ...props
}) => {
  const variantClasses = {
    default:
      "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-blue-500",
    danger:
      "border border-gray-300 bg-white text-red-600 hover:bg-red-50 focus:ring-red-500",
  };

  return (
    <button
      className={`inline-flex items-center justify-center h-8 w-8 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${variantClasses[variant]}`}
      {...props}
    >
      {icon}
      <span className="sr-only">{label}</span>
    </button>
  );
};
