import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import GeographyChart from "../../components/GeographyChart";
import { tokens } from "../../theme";

const Geography = () => {
  const {
    palette: { mode },
  } = useTheme();
  const colors = tokens(mode);
  return (
    <Box height="100%">
      <Header title="Geography chart" subtitle="Simple Geography Chart" />
      <Box height="calc(100% - 90px)" border={`1px solid ${colors.grey[100]}`}>
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Geography;
