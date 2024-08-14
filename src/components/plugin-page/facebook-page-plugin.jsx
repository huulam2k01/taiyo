"use client";

import Box from "@mui/material/Box";

const FacebookPagePlugin = ({ pageUrl }) => {
  return (
    <Box
      sx={{
        position: "relative",
        paddingBottom: "100%",
        height: 0,
      }}
    >
      <iframe
        src={pageUrl}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: "none",
          overflow: "hidden",
        }}
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </Box>
  );
};

export default FacebookPagePlugin;
