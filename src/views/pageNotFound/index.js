import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = (props) => {
  const navigate = useNavigate();
  const moveBack = () => navigate(-1);
  return (
    <Box
      display="flex"
      justifyContent="center"
      height="100vh"
      alignItems="center"
    >
      <Box>
        <Typography variant="h1">
          The page you are looking for could not be found!
        </Typography>
        <Button
          onClick={moveBack}
          variant="outlined"
          color="error"
          sx={{ margin: "1rem auto", display: "block" }}
        >
          &larr; Go back
        </Button>
      </Box>
    </Box>
  );
};

export default PageNotFound;
