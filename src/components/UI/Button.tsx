import React, { FC } from "react";
import MUIButton from "@mui/material/Button";

type TProps = {
  text: string;
};

const Button: FC<TProps> = ({ text }) => {
  return (
    <MUIButton className="w-full rounded-3xl h-12" variant="contained">
      {text}
    </MUIButton>
  );
};

export default Button;
