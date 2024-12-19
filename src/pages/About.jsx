// src/pages/About.jsx
import React from "react";
import { Box, Typography, Container } from "@mui/material";

const About = () => {
  return (
    <Container>
      <Box sx={{ py: 5 }}>
        <Typography variant="h4" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1" paragraph>
          Hi, I'm a passionate web designer dedicated to helping small businesses and non-profits build beautiful, modern, and functional websites. 
          With years of experience in design and development, I bring your vision to life while ensuring your online presence stands out.
        </Typography>
        <Typography variant="body1" paragraph>
          My goal is to create websites that are not only visually stunning but also highly functional and user-friendly. 
          Let’s work together to create something amazing for your brand!
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
