import React from "react";
import { Box, Typography, Divider } from "@mui/material";

const leftPartners = ["Adobe", "AWS", "Microsoft", "Oracle"];
const rightPartners = ["Palo Alto Networks", "Red Hat", "Salesforce", "SAP"];

const StrategicPartnersItems = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "64px",
        left: "10%",
        width: "40vw",
        height: "300px",
        zIndex: 1300,
        backgroundColor: "#fff",
        boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Partner Names */}
      <Box sx={{ display: "flex", px: 4, py: 3, flex: 1 }}>
        <Box sx={{ flex: 1 }}>
          {leftPartners.map((partner, idx) => (
            <Typography
              key={idx}
              variant="body2"
              sx={{
                mb: 1.6,
                cursor: "pointer",
                color: "#333",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              {partner}
            </Typography>
          ))}
        </Box>

        <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />

        <Box sx={{ flex: 1 }}>
          {rightPartners.map((partner, idx) => (
            <Typography
              key={idx}
              variant="body2"
              sx={{
                mb: 1.6,
                cursor: "pointer",
                color: "#333",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              {partner}
            </Typography>
          ))}
        </Box>
      </Box>

      {/* Bottom CTA */}
      <Box
        sx={{
          borderTop: "1px solid #e0e0e0",
          px: 4,
          py: 2,
          backgroundColor: "#fafafa",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: "#0f62fe",
            fontWeight: 500,
            cursor: "pointer",
            display: "inline-block",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          See all consulting partners →
        </Typography>
      </Box>
    </Box>
  );
};

export default StrategicPartnersItems;
