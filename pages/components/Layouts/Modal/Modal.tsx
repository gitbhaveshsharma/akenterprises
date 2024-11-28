import React from "react";
import Image from "next/image";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title: string;
  description: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  imageSrc,
  title,
  description,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-[25px] animate-fade-in"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-lg p-4 sm:p-8 w-[90%] max-w-2xl m-4 transform animate-modal-scale-up">
        <button
          className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-500 hover:text-gray-700 transition-colors duration-300"
          onClick={onClose}
        >
          ✕
        </button>
        <div className="relative h-48 sm:h-64 w-full mb-4">
          <Image
            src={imageSrc}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">{title}</h2>
        <p className="text-gray-600 text-sm sm:text-base">{description}</p>
      </div>
    </div>
  );
};

export default Modal;
