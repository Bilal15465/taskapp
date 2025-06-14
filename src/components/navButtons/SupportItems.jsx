import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const solutionColumns = [
  {
    title: "What's New",
    links: [],
  },
  {
    title: "Documentation",
    links: [
      "All product documentation",
      "IBM Cloud documentation",
      "IBM Redbooks",
    ],
  },
  {
    title: "Support",
    links: [
      "Download fixes, updates & drivers",
      "Download licensed software - Passport Advantage",
      "IBM Software Licensing",
      "Open a case",
      "View more",
      "View support plans",
      "View your cases",
    ],
  },
  {
    title: "Technology Lifecycle Services",
    links: [
      "Enterprise networking and security",
      "Servers and storage",
      "Software",
    ],
  },
  {
    title: "Community",
    links: [],
  },
  {
    title: "Developer",
    links: [
      "Call for Code",
      "Generative AI",
      "Open Source @ IBM",
      "Products",
      "Technologies",
    ],
  },
  {
    title: "IBM Cloud platform support",
    links: [],
  },
  {
    title: "Implementation",
    links: ["Expert Labs"],
  },
  {
    title: "Training",
    links: [
      "Courses",
      "Digital learning subscriptions",
      "Learning paths & collections",
      "Professional certifications",
    ],
  },
];

const SupportItems = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "48px",
        left: "50%", // Center horizontally
        transform: "translateX(-50%)", // Adjust for exact center
        width: "80vw", // You can adjust width as needed
        zIndex: 1300,
        backgroundColor: "#fff",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        py: 4,
      }}
    >
      <Grid container spacing={4} sx={{ px: 4 }}>
        {solutionColumns.map((col, idx) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 600, mb: 1, display: "flex", alignItems: "center" }}
            >
              {col.title}
              {col.links.length === 0 && (
                <span style={{ marginLeft: 6 }}>→</span>
              )}
            </Typography>
            {col.links.length > 0 &&
              col.links.map((link, i) => (
                <Typography
                  key={i}
                  variant="body2"
                  sx={{
                    color: "#444",
                    mb: 0.8,
                    cursor: "pointer",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  {link}
                </Typography>
              ))}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SupportItems;
