"use client";
import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { keyframes } from "@emotion/react";
import Img from "../../../public/img/Logo-zalo.svg";
import { CardMedia } from "@mui/material";

const ring = keyframes`
  0% { transform: scale(1); }
  10% { transform: scale(1.1); }
  20% { transform: scale(1); }
  30% { transform: scale(1.1); }
  40% { transform: scale(1); }
  50% { transform: scale(1.1); }
  60% { transform: scale(1); }
  100% { transform: scale(1); }
`;

const PopUpZalo = ({ hotline }) => {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 100,
        left: 15,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        zIndex: 9999,
      }}
    >
      <Box
        sx={{
          animation: `${ring} 2s infinite`,
          borderRadius: "40%",
          p: 1,
          bgcolor: "#e9eaf4",
          boxShadow: 3,
        }}
      >
        <IconButton
          variant="contained"
          color="primary"
          href={`https://zalo.me/${hotline?.replace(/\s+/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            animation: `${ring} 2s infinite`,
            bgcolor: "#005ee6",
            color: "white",
            "&:hover": {
              bgcolor: "#e9eaf4",
            },
            borderRadius: "40%",
            opacity: "0.8",
            p: 0.5,
          }}
        >
          <CardMedia
            component="img"
            image={Img.src}
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </IconButton>
      </Box>
    </Box>
  );
};

export default PopUpZalo;
