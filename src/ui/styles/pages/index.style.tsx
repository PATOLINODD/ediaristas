import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";

export const FormContainer = styled("div")`
  display: flex;
  flex-flow: column;
  gap: ${({ theme }) => theme.spacing(5)};
  max-width: 650px;
  align-items: center;
  margin: 0 auto ${({ theme }) => theme.spacing(7)};
`;

export const ProfissionaisPaper = styled(Paper)`
  padding: ${({ theme }) => theme.spacing(7)};
  margin: 0 auto ${({ theme }) => theme.spacing(10)};

  ${({ theme }) => theme.breakpoints.down("md")} {
    &.MuiPaper-root {
      padding: 0;
      box-shadow: none;
    }
  }

  section {
    display: grid;
    grid-template-columns: 1fr;

    ${({ theme }) => theme.breakpoints.up("md")} {
      gap: ${({ theme }) => theme.spacing(6)};
      grid-template-columns: repeat(2, 1fr);
    }
    ${({ theme }) => theme.breakpoints.down("md")} {
      margin: 0 ${({ theme }) => theme.spacing(-2)};
      > :nth-child(odd) {
        background: ${({ theme }) => theme.palette.background.paper};
      }
    }
  }
`;
