// components/Button.tsx
import React from "react";

interface ButtonProps {
  name: string;
  className?: string; // Allows additional styling
  onClick?: () => void; // Optional click handler
}

const Button: React.FC<ButtonProps> = ({ name, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition duration-300 ${className}`}
    >
      {name}
    </button>
  );
};

export default Button;
