import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataInvoices } from "../../data/mockData";
import { tokens } from "../../theme";

function Invoices() {
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
      field: "cost",
      type: "number",
      headerName: "Cost",
      headerAlign: "left",
      align: "left",
      cellClassName: "cost-column--cell",
    },
    { field: "date", type: "string", headerName: "Date", flex: 1 },
  ];

  return (
    <Box height="100%" display="flex" flexDirection="column" gap="1.8rem">
      <Header title="invoices" subtitle="List of Invoice Balances " />
      <Box height="100%">
        <DataGrid
          columns={columns}
          rows={mockDataInvoices}
          checkboxSelection
          sx={{
            "& .name-column--cell .cost-column--cell": {
              color: colors.greenAccent[300],
            },
            "& .MuiDataGrid-columnHeaders, & .MuiDataGrid-footerContainer": {
              background: colors.indigoAccent[700],
            },
            "& .MuiDataGrid-columnHeaders .MuiDataGrid-columnSeparator": {
              display: "none",
            },
            "& .MuiDataGrid-virtualScrollerContent": {
              background: colors.primary[400],
            },
            "& .MuiCheckbox-root": {
              color: `${colors.greenAccent[300]} !important`,
            },
          }}
        />
      </Box>
    </Box>
  );
}

export default Invoices;
