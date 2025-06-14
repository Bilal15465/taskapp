import React from "react";
import { Box, Typography, Grid, Divider } from "@mui/material";

const categories = [
  "AI & machine learning", "Analytics", "Asset lifecycle management",
  "Business automation", "Containers", "Databases", "DevOps", "IT automation",
  "Middleware", "Network", "Operating systems", "Quantum", "Security & identity",
  "Servers"
];

const featured = [
  { title: "API Connect", desc: "Software to rapidly create, protect, socialize and manage APIs" },
  { title: "IBM Cloud", desc: "On-demand cloud computing platform and APIs" },
  { title: "Concert", desc: "Simplify and optimize application management" },
  { title: "Environmental Intelligence", desc: "SaaS for predicting and responding to weather and climate events" },
  { title: "Envizi", desc: "ESG data management, reporting and analysis SaaS" },
  { title: "FlashSystem", desc: "Primary storage for performance and latency sensitive workloads" },
  { title: "Hybrid Cloud Mesh", desc: "Manage cloud network and traffic easily" },
  { title: "IBM Z", desc: "Mainframe with on-chip AI and quantum-safe cryptography" },
  { title: "Instana", desc: "App performance monitoring and automation" },
  { title: "MaaS360", desc: "Unified endpoint management software for many device types" },
  { title: "Maximo", desc: "Software for asset management and related workflows" },
  { title: "Planning Analytics", desc: "Business performance management software" },
  { title: "Robotic Process Automation (RPA)", desc: "Automate workflows and business processes" },
  { title: "Storage Defender", desc: "Data resiliency software for threat detection and data recovery" },
  { title: "Turbonomic", desc: "Manage and optimize IT resource usage" },
  { title: "watsonx", desc: "AI and data platform" },
  { title: "watsonx Assistant", desc: "AI chatbot and digital assistant" }
];

const ProductItems = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "48px",
        left: "10%", // centered horizontally with 80% width
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
          overflowY: "auto",
          px: 3,
          py: 2,
          borderRight: "1px solid #e0e0e0",
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            mb: 2,
            fontWeight: 600,
            backgroundColor: "#f4f4f4",
            px: 1,
            py: 0.5,
            borderRadius: "4px",
          }}
        >
          Featured
        </Typography>
        {categories.map((cat, idx) => (
          <Typography
            key={idx}
            variant="body2"
            sx={{ mb: 1.4, cursor: "pointer", color: "#333", px: 1 }}
          >
            {cat}
          </Typography>
        ))}
        <Box sx={{ mt: 2, px: 1 }}>
          <Typography
            variant="body2"
            sx={{
              color: "#fff",
              backgroundColor: "#0f62fe",
              fontWeight: 500,
              py: 1,
              px: 2,
              display: "inline-block",
              borderRadius: "3px",
              cursor: "pointer",
            }}
          >
            View all products →
          </Typography>
        </Box>
      </Box>

      {/* Right Panel */}
      <Box
        sx={{
          width: "70%",
          overflowY: "auto",
          px: { xs: 2, md: 3 },
          py: 2,
        }}
      >
        <Typography variant="h6" gutterBottom>
          Featured
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Grid container spacing={2}>
          {featured.map((item, idx) => (
            <Grid key={idx} item xs={12} sm={6} md={4}>
              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
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

export default ProductItems;
