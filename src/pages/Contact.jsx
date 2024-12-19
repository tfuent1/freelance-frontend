// src/pages/Contact.jsx
import React from "react";
import { Box, Typography } from "@mui/material";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <Box sx={{ py: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Contact Me
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        Have questions or want to work together? Drop me a message!
      </Typography>
      <ContactForm />
    </Box>
  );
};

export default Contact;
