import * as React from "react";

import Box from "@mui/material/Box";
import DrawerAppBar from "../src/Nav";
import HomeSplash from "../src/HomeSplash";
import AboutUsFirst from "../src/AboutUsFirst";
import Join from "../src/Join";
import Contact from "../src/Contact";

export default function Index() {
  return (
    <Box
      width={1}
      sx={{
        backgroundColor: "primary.main",
        height: "100vh",
        overflowX: "hidden",
        overflowY: "scroll",
        scrollBehavior: "smooth",
      }}
    >
      <DrawerAppBar />

      <HomeSplash />

      <AboutUsFirst />

      <Join />

      <Contact />
    </Box>
  );
}
