import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { mockDataContacts } from "../../data/mockData";
import { tokens } from "../../theme";

function Contacts() {
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
      field: "registrarId",
      type: "number",
      headerName: "Registrar ID",
      flex: 1,
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
    { field: "address", type: "string", headerName: "Address", flex: 1 },
    { field: "city", type: "string", headerName: "City", flex: 1 },
    { field: "zipCode", type: "string", headerName: "Zipcode", flex: 1 },
  ];

  return (
    <Box height="100%" display="flex" flexDirection="column" gap="1.8rem">
      <Header
        title="contacts"
        subtitle="List of Contacts for Future Reference"
      />
      <Box height="100%">
        <DataGrid
          columns={columns}
          rows={mockDataContacts}
          components={{ Toolbar: GridToolbar }}
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
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${colors.grey[100]} !important`,
            },
          }}
          disableColumnFilters
        />
      </Box>
    </Box>
  );
}

export default Contacts;
