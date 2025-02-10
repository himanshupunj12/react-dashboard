import { Box, styled } from "@mui/material";
import React from "react";
import Sidebar from "./global/Sidebar";
import Topbar from "./global/Topbar";
import { Outlet } from "react-router-dom";

const Main = styled("main")({
  padding: "0 1.2rem",
  // border: "1px solid red",
  // overflow: "scroll",
  height: "100%",
  minHeight: 0,
});
const Container = styled("div")({
  maxWidth: "110rem",
  margin: "0 auto",
  // border: "1px solid green",
  height: "100%",
});

const AppLayout = (props) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gridTemplateRows: "auto 1fr",
        height: "100vh",
      }}
    >
      <Sidebar />
      <Topbar />
      {/* main app */}
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </Box>
  );
};

export default AppLayout;
