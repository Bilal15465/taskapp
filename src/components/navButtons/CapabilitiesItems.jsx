// CapabilitiesItems.js
import React from "react";
import { Box, Typography, Grid, Divider } from "@mui/material";

const services = [
  "Application services", "Artificial intelligence", "Automation",
  "Business strategy", "Cloud", "Customer experience", "Cybersecurity",
  "Finance", "HR and talent", "Marketing", "Supply chain"
];

const signatureExperiences = [
  {
    title: "Consulting Advantage",
    desc: "First-of-its-kind AI-powered platform to supercharge client delivery faster, at scale.",
  },
  {
    title: "Garage",
    desc: "Collaborative engagement model for accelerating AI and digital transformation.",
  },
  {
    title: "X-Force",
    desc: "Build a comprehensive, integrated security program to protect your organization from global threats.",
  },
];

const CapabilitiesItems = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "64px", // Adjusted to align with AppBar height
        left: "10%",
        width: "80vw",
        height: "420px",
        zIndex: 1300,
        backgroundColor: "#fff",
        boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
        display: "flex",
        overflow: "hidden",
      }}
    >
      {/* Left Panel */}
      <Box
        sx={{
          width: "30%",
          px: 3,
          py: 3,
          borderRight: "1px solid #e0e0e0",
        }}
      >
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
          Services
        </Typography>
        {services.map((service, idx) => (
          <Typography
            key={idx}
            variant="body2"
            sx={{
              mb: 1.4,
              cursor: "pointer",
              color: "#333",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            {service}
          </Typography>
        ))}
      </Box>

      {/* Right Panel */}
      <Box
        sx={{
          width: "70%",
          overflowY: "auto",
          px: { xs: 2, md: 3 },
          py: 3,
        }}
      >
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
          Signature Experiences
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Grid container spacing={2}>
          {signatureExperiences.map((item, idx) => (
            <Grid key={idx} item xs={12} sm={6} md={4}>
              <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                {item.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "#555" }}>
                {item.desc}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default CapabilitiesItems;
