import React from "react";
import { Stack, Card, Typography, CardContent, useMediaQuery, useTheme } from "@mui/material";
import ControlledCarousel from "./carousel";

function CardComponent() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(768)); // Adjust the tablet breakpoint

  const stackStyle = {
    direction: isSmallScreen ? "column" : "row",
    alignItems: "center", // Update this line
    justifyContent: isSmallScreen ? "center" : "flex-end",
    bgcolor: "primary.main",
    p: isSmallScreen ? 2 : 10,
    spacing: isSmallScreen ? 2 : 0,
    mt: isSmallScreen ? 0 : -10, // Adjust the margin-top value
    mb: isSmallScreen ? 2 : -1, // Adjust the margin-bottom value
  };

  return (
    <Stack {...stackStyle}>
      {/* Carousel */}
      <ControlledCarousel />

      {/* Cards */}
      <Stack direction="column" alignItems="center" spacing={0}>
        {/* First Card */}
        <Card sx={{ width: isSmallScreen ? "100%" : "55%", mb: 0, p: 0, borderTopLeftRadius: 10, borderTopRightRadius: 10, borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}>
          <CardContent>
            <Typography variant="h4" gutterBottom style={{ textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
              Header 1
            </Typography>
            <Typography style={{ textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </CardContent>
        </Card>

        {/* Second Card */}
        <Card sx={{ width: isSmallScreen ? "100%" : "55%", mb: 3.5, p: 0, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
          <CardContent>
            <Typography variant="h4" gutterBottom style={{ textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
              Header 2
            </Typography>
            <Typography style={{ textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </CardContent>
        </Card>
      </Stack>
    </Stack>
  );
}

export default CardComponent;
























