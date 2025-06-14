import React, { useState, useEffect } from "react";
import {
  Button,
  Typography,
  Grid,
  Box,
  Link,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";

const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', 'Roboto', 'Helvetica', 'Arial', sans-serif",
  },
});

const HeroBackground = styled(Box)({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100vh",
  backgroundImage: `url("/Images/bgTheme.jpg")`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  zIndex: -2,
});

const HeroOverlay = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  zIndex: -1,
});

const Card = styled(Box)(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  color: "#fff",
  padding: theme.spacing(4),
  borderRadius: 8,
  boxShadow: "none",
  border: "1px solid rgba(255,255,255,0.08)",
  minWidth: 260,
  maxWidth: 320,
  margin: theme.spacing(1),
}));

const cardData = [
  {
    title: "Accelerate long-term growth with IIGS's",
    desc: `We design strategies to cut costs, boost efficiency, and manage risks, offering solutions from logistics to procurement for sustainable success.`,
    color: "#ff5722",
    link: "Let's Co-Create",
  },
  {
    title: "Proactive, innovative, and results-focused",
    desc: `We build impactful partnerships with global leaders. By teaming up, we fast-track success, spark innovation.`,
    color: "#FF9800",
    link: "Call to explore global sourcing options",
  },
  {
    title: "Driving success through strategic partnerships",
    desc: `We collaborate to accelerate innovation, and transform your business globally by aligning expertise to meet your unique sourcing needs.`,
    color: "#F44336",
    link: "Partner for Success",
  },
];

const HeroSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sectionHeight = window.innerHeight; // Height of one HeroSection
      setIsScrolled(scrollPosition > sectionHeight); // Change color when scrolling past first section
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          position: "relative",
          minHeight: "100vh",
          width: "100vw",
          overflow: "hidden",
        }}
      >
        <HeroBackground />
        <HeroOverlay />

        <Grid
          container
          sx={{ minHeight: "100vh", position: "relative", zIndex: 1 }}
        >
          <Grid
            item
            xs={2}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                height: "100%",
                marginLeft: "35px",
                position: "fixed",
                top: "50%",
                transform: "translateY(-50%)",
                left: 0,
              }}
            >
              <Box
                sx={{
                  width: 6,
                  height: 50,
                  backgroundColor: isScrolled ? "#555" : "#1976d2",
                  borderRadius: 0,
                  transition: "background-color 0.3s ease",
                }}
              />
              <Box
                sx={{
                  width: 6,
                  height: 50,
                  backgroundColor: isScrolled ? "#1976d2" : "#555",
                  borderRadius: 0,
                  transition: "background-color 0.3s ease",
                }}
              />
            </Box>
          </Grid>

          <Grid item xs={10}>
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              sx={{ minHeight: "100vh", px: { xs: 2, md: 8 } }}
              spacing={2}
            >
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: { xs: "center", md: "flex-start" }, // Centered on mobile
                  alignItems: "center", // Centered on mobile
                }}
              >
                <Box sx={{ maxWidth: { xs: "100%", md: 600 }, textAlign: { xs: "center", md: "left" } }}>
                  <Typography variant="h6" sx={{ color: "#fff", mb: 1 }}>
                    SMARTER, FASTER, AND MORE RELIABLE
                  </Typography>
                  <Typography
                    variant="h3"
                    sx={{
                      color: "#fff",
                      fontWeight: 700,
                      mb: 2,
                      lineHeight: 1.1,
                      fontSize: { xs: "2rem", md: "3rem" }, // Responsive font size
                    }}
                  >
                    Streamline procurement and enhance your supply chain with
                    IIGS
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2, justifyContent: { xs: "center", md: "flex-start" } }}>
                    <Button
                      variant="contained"
                      endIcon={<ArrowRightOutlinedIcon />}
                      sx={{
                        background: "#ff5722",
                        color: "#fff",
                        fontWeight: 500,
                        px: 2,
                        py: 1,
                        mr: 2,
                        "&:hover": { background: "#F36434" },
                        fontSize: { xs: "0.875rem", md: "1rem" }, // Responsive font size
                      }}
                    >
                      EXPLORE COST-EFFECTIVE SOURCING OPTIONS
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{
                        color: "#fff",
                        border: "none",
                        px: 2,
                        py: 1,
                        fontSize: { xs: "0.875rem", md: "1rem" }, // Responsive font size
                      }}
                    >
                      BOOK A MEETING
                    </Button>
                  </Box>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "#fff",
                      fontWeight: 400,
                      fontSize: { xs: "1rem", md: "1.1rem" },
                      mb: 2,
                      mt: { xs: 10, md: 20 }, // Adjusted margin for mobile
                      textAlign: "center",
                    }}
                  >
                    Seamless Solutions, Endless Possibilities
                  </Typography>
                </Box>
              </Grid>

              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-end" },
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    width: { xs: 200, md: 600 }, 
                    height: { xs: 200, md: 600 },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center", 
                    ml:7
                  }}
                >
                  <img
                    src="/Images/globe.png"
                    alt="Globe"
                    style={{
                      width: { xs: "200px", md: "640px" }, // Responsive width
                      height: "100%",
                      objectFit: "contain",
                      filter: "drop-shadow(0 8px 32px rgba(0,0,0,0.5))",
                      transform: "scaleX(-1)",
                    }}
                  />
                </Box>
              </Grid>
            </Grid>

            {/* Info Cards */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: { xs: "center", md: "flex-start" }, // Centered on mobile
                alignItems: { xs: "center", md: "flex-start" },
                mt: { xs: 4, md: -8 },
                px: { xs: 2, md: 0 },
                width: "90%",
                position: "relative",
                zIndex: 2,
                mt: 5,
                mb:5,
                ml: { xs: 0, md: 12 }, // Removed margin on mobile
              }}
            >
              {cardData.map((card, i) => (
                <Card key={i}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    {card.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ mb: 2, color: "#d0d0d0" }}
                  >
                    {card.desc}
                  </Typography>
                  <Link
                    href="#"
                    underline="none"
                    sx={{
                      fontWeight: 500,
                      color: card.color,
                      fontSize: "0.95rem",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    {card.link}
                  </Link>
                </Card>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default HeroSection;