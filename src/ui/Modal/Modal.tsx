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
      size="lg"
      className="bg-black/60 text-white rounded-md"
      placement="center"
    >
      <ModalContent>
        {() => (
          <>
            <ModalHeader className="flex flex-col gap-1 text-center py-2 text-2xl">{title}</ModalHeader>
            <ModalBody className="flext justify-center items-center">{children}</ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
