"use client";

import { FC, PropsWithChildren } from "react";
import { Dialog, DialogContent } from "@mui/material";

type TProps = {
  open: boolean;
  closeModal: () => void;
};

const CModal: FC<TProps & PropsWithChildren> = ({
  open,
  closeModal,
  children,
}) => {
  return (
    <Dialog fullWidth open={open} onClose={closeModal}>
      <div className="bg-gray-400 m-auto w-full h-full items-center">
        <DialogContent className="opacity-100">{children}</DialogContent>
      </div>
    </Dialog>
  );
};

export default CModal;
