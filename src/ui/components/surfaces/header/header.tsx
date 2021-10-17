import React from "react";
import { HeaderAppBar } from "./header.style";
import { Toolbar, Container } from "@mui/material";

const Header: React.FC = () => {
  return (
    <HeaderAppBar>
      <Toolbar className="toolbar" component={Container}>
        <img src={"/img/logos/logo.svg"} alt="e-diaristas" />
        aqui é o cabeçalho da pagina
      </Toolbar>
    </HeaderAppBar>
  );
};

export default Header;
