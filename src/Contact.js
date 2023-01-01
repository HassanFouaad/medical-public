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
  YouTube,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import axios from "axios";
const socialLinksApi = `${process.env.NEXT_PUBLIC_API_URL}/public/social`;

const getSocialLinksService = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(socialLinksApi);
    return {
      data,
    };
  } catch (error) {
    console.error(error);
    return {
      error: error?.response?.data?.error?.message || "Unkown Error",
    };
  }
};
export default function Contact() {
  const [socialLinks, setSocialLinks] = React.useState({});

  const getSocialLinks = React.useCallback(async () => {
    const { error, data } = await getSocialLinksService();
    if (error) {
      return;
    } else {
      setSocialLinks(data);
    }
  }, []);

  React.useEffect(() => {
    getSocialLinks();
  }, [getSocialLinks]);

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
              SanPly
            </MuiLink>{" "}
            {new Date().getFullYear()}.
          </Box>

          <Box display="flex">
            {socialLinks.email && (
              <MuiLink href={`email:${socialLinks.email}`}>
                <IconButton sx={{ color: "white" }}>
                  <Email />
                </IconButton>
              </MuiLink>
            )}

            {socialLinks.phone && (
              <MuiLink href={`tel:${socialLinks.phone}`}>
                <IconButton sx={{ color: "white" }}>
                  <Phone />
                </IconButton>
              </MuiLink>
            )}

            {socialLinks.facebook && (
              <MuiLink href={socialLinks.facebook} target="_blank">
                <IconButton sx={{ color: "white" }}>
                  <Facebook />
                </IconButton>
              </MuiLink>
            )}

            {socialLinks.linkedIn && (
              <MuiLink href={socialLinks.linkedIn} target="_blank">
                <IconButton sx={{ color: "white" }}>
                  <LinkedIn />
                </IconButton>
              </MuiLink>
            )}

            {socialLinks.twitter && (
              <MuiLink href={socialLinks.twitter} target="_blank">
                <IconButton sx={{ color: "white" }}>
                  <Twitter />
                </IconButton>
              </MuiLink>
            )}

            {socialLinks.youtube && (
              <MuiLink href={socialLinks.youtube} target="_blank">
                <IconButton sx={{ color: "white" }}>
                  <YouTube />
                </IconButton>
              </MuiLink>
            )}

            {socialLinks.instagram && (
              <MuiLink href={socialLinks.instagram} target="_blank">
                <IconButton sx={{ color: "white" }}>
                  <Instagram />
                </IconButton>
              </MuiLink>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
