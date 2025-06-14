import React, { useState, useRef } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { styled } from "@mui/material/styles";
import CapabilitiesItems from "../navButtons/CapabilitiesItems";
import IndustriesItems from "../navButtons/IndustriesItems";
import InsightsItems from "../navButtons/InsightsItems";
import StrategicPartnersItems from "../navButtons/StrategicPartnersItems";

const ContactButton = styled(Button)({
  backgroundColor: "#0062ff",
  color: "#fff",
  textTransform: "none",
  padding: "16px 20px",
  width: "100%",
  justifyContent: "space-between",
  borderRadius: 0,
  "&:hover": {
    backgroundColor: "#0050e6",
  },
});

const CustomAppBar = styled(AppBar)(({ isFirstNavVisible }) => ({
  backgroundColor: "#fff",
  boxShadow: "none",
  borderTop: "1px solid #e0e0e0",
  width: "100%",
  zIndex: 1100,
  top: 0,
  position: isFirstNavVisible ? "absolute" : "fixed",
  marginTop: isFirstNavVisible ? "64px" : 0,
  transition: "all 0.3s ease-in-out",
}));

const SecondNavbar = ({ isFirstNavVisible }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const insightsButtonRef = useRef(null);

  const handleDropdownToggle = (menuName, ref) => {
    if (openDropdown === menuName) {
      setOpenDropdown(null);
    } else {
      if (ref?.current) {
        const rect = ref.current.getBoundingClientRect();
        setDropdownPosition({ top: rect.bottom, left: rect.left });
      }
      setOpenDropdown(menuName);
    }
  };

  const menuItems = [
    { text: "Overview", link: "#" },
    { text: "Capabilities", link: "#", hasDropdown: true },
    { text: "Industries", link: "#", hasDropdown: true },
    { text: "Strategic Partners", link: "#", hasDropdown: true },
    { text: "Insights", link: "#", hasDropdown: true },
    { text: "Careers", link: "#" },
  ];

  return (
    <>
      <CustomAppBar position="fixed" isFirstNavVisible={isFirstNavVisible}>
        <Toolbar
          disableGutters
          sx={{ flexDirection: "column", width: "100%", p: 0 }}
        >
          {isMobile ? (
            <Box sx={{ width: "100%" }}>
              <Button
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                sx={{
                  width: "100%",
                  color: "#000",
                  justifyContent: "space-between",
                  textTransform: "none",
                  fontWeight: "bold",
                  borderBottom: "3px solid #0062ff",
                  fontSize: "1rem",
                  mt: -0.5,
                  px: 2,
                  py: 2,
                }}
              >
                Consulting
                {isDropdownOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
              </Button>

              {isDropdownOpen && (
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    borderTop: "1px solid #e0e0e0",
                  }}
                >
                  {menuItems.map((item) => (
                    <Button
                      key={item.text}
                      href={item.link}
                      sx={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "space-between",
                        textTransform: "none",
                        fontSize: "1rem",
                        px: 2,
                        py: 1.5,
                        color: "#000",
                        borderBottom: "1px solid #f0f0f0",
                        "&:hover": {
                          backgroundColor: "rgba(0,0,0,0.04)",
                        },
                      }}
                    >
                      {item.text}
                      {item.hasDropdown && <ArrowDropDownIcon />}
                    </Button>
                  ))}
                  <ContactButton href="#">
                    Contact IBM Consulting →
                  </ContactButton>
                </Box>
              )}
            </Box>
          ) : (
            <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
              <Button
                color="inherit"
                sx={{
                  color: "#000",
                  px: 1,
                  marginLeft: "34px",
                  marginRight: "10px",
                  fontSize: "1rem",
                  textTransform: "none",
                  fontWeight: "bold",
                  borderBottom: "3px solid #0062ff",
                }}
              >
                Consulting
              </Button>

              {[
                "Capabilities",
                "Industries",
                "Strategic Partners",
                "Insights",
              ].map((menuName) => {
                const isInsights = menuName === "Insights";
                return (
                  <Button
                    key={menuName}
                    ref={isInsights ? insightsButtonRef : null}
                    onClick={() =>
                      handleDropdownToggle(
                        menuName,
                        isInsights ? insightsButtonRef : null
                      )
                    }
                    sx={{
                      color: openDropdown === menuName ? "#000" : "#565f63",
                      px: 1,
                      fontSize: "1rem",
                      textTransform: "none",
                      fontWeight:
                        openDropdown === menuName ? "bold" : "normal",
                      "&:hover": {
                        backgroundColor: "transparent",
                        color: "#000",
                      },
                    }}
                  >
                    {menuName}
                    {openDropdown === menuName ? (
                      <ArrowDropUpIcon fontSize="small" />
                    ) : (
                      <ArrowDropDownIcon fontSize="small" />
                    )}
                  </Button>
                );
              })}

              <Button
                color="inherit"
                sx={{
                  color: "#565f63",
                  px: 1,
                  fontSize: "1rem",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "#000",
                  },
                }}
              >
                Careers
              </Button>

              <Box sx={{ marginLeft: "auto" }}>
                <ContactButton href="#">Contact IBM Consulting</ContactButton>
              </Box>
            </Box>
          )}
        </Toolbar>
      </CustomAppBar>

      {/* Dropdowns - Absolute positioned based on button */}
      {openDropdown === "Capabilities" && (
        <Box sx={{ position: "relative", zIndex: 1200 }}>
          <CapabilitiesItems />
        </Box>
      )}
      {openDropdown === "Industries" && (
        <Box sx={{ position: "relative", zIndex: 1200 }}>
          <IndustriesItems />
        </Box>
      )}
      {openDropdown === "Insights" && (
        <Box
          sx={{
            position: "absolute",
            left: dropdownPosition.left,
            zIndex: 1300,
          }}
        >
          <InsightsItems />
        </Box>
      )}
      {openDropdown === "Strategic Partners" && (
        <Box
          sx={{
           position: "relative",
            // left: dropdownPosition.left,
            zIndex: 1300,
          }}
        >
          <StrategicPartnersItems />
        </Box>
      )}
    </>
  );
};

export default SecondNavbar;
