import { styled } from "@mui/material/styles";

export const UserContainer = styled("div")`
  display: grid;
  grid-template-columns: 60px 1fr;
  grid-template-rows: repeat(3, auto);
  grid-template-areas:
    "avatar name"
    "avatar rating"
    "avatar description";

  background: ${({ theme }) => theme.palette.grey[50]};
  padding: ${({ theme }) => theme.spacing(3)};
  gap: ${({ theme }) => theme.spacing(0.5) + " " + theme.spacing(2)};
  align-items: center;

  .userName {
    grid-area: name;
    font-weight: bolder;
    font-size: ${({ theme }) => theme.typography.body2.fontSize};
    color: ${({ theme }) => theme.palette.text.primary};
  }
  .userDescription {
    grid-area: description;
    font-size: ${({ theme }) => theme.typography.body2.fontSize};
    color: ${({ theme }) => theme.palette.text.secondary};
  }
  .ratingStyled {
    grid-area: rating;
    font-size: 14px;
  }
  .avatarStyled {
    grid-area: avatar;
    width: 100%;
    height: initial;
    aspect-ratio: 1;
  }
`;
