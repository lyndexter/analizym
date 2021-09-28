import {} from "@mui/material";
import React from "react";
import Dashboard from "./dashboard/Dashboard";
import { Container } from "./Home.styled";
import SideBar from "./side-bar/SideBar";

function Home() {
  return (
    <Container>
      <SideBar />
      <Dashboard />
    </Container>
  );
}

export default Home;
