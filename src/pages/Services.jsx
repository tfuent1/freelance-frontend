// src/pages/Services.jsx
import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";

const services = [
  { title: "Web Design", description: "Custom website designs tailored to your brand." },
  { title: "SEO Optimization", description: "Increase your visibility with optimized content." },
  { title: "E-commerce", description: "Set up and manage your online store effortlessly." },
  { title: "Maintenance", description: "Keep your website up-to-date and secure." },
];

const Services = () => {
  return (
    <Box sx={{ py: 5, px: 2 }}>
      <Typography variant="h4" align="center" gutterBottom>
        My Services
      </Typography>
      <Grid container spacing={3}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper elevation={3} sx={{ p: 3, textAlign: "center" }}>
              <Typography variant="h6" gutterBottom>
                {service.title}
              </Typography>
              <Typography variant="body2">{service.description}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
