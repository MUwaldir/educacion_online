import React from 'react';

const ModalRespuesta = ({ isOpen, onClose, message }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-8 relative">
        <span className="absolute top-0 right-0 p-4 cursor-pointer text-gray-500" onClick={onClose}>×</span>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default ModalRespuesta;
