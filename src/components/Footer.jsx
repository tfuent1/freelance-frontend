// src/components/Footer.jsx
import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Footer = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: "primary.main", p: 2, color: "white" }}>
      <Typography variant="body1" align="center">
        © 2024 My Freelance Business | All rights reserved
      </Typography>
    </Box>
  );
};

export default Footer;
