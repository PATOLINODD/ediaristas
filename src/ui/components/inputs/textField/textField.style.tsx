import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const InputStyled = styled(TextField)`
  .MuiInputBase-root {
    background: ${({ theme }) => theme.palette.grey[50]};
  }
  .MuiOutlinedInput-notchedOutline {
    border-color: ${({ theme }) => theme.palette.grey[100]};
  }
`;
