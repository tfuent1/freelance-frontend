// src/components/PortfolioCard.jsx
import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const PortfolioCard = ({ title, image, description }) => {
  return (
    <Card>
      <CardMedia component="img" image={image} alt={title} />
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
    </Card>
  );
};

export default PortfolioCard;
