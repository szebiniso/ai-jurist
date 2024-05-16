import React, { FC } from "react";
import MUIButton from "@mui/material/Button";

type TProps = {
  text: string;
  onClick?: () => void;
};

const Button: FC<TProps> = ({ text, onClick }) => {
  return (
    <MUIButton
      onClick={onClick}
      className="w-full rounded-3xl h-12"
      variant="contained"
    >
      {text}
    </MUIButton>
  );
};

export default Button;
