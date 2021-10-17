import React from "react";
import InputMask from "react-input-mask";
import { OutlinedTextFieldProps } from "@mui/material";
import TextField from "../textField/textField";

export interface TextFieldMaskProps extends OutlinedTextFieldProps {
  value: string;
  mask: string;
}

const TextFieldMask: React.FC<TextFieldMaskProps> = ({
  mask,
  value,
  onChange,
  ...props
}) => {
  return (
    <InputMask mask={mask} value={value} onChange={onChange}>
      {() => <TextField {...props} />}
    </InputMask>
  );
};

export default TextFieldMask;
