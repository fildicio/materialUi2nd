import React from "react";
import {
  AppBar,
  Toolbar,
  Link,
  Container,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from "@mui/material";

const theme = createTheme();

function Links() {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // Return null if it's a small screen (sm or xs)
  if (isSmallScreen) {
    return null;
  }

  const ballStyle = {
    content: "''",
    position: "absolute",
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    background: "white",
    top: "50%",
    transform: "translateY(-50%)",
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "primary",
          color: "black",
        }}
      >
        <Container>
          <Toolbar sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Link href="#" color="inherit" sx={{ mx: 2, color: "white" }}>
              Link 1
            </Link>
            <Link
              href="#"
              color="inherit"
              sx={{
                mx: 2,
                color: "white",
                position: "relative",
              }}
            >
              Link 2
              <span
                style={{
                  ...ballStyle,
                  left: "-12px", // Adjust this value to position the left ball
                }}
              ></span>
              <span
                style={{
                  ...ballStyle,
                  // Adjust this value to position the right ball
                  marginLeft: "5px", // Adjust this value to control the distance between balls
                  marginRight: "5px", // Set this value to be the same as marginLeft
                }}
              ></span>
            </Link>
            <Link href="#" color="inherit" sx={{ mx: 2, color: "white" }}>
              Link 3
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default Links;




