import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
  Hidden,
  useMediaQuery,
  Button,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "./images/logo.webp"; // Adjust the path to your actual logo file

const theme = createTheme();

function CustomAppBar() {
  const customTheme = useTheme();
  const isMobile = useMediaQuery(customTheme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        {/* Navbar superiore - visibile da md in su */}
        <Hidden smDown>
          <AppBar
            position="static"
            style={{ backgroundColor: "white", position: 'relative' }}
          >
            <Toolbar>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  paddingLeft: "20%", // Adjust this as needed
                  paddingRight: "15px", // Adjust this as needed
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={Logo}
                    alt="Logo"
                    style={{
                      height: "140px",
                      marginRight: "20px",
                      position: "absolute",
                      top: 10,
                      left: 20,
                      borderRadius: "4%", // Adjust the percentage as needed
                    }}
                  />
                  <Typography variant="h6" component="div">
                    Menu
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Button sx={{ ml: 2 }}>Button 1</Button>
                  <Button
                    style={{ size: "medium",
                      backgroundColor: customTheme?.palette?.primary?.main || "black",
                      color: "white",
                    }}
                    size="small"
                    variant="outlined"
                    sx={{ ml: 2 }}
                  >
                    Button 2
                  </Button>
                  <Button
                    style={{ size: "large",
                      backgroundColor: customTheme?.palette?.primary?.main || "black",
                      color: "white",
                      
                    }}
                    size="small"
                    variant="outlined"
                    sx={{ ml: 2 }}
                  >
                    Button 3
                  </Button>
                </Box>
              </Box>
            </Toolbar>
          </AppBar>
        </Hidden>

        {/* Navbar inferiore con Drawer - visibile da sm in giù */}
        <Hidden mdUp>
          {isMobile && (
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={toggleDrawer}
              variant="temporary"
              ModalProps={{
                keepMounted: true,
              }}
            >
              <List>
                <ListItem button onClick={toggleDrawer}>
                  <ListItemText primary="Button 1" />
                </ListItem>
                <ListItem button onClick={toggleDrawer}>
                  <ListItemText primary="Button 2" />
                </ListItem>
                <ListItem button onClick={toggleDrawer}>
                  <ListItemText primary="Button 3" />
                </ListItem>
              </List>
            </Drawer>
          )}

          {/* Icona per aprire il Drawer su schermi mobili */}
          {isMobile && (
            <AppBar
              position="static"
              style={{
                backgroundColor: customTheme?.palette?.primary?.main || "white",
                position: 'relative',
              }}
            >
              <Toolbar>
                <Hidden mdUp implementation="css">
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={toggleDrawer}
                    style={{ color: "black" }}
                  >
                    <MenuIcon />
                  </IconButton>
                </Hidden>
                {isMobile && (
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      flexGrow: 1,
                      [customTheme.breakpoints.down("sm")]: {
                        display: "block",
                      },
                    }}
                  >
                    Menu
                  </Typography>
                )}
              </Toolbar>
            </AppBar>
          )}
        </Hidden>
      </>
    </ThemeProvider>
  );
}

export default CustomAppBar;

