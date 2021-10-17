import React from "react";
import { Container, Box, Typography } from "@mui/material";
import { FooterStyled, FooterTitle } from "./footer.style";

const Footer = () => {
  return (
    <FooterStyled>
      <Container className="container">
        <Box sx={{ maxWidth: "400px" }}>
          <FooterTitle>QUEM SOMOS</FooterTitle>
          <Typography variant="body2" sx={{ mt: 2 }}>
            O e-diaristas te ajuda a encontrar um profissional perfeito para
            realizar a limpeza de sua casa. Garantimos os melhores profissionais
            com total segurança e praticidade! São milhares de clientes
            satisfeitos por todo o país.
          </Typography>
        </Box>
        <div>
          <FooterTitle>BAIXE NOSSO APP</FooterTitle>
          <ul>
            <li>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <img src="/img/logos/app-store.png" alt="app-store" />
              </a>
            </li>
            <li>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <img src="/img/logos/google-play.png" alt="google-play" />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </FooterStyled>
  );
};

export default Footer;
