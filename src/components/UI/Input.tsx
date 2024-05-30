import React, { FC } from "react";
import { TextField } from "@mui/material";
import { Control, Controller } from "react-hook-form";

type TProps = {
  label: string;
  name: string;
  placeholder: string;
  control: Control<any>;
};

const Input: FC<TProps> = ({ label, placeholder, name, control }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-c-white" htmlFor={name}>
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <>
            <TextField
              {...field}
              id={name}
              name={name}
              placeholder={placeholder}
              style={{
                padding: 0,
              }}
              sx={{
                "& .MuiInputBase-input::placeholder": {
                  color: "#575757",
                  fontWeight: "400",
                },
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "#497555",
                    borderWidth: "0.5px",
                  },
                },
                "& .MuiInputBase-input": { paddingY: 1.5, paddingX: 2 },
              }}
              InputProps={{
                style: {
                  color: "white",
                  borderRadius: 18,
                  border: "0.5px solid #3c3c3d",
                  backgroundColor: "#202123",
                },
              }}
            />
            {fieldState.error && (
              <div className="text-red-600">{fieldState.error.message}</div>
            )}
          </>
        )}
      />
    </div>
  );
};

export default Input;
