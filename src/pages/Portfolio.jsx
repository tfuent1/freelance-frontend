// src/pages/Portfolio.jsx
import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import PortfolioCard from "../components/PortfolioCard";

const projects = [
  { title: "Project A", image: "/images/project-a.jpg", description: "A beautiful e-commerce site." },
  { title: "Project B", image: "/images/project-b.jpg", description: "A modern portfolio site." },
  { title: "Project C", image: "/images/project-c.jpg", description: "A non-profit landing page." },
];

const Portfolio = () => {
  return (
    <Box sx={{ py: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Portfolio
      </Typography>
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <PortfolioCard 
              title={project.title} 
              image={project.image} 
              description={project.description} 
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
