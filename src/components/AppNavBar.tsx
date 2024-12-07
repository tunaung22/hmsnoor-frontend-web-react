import { MouseEvent, useState } from "react";
import { NavLink, useLocation } from "react-router";
import {
  AppBar,
  Avatar,
  Box,
  ButtonBase,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ReceiptIcon from "@mui/icons-material/Receipt";
import InventoryIcon from "@mui/icons-material/Inventory";
import CategoryIcon from "@mui/icons-material/Category";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import MenuIcon from "@mui/icons-material/Menu";
import "./AppNavBar.css";
import { AppLogo } from "./AppLogo";

// const localTheme = localStorage.getItem("theme");

// type NavMenuItems = Required<MenuProps>["items"][number];

// const themeItems: MenuProps["items"] = [
//   { key: "light", label: "Light" },
//   { key: "dark", label: "Dark" },
//   { key: "colorful", label: "Colorful" },
//   { key: "candy", label: "Candy" },
// ];

const profileMenuItems = [
  { key: "profile", label: "Profile" },
  { key: "account", label: "Account" },
  { key: "", label: "Logout" },
];

const navMenuItems = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <DashboardIcon />,
  },
  {
    key: "sales",
    label: "Sale Invoices",
    path: "/sales",
    icon: <ReceiptIcon />,
  },
  {
    key: "products",
    label: "Products",
    path: "/products",
    icon: <InventoryIcon />,
  },
  {
    key: "category",
    label: "Category",
    path: "/category",
    icon: <CategoryIcon />,
  },
  {
    key: "currency",
    label: "Currency",
    path: "/currency",
    icon: <MonetizationOnIcon />,
  },
];

function AppNavbar() {
  const location = useLocation();
  // Active Theme State
  // const [activeTheme, setActiveTheme] = useState(localTheme);
  // Current PATH State
  // const [current, setCurrent] = useState("");
  // const [setSelectedMenuItemIndex] = useState(location);

  // useEffect(() => {
  //   const currentPath = location.pathname;
  //   setCurrent(currentPath);
  // }, [location.pathname]);

  // const onClick: MenuProps["onClick"] = (e) => {
  //   // console.log("click ", e);
  //   setCurrent(e.key);
  // };
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const theme = useTheme();

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleMenuItemClick = () => {
    // setSelectedMenuItemIndex(index);
    handleCloseNavMenu();
  };

  const primaryLight = theme.palette.primary.light;
  const primaryMain = theme.palette.primary.main;
  const primaryDark = theme.palette.primary.dark;

  return (
    <>
      <AppBar position="static" sx={{ background: primaryDark }}>
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            variant="dense"
            sx={{
              minHeight: "48px",
              maxHeight: "64px",
            }}
          >
            <AppLogo
              sx={{
                color: primaryLight,
                stroke: primaryMain,
                display: { xs: "none", md: "flex" },
                mr: 1,
              }}
            />
            <Typography
              variant="h6"
              noWrap
              // component="a"
              // href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
              className="app-branding"
              style={{ userSelect: "none" }}
            >
              HMSNOOR
            </Typography>
            {/* </div> */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {navMenuItems.map((nav, index) => (
                  <MenuItem
                    key={`${index}${nav.key}`}
                    onClick={() => handleMenuItemClick()}
                    sx={{
                      color: location.pathname === nav.path ? "#fff" : ``,
                      background:
                        location.pathname === nav.path
                          ? primaryMain
                          : `inherit`,
                      "&:hover": {
                        color: location.pathname === nav.path ? "#fff" : "#fff",
                        background:
                          location.pathname === nav.path
                            ? primaryMain
                            : primaryMain,
                      },
                    }}
                  >
                    <Typography
                      component={NavLink}
                      to={nav.path}
                      color="inherit"
                      sx={{
                        textDecoration: "none",
                        textAlign: "center",
                      }}
                    >
                      {nav.icon}
                      <Typography variant="button" sx={{ paddingLeft: ".5em" }}>
                        {nav.label}
                      </Typography>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* <AdbIcon  /> */}
            <AppLogo
              sx={{
                // color: "#0182a3",
                color: primaryLight,
                stroke: primaryMain,
                display: { xs: "flex", md: "none" },
                mr: 1,
              }}
            />
            <Typography
              variant="h5"
              noWrap
              // component="a"
              // href="#app-bar-with-responsive-menu"

              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              HMSNOOR
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {navMenuItems.map((nav, index) => (
                <ButtonBase key={index} centerRipple={true}>
                  <Typography
                    component={NavLink}
                    to={nav.path}
                    variant="body1"
                    noWrap
                    color="inherit"
                    sx={{
                      textDecoration: "none",
                      // borderBottom: `.15em solid #fff`,
                      color:
                        location.pathname === nav.path
                          ? primaryLight
                          : "inherit",
                      "&:hover": {
                        color: "#fff",
                        background: primaryMain,
                      },
                      paddingY: ".35em",
                      paddingX: "0.5em",
                      marginX: ".5em",
                      display: "flex",
                      borderTopLeftRadius: ".1em",
                      borderTopRightRadius: ".1em",
                      borderBottomLeftRadius: ".1em",
                      borderBottomRightRadius: ".1em",
                      marginY: "0em",
                    }}
                  >
                    {nav.icon}
                    <Typography variant="button" sx={{ paddingLeft: ".5em" }}>
                      {nav.label}
                    </Typography>
                  </Typography>
                </ButtonBase>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
                    sx={{
                      border: `0.1em solid ${primaryLight}`,
                    }}
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {profileMenuItems.map((item) => (
                  <MenuItem
                    id="profile-menu-item"
                    className="profile-menu-item"
                    key={item.key}
                    onClick={handleCloseUserMenu}
                  >
                    <Typography sx={{ textAlign: "center" }}>
                      {item.label}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export { AppNavbar };
