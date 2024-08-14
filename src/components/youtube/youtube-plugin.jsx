"use client";

import Box from "@mui/material/Box";

const YouTubePlugin = ({ srcPlugin }) => {
  return (
    <Box
      sx={{
        position: "relative",
        paddingBottom: "100%",
        height: 0,
      }}
    >
      <iframe
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: "none",
          overflow: "hidden",
          border: "1px solid #ddd",
          borderRadius: "8px",
        }}
        src={srcPlugin}
        // src="https://www.youtube.com/embed/GHh5k4fJC3w?si=773piEi8eWlem2ij"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </Box>
  );
};

export default YouTubePlugin;
