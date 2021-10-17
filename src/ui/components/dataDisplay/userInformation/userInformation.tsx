import React from "react";
import { Avatar, Rating, Container } from "@mui/material";
import { UserContainer } from "./userInformation.style";

interface UserInfomationProps {
  picture: string;
  name: string;
  rating: number;
  description?: string;
}

export const UserInformation: React.FC<UserInfomationProps> = (props) => {
  return (
    <UserContainer>
      <Avatar className="avatarStyled" src={props.picture}>
        {props.name[0]}
      </Avatar>
      <div className="userName">{props.name}</div>
      <Rating className="ratingStyled" readOnly value={props.rating} />
      <div className="userDescription">{props.description}</div>
    </UserContainer>
  );
};
