import React from "react";
import { Card, CardContent, Typography, Button, useMediaQuery, useTheme, Stack } from "@mui/material";
import { blue } from "@mui/material/colors";

function CardComponentOne({ width, padding }) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(768));

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: isSmallScreen ? "5%" : 0,
  };

  const cardStyle = {
    width: isSmallScreen ? "100%" : width || "70%",
    mb: isSmallScreen ? 3.5 : 0,
    p: padding !== undefined ? padding : isSmallScreen ? 2 : 2,
    borderRadius: 4,
  };

  return (
    <div style={containerStyle}>
      <Stack
  direction={isSmallScreen ? "column" : "row"}
  alignItems="center"
  justifyContent="center"
  spacing={isSmallScreen ? 2 : 3.5}
  style={{
    marginTop: isSmallScreen ? "5%" : "3%",
    marginRight: isSmallScreen ? 0 : "5%",
    marginLeft: isSmallScreen ? 0 : "5%",
    marginBottom: isSmallScreen ? 0 : "3%",
  }}
>
        <Card sx={{ ...cardStyle}}>
          <CardContent>
            <Stack direction="column" alignItems="center" spacing={2}>
              <Typography variant="h4" gutterBottom style={{ textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                Header 1
              </Typography>
              <Typography style={{ textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
              <Button variant="contained" color="primary" style={{ marginTop: isSmallScreen ? 2 : 0, marginTop: "5%" }}>
                Button 1
              </Button>
            </Stack>
          </CardContent>
        </Card>

        <Card sx={{ ...cardStyle, ml: isSmallScreen ? 0 : 3.5}}>
          <CardContent>
            <Stack direction="column" alignItems="center" spacing={2}>
              <Typography variant="h4" gutterBottom style={{ textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                Header 2
              </Typography>
              <Typography style={{ textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
              <Button variant="contained" color="primary" style={{ marginTop: isSmallScreen ? 2 : 0, marginTop: "5%" }}>
                Button 
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </div>
  );
}

export default CardComponentOne;










