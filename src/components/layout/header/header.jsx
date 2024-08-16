"use client";
import React, { useState } from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Container } from "@mui/material";
import logo from "../../../../public/img/logo-removebg.png";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const dataSubMenu = [
  {
    title: "Sơ cấp 1",
    route: "so-cap-1",
  },
  {
    title: "Sơ cấp 2",
    route: "so-cap-2",
  },
  {
    title: "Luyện N5 cấp tốc",
    route: "luyen-n5-cap-toc",
  },
  {
    title: "Luyện N4 cấp tốc",
    route: "luyen-n4-cap-toc",
  },
  {
    title: "Luyện thi N3",
    route: "luyen-thi-n3",
  },
  {
    title: "Luyện thi vào 10",
    route: "luyen-thi-vao-10",
  },
  {
    title: "Luyện thi đại học",
    route: "luyen-thi-dai-hoc",
  },
  {
    title: "Lớp tiếng nhật trẻ em",
    route: "lop-tieng-nhat-tre-em",
  },
];

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [submenuAnchorEl, setSubmenuAnchorEl] = useState(null);
  const [submenuAnchorEl2, setSubmenuAnchorEl2] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSubmenuAnchorEl(null);
    setSubmenuAnchorEl2(null);
  };

  const handleSubmenuOpen = (event) => {
    setSubmenuAnchorEl(event.currentTarget);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };
  const drawer = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem component={Link} href="/">
          <ListItemText primary="Trang chủ" />
        </ListItem>
        <ListItem component={Link} href="/gioi-thieu">
          <ListItemText primary="Giới thiệu" />
        </ListItem>
        <ListItem component={Link} href="/lien-he">
          <ListItemText primary="Liên hệ" />
        </ListItem>
        <ListItem component={Link} href="/giang-vien">
          <ListItemText primary="Giảng viên" />
        </ListItem>
        <Accordion sx={{ boxShadow: "none" }}>
          <AccordionSummary
            aria-controls={`panelf-content`}
            id={`panel-header`}
          >
            Liên tục mở lớp học
            <KeyboardArrowDownIcon />
          </AccordionSummary>
          <AccordionDetails>
            {dataSubMenu.map((item) => (
              <MenuItem
                component={Link}
                href={`/lien-tuc-mo-lop-hoc/${item.route}`}
                key={item.title}
                sx={{ color: "#213782" }}
              >
                {item.title}
              </MenuItem>
            ))}
          </AccordionDetails>
        </Accordion>

        <ListItem>
          <ListItemText primary="Thư Viện" />
        </ListItem>
        <ListItem component={Link} href="/services">
          <Button
            sx={{
              borderRadius: "20px",
              padding: "5px 20px",
              backgroundColor: "#241d51",
            }}
            href="/dang-ky"
            variant="contained"
          >
            Đăng ký
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "white",
        color: "#241d51",
        paddingRight: "0px!important",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
              display: { xs: "block", md: "none" },
              ml: "auto",
              position: "absolute",
              right: " 0px",
            }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component={Link} href="/" variant="h5" sx={{ flexGrow: 1 }}>
            <img
              src={logo.src}
              alt="Logo trung tâm ngoại ngữ Taiyo"
              style={{ height: "100px", width: "auto" }}
            />
          </Typography>

          <Box
            sx={{
              display: {
                xs: "none",
                md: "block",
              },
            }}
          >
            <Button
              sx={{ fontSize: "1rem", fontWeight: "bold" }}
              color="inherit"
              component={Link}
              href="/"
            >
              Trang chủ
            </Button>
            <Button
              sx={{ fontSize: "1rem", fontWeight: "bold" }}
              color="inherit"
              component={Link}
              href="/gioi-thieu"
            >
              Giới thiệu
            </Button>
            <Button
              sx={{ fontSize: "1rem", fontWeight: "bold" }}
              color="inherit"
              component={Link}
              href="/giang-vien"
            >
              Giảng Viên
            </Button>
            <Button
              sx={{ fontSize: "1rem", fontWeight: "bold" }}
              color="inherit"
              component={Link}
              href="/lien-he"
            >
              Liên hệ
            </Button>
            <Button
              sx={{ fontSize: "1rem", fontWeight: "bold" }}
              color="inherit"
              onClick={handleMenuOpen}
            >
              Liên tục mở lớp học
              <KeyboardArrowDownIcon />
            </Button>
            <Button
              sx={{ fontSize: "1rem", fontWeight: "bold" }}
              color="inherit"
              href="/thu-vien"
            >
              Thư Viện
            </Button>
            <Button
              sx={{
                borderRadius: "20px",
                padding: "6px 25px",
                backgroundColor: "#241d51",
                marginLeft: "10px",
              }}
              href="/dang-ky"
              variant="contained"
            >
              Đăng ký
            </Button>
          </Box>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            {dataSubMenu.map((item) => (
              <MenuItem
                component={Link}
                href={`/lien-tuc-mo-lop-hoc/${item.route}`}
                key={item.title}
                sx={{ color: "#213782" }}
                onClick={handleMenuClose}
              >
                {item.title}
              </MenuItem>
            ))}
          </Menu>

          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
          >
            {drawer}
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
