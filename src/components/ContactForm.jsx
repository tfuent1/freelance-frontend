import React, { useState } from "react";
import { Box, TextField, Button, Typography, Alert } from "@mui/material";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ type: "success", message: "Form submitted successfully. Thank you!" });
        setFormData({ name: "", email: "", message: "" }); // Reset the form

        // Hide the success message after 5 seconds
        setTimeout(() => {
          setStatus({ type: "", message: "" });
        }, 5000);
      } else {
        const errorData = await response.json();
        setStatus({ type: "error", message: errorData.error });
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setStatus({ type: "error", message: "An error occurred. Please try again." });
    }
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: "400px",
        margin: "0 auto",
        mt: 5,
      }}
      onSubmit={handleSubmit}
    >
      <Typography variant="h4" textAlign="center">
        Contact Us
      </Typography>

      {status.message && (
        <Alert severity={status.type} onClose={() => setStatus({ type: "", message: "" })}>
          {status.message}
        </Alert>
      )}

      <TextField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        fullWidth
      />
      <TextField
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
        fullWidth
      />
      <TextField
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        multiline
        rows={4}
        required
        fullWidth
      />
      <Button variant="contained" color="primary" type="submit" fullWidth>
        Send Message
      </Button>
    </Box>
  );
};

export default ContactForm;
