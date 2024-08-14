import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const Footer = () => {
  return (
    <footer>
      <Box
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: "#2b3844",
        }}
      >
        <Container maxWidth="sm">
          <Typography sx={{ color: "white" }} variant="body2" align="center">
            {"Copyright © "}
            <Link sx={{ color: "white" }} color="inherit" href="">
              Your Website
            </Link>{" "}
            {"."}
          </Typography>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
