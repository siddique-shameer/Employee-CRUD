// src/components/Modal.js
import React from 'react';

const Modal = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render the modal if it's not open

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
        <button onClick={onClose} className="text-gray-500 hover:text-gray-800 float-right">
          ✖
        </button>
        {children} {/* Render the children (EmployeeForm) inside the modal */}
      </div>
    </div>
  );
};

export default Modal;
