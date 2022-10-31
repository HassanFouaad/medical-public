import { Box } from "@mui/system";
import React from "react";
import Container from "@mui/material/Container";
import MuiLink from "@mui/material/Link";
import {
  Email,
  Phone,
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";

export default function Contact() {
  return (
    <Box width={1} sx={{ backgroundColor: "PRIMARY", py: 5 }} id="contact">
      <Container maxWidth="lg">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ color: "white" }}
          flexDirection="column"
        >
          <Box textAlign="center" sx={{ color: "white" }}>
            {"Copyright © "}
            <MuiLink
              href={process.env.NEXT_PUBLIC_CLIENT_URL}
              sx={{ color: "white" }}
            >
              App Name
            </MuiLink>{" "}
            {new Date().getFullYear()}.
          </Box>

          <Box display="flex">
            <MuiLink href="email:app@email.com">
              <IconButton sx={{ color: "white" }}>
                <Email />
              </IconButton>
            </MuiLink>

            <MuiLink href="phone:+201202021670">
              <IconButton sx={{ color: "white" }}>
                <Phone />
              </IconButton>
            </MuiLink>
            <MuiLink href="https://facebook.com/foqsh" target="_blank">
              <IconButton sx={{ color: "white" }}>
                <Facebook />
              </IconButton>
            </MuiLink>

            <MuiLink href="https://linkedin.com/in/hassanfouad" target="_blank">
              <IconButton sx={{ color: "white" }}>
                <LinkedIn />
              </IconButton>
            </MuiLink>

            <MuiLink href="https://facebook.com/foqsh" target="_blank">
              <IconButton sx={{ color: "white" }}>
                <Twitter />
              </IconButton>
            </MuiLink>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
