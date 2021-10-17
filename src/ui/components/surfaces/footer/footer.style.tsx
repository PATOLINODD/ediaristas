import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

export const FooterStyled = styled("footer")`
  background: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.primary.contrastText};
  padding: ${({ theme }) => theme.spacing(4)} 0;
  margin-top: auto;

  .container {
    display: flex;
    justify-content: space-between;
    gap: ${({ theme }) => theme.spacing(2)};
    flex-wrap: wrap;
    ${({ theme }) => theme.breakpoints.down("md")} {
      gap: ${({ theme }) => theme.spacing(2)};
    }
  }

  ul {
    display: flex;
    list-style: none;
    padding: 0;
    gap: ${({ theme }) => theme.spacing()};
  }

  img {
    width: 122px;
  }
`;

export const FooterTitle = styled((props) => (
  <Typography component={"h2"} variant={"body2"} {...props} />
))`
  font-weight: bold;
`;
