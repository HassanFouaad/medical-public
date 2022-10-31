import { Box, Typography } from "@mui/material";
import React from "react";
import Container from "@mui/material/Container";
export default function HomeSplash() {
  return (
    <Box width={1} sx={{ py: 7, overflowX: "hidden" }} id="home">
      <Container maxWidth="lg">
        <Box
          display="flex"
          width={1}
          alignItems="flex-end"
          justifyContent="space-between"
        >
          <Box>
            <Typography
              component="div"
              color="white"
              variant="h1"
              fontWeight="bold"
            >
              App Name
            </Typography>
            <Typography
              component="div"
              color="white"
              variant="h5"
              fontWeight="bold"
            >
              The Suitable Solution For Pharmacies And Medical Providers Stock
              Management
            </Typography>
          </Box>
          <Box
            sx={{
              display: {
                sm: "none",
                xs: "none",
                lg: "block",
              },
            }}
          >
            <img src="assets/spread.svg" alt="footer logo" width="500" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
