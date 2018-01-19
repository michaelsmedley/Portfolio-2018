import React from "react";
import SocialBar from "../SocialBar/SocialBar";
import { Container, Box } from "../../components/Grid/Grid";

const Footer = () => (
  <footer className="pt-1 pb-1 js-animate fadeIn animate-5">
    <Container>
      <Box sm="12" md="12" lg="12" xl="12" xxl="12">
        <ul className="inline listless sans-serif">
          <li>
            <a href="mailto:hello@michael-smedley.co.uk">
              hello@michael-smedley.co.uk
            </a>
          </li>
        </ul>
      </Box>
      <SocialBar />
    </Container>
  </footer>
);

export default Footer;
