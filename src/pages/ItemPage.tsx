import {
  MaterialReactTable,
  MRT_ColumnDef,
  useMaterialReactTable,
} from "material-react-table";
import { ItemHeader, ItemDetail } from "../types/item.type";
import { useMemo, useState } from "react";

import { AppMainContent } from "../components/AppMainContent";
import { AppTitle } from "../components/AppTitle";
import {
  Alert,
  Box,
  Button,
  ButtonGroup,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { useFetchItemHeaders } from "../hooks/useFetchItemHeaders";

function formatNumber(value: number): string {
  const formatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 4,
  });
  return formatter.format(value);
}

function ItemPage() {
  const { states, methods } = useFetchItemHeaders();

  // console.log(itemGridRowSource);
  const mrtColumns = useMemo<MRT_ColumnDef<ItemHeader>[]>(
    () => [
      // {
      //   accessorFn: (row) => `${row.itemType} :: ${row.itemNo}`,
      //   header: "ID",
      // },
      {
        accessorKey: "itemType",
        header: "Item Code",
      },
      {
        accessorKey: "itemNo",
        header: "Type",
      },
      {
        accessorKey: "itemName",
        header: "Name",
      },
      {
        accessorKey: "mItemName",
        header: "M Name",
      },
      {
        accessorFn: (row) => `${row.itemCategory.itemCategoryName}`,
        header: "Category",
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns: mrtColumns,
    data: states.itemGridRowSource,
    enableExpandAll: true, //hide expand all double arrow in column header
    enableExpanding: true,
    filterFromLeafRows: true, //apply filtering to all rows instead of just parent rows
    muiDetailPanelProps: {
      style: {
        // backgroundColor: "rgba(1, 130, 163, 0.2)",
      },
    },
    renderDetailPanel: ({ row }) =>
      row.original.itemDetails ? (
        <TableContainer component={Box} sx={{ paddingRight: "0em" }}>
          <Table size="small" sx={{ display: "flex", justifyContent: "end" }}>
            <TableBody sx={{ paddingRight: "1%" }}>
              {row.original.itemDetails.map((detail: ItemDetail, index) => {
                return (
                  <TableRow key={index} sx={{ border: "1px solid #e0e0e0" }}>
                    {/* <TableCell align="right">{index + 1}</TableCell> */}
                    {/* <TableCell align="right">ID: </TableCell>
                    <TableCell align="right">{detail.id}</TableCell> */}
                    <TableCell align="right">Price: </TableCell>
                    <TableCell align="right">
                      {detail.currency.currencyNotation}
                    </TableCell>
                    <TableCell align="right">
                      {formatNumber(detail.price)}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      ) : null,
    // initialState: { expanded: true }, //expand all rows by default
    // initialState: {
    //   expanded: {},
    // },
    paginateExpandedRows: false, //When rows are expanded, do not count sub-rows as number of rows on the page towards pagination
  });

  const handleRefreshData = async () => {
    console.log("handleRefreshData");
    // await methods.fetchItems();
    methods.reloadData();
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0.5em",
        }}
      >
        <AppTitle>Products</AppTitle>
        <Button onClick={handleRefreshData}>Refresh</Button>
        <ButtonGroup variant="contained" aria-label="Basic button group">
          <Button startIcon={<ControlPointIcon />}>Create</Button>
        </ButtonGroup>
      </Box>
      <AppMainContent sx={{ display: "flex", flexDirection: "column" }}>
        {/* <DataGrid
          rows={itemGridRowSource}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10, 20, 50, 100]}
          sx={{
            [`&  .MuiDataGrid-cell:focus`]: {
              outline: "solid #00637C 0px",
              outlineOffset: "-1px",
            },
          }}
        /> */}
        {states.error ? (
          <Alert severity="warning">{states.error}</Alert>
        ) : (
          <MaterialReactTable table={table} />
        )}
      </AppMainContent>
    </>
  );
}

export { ItemPage };
