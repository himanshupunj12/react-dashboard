import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Pie = () => {
  return (
    <Box height="100%">
      <Header title="Pie chart" subtitle="Simple Pie Chart" />
      <Box height="calc(100% - 90px)">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
