import { styled } from "@mui/material/styles";

export const SfContainer = styled("div")`
  color: ${({ theme }) => theme.palette.text.secondary};
  background: ${({ theme }) => theme.palette.background.default};
  text-align: right;
  padding: 16px 0;
`;
