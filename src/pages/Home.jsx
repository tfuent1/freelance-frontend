// src/pages/Home.jsx
import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Home = () => {
  return (
    <Box sx={{ textAlign: "center", py: 10, px: 2 }}>
      <Typography variant="h3" gutterBottom>
        Beautiful, Modern Websites for Small Businesses
      </Typography>
      <Typography variant="h6" gutterBottom>
        Let’s take your online presence to the next level.
      </Typography>
      <Button variant="contained" color="primary" size="large" href="/contact">
        Get Started
      </Button>
    </Box>
  );
};

export default Home;
