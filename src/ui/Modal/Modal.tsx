import { Modal, ModalContent, ModalHeader, ModalBody } from '@heroui/react';
import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  isOpen: boolean;
  title: string;
  onOpenChange: () => void;
}

export const CustomModal: FC<Props> = ({ children, isOpen, onOpenChange, title }) => {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      className="bg-black/70 text-white"
    >
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
};
