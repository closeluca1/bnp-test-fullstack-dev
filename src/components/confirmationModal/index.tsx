import React from 'react';
import { Modal } from './../Modal';

type ConfirmationModalProps = {
  isOpen: boolean;
  onClose: (type: 'click' | 'esc', target: EventTarget) => void;
  onConfirm: () => void;
  content: React.ReactNode;
};

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  content,
}) => {
  return (
    <Modal
      title="Confirmação"
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={onConfirm}
      footer={{
        confirmText: 'Confirmar',
        cancelText: 'Cancelar',
      }}
    >
      {content}
    </Modal>
  );
};
