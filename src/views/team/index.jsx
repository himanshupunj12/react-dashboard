import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataTeam } from "../../data/mockData";
import { tokens } from "../../theme";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";

function Team() {
  const {
    palette: { mode },
  } = useTheme();
  const colors = tokens(mode);
  const columns = [
    {
      field: "id",
      type: "number",
      headerName: "ID",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "name",
      type: "string",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    { field: "email", type: "string", headerName: "Email", flex: 1 },
    {
      field: "age",
      type: "number",
      headerName: "Age",
      headerAlign: "left",
      align: "left",
    },
    { field: "phone", type: "string", headerName: "Phone", flex: 1 },
    {
      field: "access",
      type: "string",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }) => (
        <Box
          sx={{
            width: "60%",
            // m: "0 auto",
            p: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor:
              access === "admin"
                ? colors.greenAccent[600]
                : colors.greenAccent[700],
            borderRadius: "4px",
          }}
        >
          {access === "admin" && <AdminPanelSettingsOutlined />}
          {access === "manager" && <SecurityOutlined />}
          {access === "user" && <LockOpenOutlined />}
          <Typography color={colors.grey[100]} ml="5px">
            {access}
          </Typography>
        </Box>
      ),
    },
  ];

  return (
    <Box height="100%" display="flex" flexDirection="column" gap="1.8rem">
      <Header title="team" subtitle="Managing the Team Members" />
      <Box height="100%">
        <DataGrid
          columns={columns}
          rows={mockDataTeam}
          sx={{
            "& .name-column--cell": { color: colors.greenAccent[300] },
            "& .MuiDataGrid-columnHeaders, & .MuiDataGrid-footerContainer": {
              background: colors.indigoAccent[700],
            },
            "& .MuiDataGrid-columnHeaders .MuiDataGrid-columnSeparator": {
              display: "none",
            },
            "& .MuiDataGrid-virtualScrollerContent": {
              background: colors.primary[400],
            },
          }}
        />
      </Box>
    </Box>
  );
}

export default Team;
