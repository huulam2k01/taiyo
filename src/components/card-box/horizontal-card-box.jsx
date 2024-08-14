import React from "react";

import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const HorizontalCardBox = ({ src, name, content, option }) => {
  return (
    <Grid
      maxWidth={"lg"}
      sx={{
        flexGrow: 1,
        borderRadius: "25px",
        backgroundColor: "#ECF0F5",
        margin: "20px 0",
        "&:hover": {
          transform: "scale(1.01)",
          transition: ".2s",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
          borderColor: "primary.main",
          backgroundColor: "primary.contrastText",
        },
      }}
      container
    >
      <Grid
        xs={12}
        md={4}
        sx={{
          MaxHeight: "250px",
          borderRadius: option
            ? {
                md: "25px 0 0 25px",
                xs: "25px 25px 0 0",
              }
            : {
                md: "0 25px 25px 0",
                xs: "0 0 25px 25px ",
              },
        }}
        order={option ? 1 : 2}
      >
        <CardMedia
          component="img"
          image={src}
          alt={name}
          sx={{
            width: "100%",
            height: "auto",
            minHeight: "400px",
            objectFit: "cover",
            borderRadius: option
              ? {
                  md: "25px 0 0 25px",
                  xs: "25px 25px 0 0",
                }
              : {
                  md: "0 25px 25px 0",
                  xs: "0 0 25px 25px ",
                },
          }}
        />
      </Grid>

      <Grid xs={12} md={8} order={option ? 2 : 1} padding={5}>
        <Typography
          letterSpacing="0.5px"
          color="text.primary"
          variant="h5"
          sx={{ fontSize: { xl: "h4.fontSize", xs: "h5.fontSize" } }}
        >
          {name}
        </Typography>
        <Typography>{content}</Typography>
      </Grid>
    </Grid>
  );
};

export default HorizontalCardBox;
