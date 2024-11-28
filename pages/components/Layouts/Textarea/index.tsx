import React from "react";

interface TextareaProps {
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  isActive: boolean;
  rows?: number;
  className?: string; // Added className to the interface
  required?: boolean;
}

const Textarea: React.FC<TextareaProps> = ({
  id,
  value,
  onChange,
  placeholder,
  isActive,
  rows = 4,
  className = "", // Default to an empty string if className is not provided
  required = false,
}) => {
  return (
    <div className="mb-4">
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        rows={rows}
        placeholder={placeholder}
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
          isActive ? "border-blue-500" : "border-gray-300"
        } ${className}`}
        required={required}
      />
    </div>
  );
};

export default Textarea;
