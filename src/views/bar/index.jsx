import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

const Bar = () => {
  return (
    <Box height="100%">
      <Header title="bar chart" subtitle="Simple Bar Chart" />
      <Box height="calc(100% - 90px)">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
