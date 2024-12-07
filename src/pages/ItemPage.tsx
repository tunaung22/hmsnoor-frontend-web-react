import {
  MaterialReactTable,
  MRT_ColumnDef,
  useMaterialReactTable,
} from "material-react-table";
import { ItemHeader, ItemDetail } from "../types/item.type";
import { useMemo } from "react";
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
import { useFetchItemHeadersQuery } from "../store/rtkApis/itemHeaderApi";

function formatNumber(value: number): string {
  const formatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 4,
  });
  return formatter.format(value);
}

function ItemPage() {
  const { data, error, isFetching } = useFetchItemHeadersQuery(null);

  const mrtColumns = useMemo<MRT_ColumnDef<ItemHeader>[]>(
    () => [
      // {
      //   accessorFn: (row) => `${row.itemType} :: ${row.itemNo}`,
      //   header: "ID",
      // },
      {
        accessorKey: "itemType",
        header: "Item Code",
        size: 200,
        grow: false,
      },
      {
        accessorKey: "itemNo",
        header: "Type",
        size: 200,
        grow: false,
      },
      {
        accessorKey: "itemName",
        header: "Name",
        size: 300,
        grow: true,
      },
      {
        accessorKey: "mItemName",
        header: "M Name",
        size: 200,
        grow: true,
      },
      {
        accessorFn: (row) => `${row.itemCategory.itemCategoryName}`,
        header: "Category",
        size: 200,
        grow: false,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns: mrtColumns,
    data: data ?? [],
    columnResizeMode: "onEnd",
    enableColumnResizing: true,
    layoutMode: "grid-no-grow",
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
        <TableContainer component={Box} sx={{ paddingX: "1em" }}>
          <Table size="small" sx={{ display: "flex", justifyContent: "end" }}>
            <TableBody sx={{ paddingX: "1%" }}>
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

  const renderTable = () => {
    if (isFetching) return <>Loading...</>;
    if (error) return <Alert severity="warning">Error fetching data</Alert>;

    return <MaterialReactTable table={table} />;
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
        <AppTitle title="Products" />
        <ButtonGroup variant="contained" aria-label="Basic button group">
          <Button startIcon={<ControlPointIcon />}>Create</Button>
        </ButtonGroup>
      </Box>
      <AppMainContent sx={{ display: "flex", flexDirection: "column" }}>
        {renderTable()}
      </AppMainContent>
    </>
  );
}

export { ItemPage };
