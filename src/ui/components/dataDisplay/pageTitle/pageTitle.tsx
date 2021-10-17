import React from "react";
import { Pg_Container } from "./pageTitle.style";

interface pageTitleProps {
  title: string;
  subTitle?: string | number;
}

const PageTitle: React.FC<pageTitleProps> = (props) => {
  return (
    <Pg_Container>
      <h2>{props.title}</h2>
      <p>{props.subTitle}</p>
    </Pg_Container>
  );
};

export default PageTitle;
