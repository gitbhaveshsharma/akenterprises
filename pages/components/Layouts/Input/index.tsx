import React from "react";

interface InputProps {
  type: string;
  id: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  placeholder: string;
  isActive: boolean;
  className?: string; // Allow custom className for styling
}

const Input: React.FC<InputProps> = ({
  type,
  id,
  value,
  onChange,
  placeholder,
  isActive,
  className,
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      {" "}
      {/* Apply className if provided */}
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
          isActive ? "border-blue-500" : "border-gray-300"
        } ${className}`} // Combine custom className with existing styles
        required
      />
    </div>
  );
};

export default Input;
