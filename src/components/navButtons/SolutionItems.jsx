import React from "react";
import { Box, Typography, Grid, Divider } from "@mui/material";

const solutionCategories = [
  "Automation", "Data & AI", "Industry", "Infrastructure", "Security", "Sustainability"
];

const automationSolutions = [
  { title: "AIOps", desc: "Enable proactive, continuous application performance management" },
  { title: "Application delivery", desc: "Modernize applications and deliver new cloud-native applications" },
  { title: "Application performance management", desc: "Bridge observability and automated resource management" },
  { title: "Business automation", desc: "Deliver intelligent automation solutions quickly with low-code" },
  { title: "Cloud cost management", desc: "Optimize performance at the lowest cost and align business value" },
  { title: "Decision management", desc: "Model, manage and automate repeatable business processes" },
  { title: "DevOps automation", desc: "Automate your software delivery process" },
  { title: "Enterprise content management", desc: "Accelerate information management and governance processes" },
  { title: "FinOps", desc: "Manage the variable economics of cloud infrastructure" },
  { title: "Integration", desc: "Connect applications and systems to unlock critical data" },
  { title: "iPaaS", desc: "Deliver connectivity across all your apps and data" },
  { title: "License compliance", desc: "Reduce compliance risks with application resource management" },
  { title: "Networking", desc: "Automate network configuration, provisioning and troubleshooting" },
  { title: "Workflow", desc: "Increase productivity by streamlining processes and tasks" },
];

const SolutionItems = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "48px",
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
          Automation
        </Typography>
        {solutionCategories.map((cat, idx) => (
          <Typography
            key={idx}
            variant="body2"
            sx={{ mb: 1.4, cursor: "pointer", color: "#333", px: 1 }}
          >
            {cat}
          </Typography>
        ))}
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
          Automation
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Grid container spacing={2}>
          {automationSolutions.map((item, idx) => (
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

export default SolutionItems;
