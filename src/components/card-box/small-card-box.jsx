import React from "react";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const SmallCardBox = ({ title, content }) => {
  return (
    <Box>
      <Typography
        fontWeight="600"
        lineHeight="30px"
        letterSpacing="0.5px"
        variant="h4"
        color="#213782"
        sx={{
          fontSize: { xl: "h4.fontSize", xs: "h5.fontSize" },
          borderLeft: "5px solid #e00d20",
          paddingLeft: "10px",
        }}
      >
        {title}
      </Typography>
      <Box lineHeight="30px" letterSpacing="0.5px" padding="20px 20px">
        {content}
      </Box>
      <Box display="flex" padding="20px">
        <Box
          component="hr"
          sx={{
            border: 0,
            height: "3px",
            width: "92%",
            backgroundColor: "#b17e79",
            margin: "10px 0",
          }}
        />
      </Box>
    </Box>
  );
};

export default SmallCardBox;
