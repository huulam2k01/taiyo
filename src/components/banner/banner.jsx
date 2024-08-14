"use client";
import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Cloud from "./component/cloud";
import useMediaQuery from "@mui/material/useMediaQuery";
import useTheme from "@mui/material/styles/useTheme";

const Banner = ({ hotline }) => {
  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "40vh",
        backgroundImage: `url(https://ik.imagekit.io/tvlk/blog/2022/06/shutterstock_1396013432.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          minHeight: "40vh",
          backgroundImage: `url(https://ik.imagekit.io/tvlk/blog/2022/06/shutterstock_1396013432.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          padding: "0 5%",
        }}
      >
        <Button
          sx={{
            width: "250px",
            alignSelf: "end",
            padding: "5px 20px",
            marginRight: "16%",
            marginTop: "20px",
            backgroundColor: "#b80602",
          }}
          href="/services"
          variant="contained"
        >
          Hotline: {hotline}
          <PhoneEnabledIcon />
        </Button>

        <Typography
          fontWeight="600"
          lineHeight="30px"
          letterSpacing="0.5px"
          color="#fbbc0f"
          variant="h3"
          sx={{
            fontSize: { xl: "h3.fontSize", xs: "h4.fontSize" },
            padding: "45px 0px 10px 0px",
            alignSelf: "center",
          }}
        >
          Nâng tầm tri thức, thắp sáng tương lai.
        </Typography>
        <Typography
          fontWeight="600"
          lineHeight="30px"
          letterSpacing="0.5px"
          color="white"
          variant="h5"
          sx={{
            fontSize: { xl: "h5.fontSize", xs: "h6.fontSize" },
            padding: "15px 0px",
            alignSelf: "center",
          }}
        >
          Học nhanh hơn. Nhớ lâu hơn. Tương tác nhiều hơn.
        </Typography>
        <Button
          sx={{
            borderRadius: "20px",
            padding: "5px 20px",
            backgroundColor: "#e00d20",
            alignSelf: "center",
            margin: "20px 0",
          }}
          href="/services"
          variant="contained"
        >
          <Typography
            fontWeight="600"
            lineHeight="30px"
            letterSpacing="0.5px"
            color="white"
            variant="h5"
            sx={{
              fontSize: { xl: "h5.fontSize", xs: "h6.fontSize" },
              padding: "2px 10px",
            }}
          >
            Hotline: {hotline}
          </Typography>
          <ArrowForwardIcon />
        </Button>
      </Box>
      {isLgUp && <Cloud />}
    </Box>
  );
};

export default Banner;
