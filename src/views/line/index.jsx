import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line = () => {
  return (
    <Box height="100%">
      <Header title="line chart" subtitle="Simple Line Chart" />
      <Box height="calc(100% - 90px)">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
