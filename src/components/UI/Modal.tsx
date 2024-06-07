"use client";

import { Modal } from "flowbite-react";
import { FC, PropsWithChildren } from "react";

type TProps = {
  open: boolean;
  closeModal: () => void;
  title: string;
};

const CModal: FC<TProps & PropsWithChildren> = ({
  open,
  closeModal,
  children,
  title,
}) => {
  return (
    <Modal
      size="md"
      className="h-screen bg-black flex items-center justify-center"
      show={open}
      onClose={closeModal}
    >
      <div className="w-1/2 m-auto h-full items-center">
        <Modal.Body className="opacity-100">{children}</Modal.Body>
      </div>
    </Modal>
  );
};

export default CModal;
