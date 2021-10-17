import { styled } from "@mui/material/styles";
import { AppBar } from "@mui/material";

export const HeaderAppBar = styled(AppBar)`
  position: sticky;
  background: ${({ theme }) => theme.palette.background.paper};
  box-shadow: 0 5px 4px rgba(0, 0, 0, 0.05);

  img {
    height: 25px;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    .toolbar {
      height: 100px;
    }

    img {
      height: 47px;
    }
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    .toolbar {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
