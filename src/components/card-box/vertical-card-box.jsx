import React from "react";

import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const VerticalCardBox = ({ src, title, alt, content }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      sx={{
        marginTop: 2,
        marginBottom: 2,
        pt: 3.125,
        pb: 1,
        pr: { lg: 4, sm: 2, xs: 3.75 },
        pl: { lg: 4, sm: 2, xs: 3.75 },
        backgroundColor: "#be382d",
        border: "1px solid #e00d20",
        borderRadius: 2.5,
        boxSizing: "border-box",
        height: {
          xl: 280,
          lg: 230,
          md: 240,
          sm: 270,
          xs: 240,
        },
        color: "white",
        "&:hover": {
          transform: "scale(1.01)",
          transition: ".2s",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
          borderColor: "primary.main",
          backgroundColor: "primary.contrastText",
          color: "black",
        },
      }}
    >
      <Box
        position="relative"
        sx={{
          border: "8px solid #ecf0f5",
          borderRadius: "50%",
          width: { xl: 120, md: 100, xs: 90 },
          height: { xl: 120, md: 100, xs: 90 },
          overflow: "hidden",
          backgroundColor: "white",
        }}
      >
        <CardMedia
          component="img"
          image={src}
          alt={alt}
          sx={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>
      <Box
        sx={{
          textAlign: "center",
          paddingTop: { xl: 5, xs: 3.75 },
        }}
      >
        <Typography
          fontWeight="600"
          lineHeight="30px"
          letterSpacing="0.5px"
          variant="h5"
          sx={{
            fontSize: { xl: "h5.fontSize", xs: "h6.fontSize" },
          }}
        >
          {title}
        </Typography>
        {content && <Typography>{content}</Typography>}
      </Box>
    </Box>
  );
};

export default VerticalCardBox;
