"use client";
import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import PhoneIcon from "@mui/icons-material/Phone";
import { keyframes } from "@emotion/react";

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

const Hotline = ({ hotline }) => {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 16,
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
          borderRadius: "50%",
          p: 1,
          bgcolor: "#d99c96",
          boxShadow: 3,
        }}
      >
        <IconButton
          sx={{
            bgcolor: "#be382d",
            color: "white",
            "&:hover": {
              bgcolor: "#d99c96",
            },
            p: 1,
          }}
          href={`tel:${hotline}`}
        >
          <PhoneIcon fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Hotline;
