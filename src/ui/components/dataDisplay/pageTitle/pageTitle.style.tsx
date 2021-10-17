import { styled } from "@mui/material/styles";

export const Pg_Container = styled("div")`
  text-align: center;
  margin: 40px 0;

  h2 {
    margin: 0;
    color: ${({ theme }) => theme.palette.primary.main};
    font-size: ${({ theme }) => theme.typography.h6.fontSize};
    font-weight: 600;

    ${({ theme }) => theme.breakpoints.down("md")} {
      font-size: ${({ theme }) => theme.typography.body1.fontSize};
    }
  }

  h3 {
    margin: ${({ theme }) => theme.spacing(1.5)} 0;
    color: ${({ theme }) => theme.palette.text.primary};
    font-size: ${({ theme }) => theme.typography.body1.fontSize};

    ${({ theme }) => theme.breakpoints.down("md")} {
      font-size: ${({ theme }) => theme.typography.body2.fontSize};
    }
  }
`;
