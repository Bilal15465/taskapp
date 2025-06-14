import React from "react";
import { Grid, Typography, Box, Paper, Link } from "@mui/material";
import { styled } from "@mui/material/styles";

const Card = styled(Paper)(({ theme }) => ({
  background: 'rgba(30, 40, 60, 0.6)',
  color: '#fff',
  padding: theme.spacing(4),
  height: '100%',
  borderRadius: 16,
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
  backdropFilter: 'blur(8px)',
  WebkitBackdropFilter: 'blur(8px)',
  border: '1px solid rgba(255,255,255,0.18)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}));

const cardsData = [
  {
    title: "Accelerate long-term growth with IIGS's",
    description:
      "We design strategies to cut costs, boost efficiency, and manage risks, offering solutions from logistics to procurement for sustainable success.",
    linkText: "Let's Co-Create",
    linkColor: "#ff5722",
  },
  {
    title: "Proactive, innovative, and results-focused",
    description:
      "We build impactful partnerships with global leaders. By teaming up, we fast-track success, spark innovation, and revolutionize global sourcing strategies.",
    linkText: "Call to explore global sourcing options",
    linkColor: "#FF9800",
  },
  {
    title: "Driving success through strategic partnerships",
    description:
      "We collaborate to accelerate innovation, drive results, and transform your business globally by aligning expertise to meet your unique sourcing needs.",
    linkText: "Partner for Success",
    linkColor: "#F44336",
  },
];

const InfoCardsSection = () => {
  return (
    <Box sx={{ px: { xs: 2, md: 8 }, py: 6 }}>
      <Grid container spacing={3}>
        {cardsData.map((card, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card>
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, fontFamily: "Poppins", mb: 1 }}
              >
                {card.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontFamily: "Poppins", mb: 2, color: "#d0d0d0" }}
              >
                {card.description}
              </Typography>
              <Link
                href="#"
                underline="none"
                sx={{
                  fontWeight: 500,
                  color: card.linkColor,
                  fontFamily: "Poppins",
                  fontSize: "0.95rem",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                {card.linkText} &gt;&gt;
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>

    </Box>
  );
};

export default InfoCardsSection;