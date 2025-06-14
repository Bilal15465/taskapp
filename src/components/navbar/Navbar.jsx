import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Divider,
  Drawer,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import ProductItems from "../navButtons/ProductItems";
import SolutionItems from "../navButtons/SolutionItems";
import SupportItems from "../navButtons/SupportItems";


const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuToggle = (menuName) => {
    setActiveMenu((prev) => (prev === menuName ? null : menuName));
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const menuItems = ["Products", "Solutions", "Consulting", "Support", "Think"];

  const renderMobileMenu = (
    <Drawer
      anchor="left"
      open={mobileMenuOpen}
      onClose={handleMobileMenuToggle}
      sx={{
        "& .MuiDrawer-paper": {
          width: "250px",
          backgroundColor: "#fff",
        },
      }}
    >
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            px: 1,
            py: 1,
            borderBottom: "1px solid #ccc",
          }}
        >
          <IconButton onClick={handleMobileMenuToggle}>
            <CloseIcon />
          </IconButton>
        </Box>
        {menuItems.map((menu, idx) => (
          <Box
            key={idx}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: 2,
              py: 1.5,
              borderBottom: "1px solid #ccc",
              cursor: "pointer",
            }}
          >
            {menu}
            {["Products", "Solutions", "Support"].includes(menu) && (
              <ArrowRightOutlinedIcon fontSize="small" />
            )}
          </Box>
        ))}
      </Box>
    </Drawer>
  );

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#fff",
        color: "#000",
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <Toolbar sx={{ height: 48, justifyContent: "space-between", px: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {isMobile && (
            <IconButton onClick={handleMobileMenuToggle}>
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" sx={{ mr: 2 }}>
            <img
              src="/Images/ibmLogo.jpg"
              alt="IBM Logo"
              style={{ height: 24, width: 125, objectFit: "cover" }}
            />
          </Typography>
          <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />

          {!isMobile && (
            <Box sx={{ display: "flex", gap: 2 }}>
              {menuItems.map((menu) => (
                <Box key={menu} sx={{ position: "relative" }}>
                  <Button
                    onClick={() =>
                      ["Consulting", "Think"].includes(menu)
                        ? null
                        : handleMenuToggle(menu)
                    }
                    sx={{
                      color: "#565f63",
                      fontSize: "1rem",
                      textTransform: "none",
                      "&:hover": { color: "#000" },
                    }}
                  >
                    {menu}
                    {!["Consulting", "Think"].includes(menu) &&
                      (activeMenu === menu ? (
                        <ArrowDropUpIcon fontSize="small" />
                      ) : (
                        <ArrowDropDownIcon fontSize="small" />
                      ))}
                  </Button>
                  {menu === "Products" && activeMenu === "Products" && <ProductItems/>}
                  {menu === "Solutions" && activeMenu === "Solutions" && <SolutionItems/>}
                  {menu === "Support" && activeMenu === "Support" && <SupportItems/>}
                </Box>
              ))}
            </Box>
          )}
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <PermIdentityOutlinedIcon />
          </IconButton>
        </Box>
      </Toolbar>

      {renderMobileMenu}
    </AppBar>
  );
};

export default Navbar;
