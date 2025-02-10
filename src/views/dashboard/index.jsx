import { Box, IconButton, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import ProgressCircle from "../../components/ProgressCircle";
import StatBox from "../../components/StatBox";
import { DownloadOutlined, Email } from "@mui/icons-material";
import { tokens } from "../../theme";
import LineChart from "../../components/LineChart";
import { mockTransactions } from "../../data/mockData";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";

function Dashboard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box height="100%" display="flex" flexDirection="column" gap="20px">
      <Header title="dashboard" subtitle="Welcome to your dashboard" />
      {/* better alternate to calc */}
      <Box sx={{ flexGrow: 1, height: "auto", overflow: "hidden" }}>
        <Box
          sx={{
            height: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gridTemplateRows: "auto minmax(0, 100%) minmax(0, 100%)",
            gap: "20px",
            minHeight: "0",
          }}
        >
          <Box bgcolor={colors.primary[400]} padding="20px" gridColumn="span 3">
            <StatBox
              title="12,361"
              subtitle="Emails Sent"
              progress="0.75"
              increase="+14%"
              icon={
                <Email
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
          <Box bgcolor={colors.primary[400]} padding="20px" gridColumn="span 3">
            <StatBox
              title="12,361"
              subtitle="Emails Sent"
              progress="0.75"
              increase="+14%"
              icon={
                <Email
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
          <Box bgcolor={colors.primary[400]} padding="20px" gridColumn="span 3">
            <StatBox
              title="12,361"
              subtitle="Emails Sent"
              progress="0.75"
              increase="+14%"
              icon={
                <Email
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
          <Box bgcolor={colors.primary[400]} padding="20px" gridColumn="span 3">
            <StatBox
              title="12,361"
              subtitle="Emails Sent"
              progress="0.75"
              increase="+14%"
              icon={
                <Email
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
          <Box
            bgcolor={colors.primary[400]}
            padding="20px"
            height="100%"
            gridColumn="span 8"
          >
            <Box
              p="0 30px"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Typography
                  variant="h5"
                  fontWeight="600"
                  color={colors.grey[100]}
                >
                  Revenue Generated
                </Typography>
                <Typography
                  variant="h3"
                  fontWeight="bold"
                  color={colors.greenAccent[500]}
                >
                  $59,342.32
                </Typography>
              </Box>
              <Box>
                <IconButton>
                  <DownloadOutlined
                    sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                  />
                </IconButton>
              </Box>
            </Box>
            <Box height="100%">
              <LineChart isDashboard={true} />
            </Box>
          </Box>
          <Box
            backgroundColor={colors.primary[400]}
            height="100%"
            gridColumn="span 4"
            overflow="auto"
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              colors={colors.grey[100]}
              p="20px"
            >
              <Typography
                color={colors.grey[100]}
                variant="h5"
                fontWeight="600"
              >
                Recent Transactions
              </Typography>
            </Box>
            {mockTransactions.map((transaction, i) => (
              <Box
                key={`${transaction.txId}-${i}`}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom={`4px solid ${colors.primary[500]}`}
                p="20px"
              >
                <Box>
                  <Typography
                    color={colors.greenAccent[500]}
                    variant="h5"
                    fontWeight="600"
                  >
                    {transaction.txId}
                  </Typography>
                  <Typography color={colors.grey[100]}>
                    {transaction.user}
                  </Typography>
                </Box>
                <Box color={colors.grey[100]}>{transaction.date}</Box>
                <Box
                  backgroundColor={colors.greenAccent[500]}
                  p="5px 10px"
                  borderRadius="4px"
                >
                  ${transaction.cost}
                </Box>
              </Box>
            ))}
          </Box>
          <Box
            backgroundColor={colors.primary[400]}
            padding="20px"
            height="100%"
            gridColumn="span 4"
          >
            <Typography variant="h5" fontWeight="600">
              Campaign
            </Typography>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              mt="25px"
            >
              <ProgressCircle size="125" />
              <Typography
                variant="h5"
                color={colors.greenAccent[500]}
                sx={{ mt: "15px" }}
              >
                $48,352 revenue generated
              </Typography>
              <Typography>
                Includes extra misc expenditures and costs
              </Typography>
            </Box>
          </Box>
          <Box
            gridColumn="span 4"
            backgroundColor={colors.primary[400]}
            padding="20px"
            height="100%"
          >
            <Typography
              variant="h5"
              fontWeight="600"
              // sx={{ padding: "30px 30px 0 30px" }}
            >
              Sales Quantity
            </Typography>
            <Box height="100%" mt="-20px" width="100%">
              <BarChart isDashboard={true} height="100%" />
            </Box>
          </Box>
          <Box
            gridColumn="span 4"
            backgroundColor={colors.primary[400]}
            padding="20px"
            height="100%"
          >
            <Typography variant="h5" fontWeight="600">
              Geography Based Traffic
            </Typography>
            <Box height="100%" mt="-10px">
              <GeographyChart isDashboard={true} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
