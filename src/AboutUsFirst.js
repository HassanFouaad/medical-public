import { Box, Typography } from "@mui/material";
import React from "react";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import axios from "axios";
const aboutUsApi = `${process.env.NEXT_PUBLIC_API_URL}/public/about-us`;

const getAboutUsApi = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(aboutUsApi);
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

export default function AboutUsFirst() {
  const [aboutUs, setAboutUs] = React.useState([]);

  const getAboutUs = React.useCallback(async () => {
    const { error, data } = await getAboutUsApi();
    if (error) {
      return;
    } else {
      setAboutUs(data);
    }
  }, []);

  React.useEffect(() => {
    getAboutUs();
  }, [getAboutUs]);

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
