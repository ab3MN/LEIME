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
      size="md"
      className="bg-black/60 text-white rounded-md fixed top-[50vh] left-[50vw] translate-x-[-50%] translate-y-[-50%]"
      placement="center"
    >
      <ModalContent>
        {() => (
          <>
            <ModalHeader className="flext justify-center pt-5 pb-2 text-2xl">{title}</ModalHeader>
            <ModalBody className="flext justify-center items-center px-8">{children}</ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
