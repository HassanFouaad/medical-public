import { Box, Typography } from "@mui/material";
import React from "react";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";

export default function AboutUsFirst() {
  const [aboutUs, setAboutUs] = React.useState([
    {
      text: "The Suitable Solution For Pharmacies And Medical Providers Stock \n The Suitable Solution For Pharmacies And Medical Providers StockThe Suitable Solution For Pharmacies And Medical Providers Stock \n The Suitable Solution For Pharmacies And Medical Providers Stock \n The Suitable Solution For Pharmacies And Medical Providers StockThe Suitable Solution For Pharmacies And Medical Providers StockThe Suitable Solution For Pharmacies And Medical Providers StockThe Suitable Solution For Pharmacies And Medical Providers Stock The Suitable Solution For Pharmacies And Medical Providers Stock \n The Suitable Solution For Pharmacies And Medical Providers StockThe Suitable Solution For Pharmacies And Medical Providers Stock \n The Suitable Solution For Pharmacies And Medical Providers Stock \n The Suitable Solution For Pharmacies And Medical Providers StockThe Suitable Solution For Pharmacies And Medical Providers StockThe Suitable Solution For Pharmacies And Medical Providers StockThe Suitable Solution For Pharmacies And Medical Providers Stock",
      level: 1,
    },
    {
      text: "The Suitable Solution For Pharmacies And Medical Providers Stock \n The Suitable Solution For Pharmacies And Medical Providers StockThe Suitable Solution For Pharmacies And Medical Providers Stock \n The Suitable Solution For Pharmacies And Medical Providers Stock \n The Suitable Solution For Pharmacies And Medical Providers StockThe Suitable Solution For Pharmacies And Medical Providers StockThe Suitable Solution For Pharmacies And Medical Providers StockThe Suitable Solution For Pharmacies And Medical Providers Stock The Suitable Solution For Pharmacies And Medical Providers Stock \n The Suitable Solution For Pharmacies And Medical Providers StockThe Suitable Solution For Pharmacies And Medical Providers Stock \n The Suitable Solution For Pharmacies And Medical Providers Stock \n The Suitable Solution For Pharmacies And Medical Providers StockThe Suitable Solution For Pharmacies And Medical Providers StockThe Suitable Solution For Pharmacies And Medical Providers StockThe Suitable Solution For Pharmacies And Medical Providers Stock",
      level: 2,
    },
  ]);

  if (!aboutUs.length) return <></>;

  return aboutUs.map((item) => {
    const isEven = item.level % 2 == 0;
    const texts = item?.text?.split("\n");
    return (
      <Box
        width={1}
        sx={{ py: 5, backgroundColor: isEven ? "primary" : "text.border" }}
      >
        <Container
          maxWidth="lg"
          component="div"
          id={item?.level == 1 ? "about-us" : ""}
        >
          <List width={1}>
            {texts.map((text) => {
              return (
                <ListItemText
                  primary={text}
                  sx={{
                    my: 2,
                    color: isEven ? "white" : "",
                    fontWeight: "bold",
                  }}
                />
              );
            })}
          </List>
        </Container>
      </Box>
    );
  });
}
