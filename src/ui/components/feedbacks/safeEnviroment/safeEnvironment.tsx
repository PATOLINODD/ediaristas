import React from "react";
import { SfContainer } from "./safeEnvironment.style";

import { Container } from "@mui/material";

const safeEnvironment = () => {
  return (
    <SfContainer>
      <Container>
        ambiente seguro <i className={"twf-lock"} />
      </Container>
    </SfContainer>
  );
};

export default safeEnvironment;
