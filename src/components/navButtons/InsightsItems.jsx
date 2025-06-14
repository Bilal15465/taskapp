import React from "react";
import { Box, Typography } from "@mui/material";

const industries = [
  "Artificial Intelligence",
  "Digital Transformation",
  "Finance & Risk",
  "Operations & Supply chain",
  "Sales & Marketing ",
  "Talent & Skills",
  "Technology & Security",
  "IBM institute for Business Value"
];

const InsightsItems = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "48px",
        left: "10%",
        width: "15vw",
        height: "300px",
        zIndex: 1300,
        backgroundColor: "#fff",
        boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
        display: "flex",
        px: 4,
        py: 3,
      }}
    >
      <Box>
        {/* <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
          
        </Typography> */}
        {industries.map((industry, idx) => (
          <Typography
            key={idx}
            variant="body2"
            sx={{
              mb: 1.6,
              cursor: "pointer",
              color: "#333",
              backgroundColor: idx === 0 ? "#f4f4f4" : "transparent",
              px: 1,
              py: 0.5,
              borderRadius: "4px",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            {industry}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default InsightsItems;
