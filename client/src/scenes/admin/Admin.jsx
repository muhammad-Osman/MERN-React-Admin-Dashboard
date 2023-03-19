import React from 'react';
import { Box, useTheme } from "@mui/material";
import Header from "components/Header";
import { DataGrid } from "@mui/x-data-grid";
import { customerTableColumns } from "utilities/CommonUtility";
import { useGetAdminsQuery } from 'state/api';
import DataGridCustomToolbar from 'components/DataGridCustomToolbar';

const Admin = () => {
  const {data, isLoading} = useGetAdminsQuery();
  const theme = useTheme();

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="ADMINS" subTitle="Managing admin and list of admins." />
      <Box
        mt="40px"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
      >
        <DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={data || []}
          columns={customerTableColumns}
          components={{Toolbar: DataGridCustomToolbar}}
        />
      </Box>
    </Box>
  )
}

export default Admin