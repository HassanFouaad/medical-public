import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

const navItems = [
  {
    text: "Home",
    href: "#home",
  },
  {
    text: "Request",
    href: "#request",
  },
  {
    text: "About us",
    href: "#about-us",
  },
  {
    text: "Contact",
    href: "#contact",
  },
];

function DAppBar(props) {
  return (
    <Box width={1}>
      <AppBar component="nav" elevation={0} width={1}>
        <Container maxWidth="lg">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                color: "white",
                display: {
                  md: "none",
                  sm: "none",
                  xs: "none",
                  lg: "inline",
                },
              }}
            >
              App Logo
            </Typography>
            <Box>
              {navItems.map((item) => (
                <Button
                  key={item.href}
                  component={Link}
                  sx={{ color: "#fff", textDecoration: "none" }}
                  href={item.href}
                >
                  {item.text}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </Box>
  );
}

AppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DAppBar;
