import React from "react";
import { Box, Typography, Button } from "@mui/material";
import CustomAppBar from "./components/navbar";
import Links from "./components/links";
import CardComponent from "./components/CardComponent";
import CardComponentOne from "./components/cardComponentOne"
import MediaCard from "./components/mediaCard";
import CustomButton from "./components/customButton";
import Subscribe from "./components/subscribe";
import Footer from "./components/footer";



const App = () => {
  return (
    <Box>
      <CustomAppBar />
      <Links />
      <CardComponent />
      <CardComponentOne />
      <MediaCard />
      <CustomButton />
      <Subscribe />
      <Links />
      <Footer />
    </Box>
  );
}

export default App;





