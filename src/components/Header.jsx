import { Box, Typography, useTheme } from "@mui/material";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  return (
    <Box>
      <Typography
        variant="h2"
        sx={{ textTransform: "uppercase", fontWeight: "700" }}
      >
        {title}
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{ color: theme.palette.secondary.main, fontSize: "1.1rem" }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
