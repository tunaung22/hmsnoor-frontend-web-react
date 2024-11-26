import {
  MaterialReactTable,
  MRT_ColumnDef,
  useMaterialReactTable,
} from "material-react-table";
import { ItemHeader, ItemDetail } from "../../types/item.type";
import { useEffect, useMemo, useState } from "react";
import { endpoints } from "../../services/api";

import { AppMainContent } from "../../components/AppMainContent/AppMainContent";
import { AppTitle } from "../../components/AppTitle/AppTitle";
import {
  Box,
  Button,
  ButtonGroup,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";

// const columns: GridColDef[] = [
//   // {
//   //   headerName: "ID",
//   //   field: "itemType", "itemNo",
//   //   valueGetter: (value)=> {

//   //   },
//   //   width: 120,
//   // },
//   {
//     headerName: "Name",
//     field: "itemName",
//     width: 200,
//     flex: 1,
//   },
//   {
//     headerName: "M Name",
//     field: "mItemName",
//     width: 200,
//     flex: 1,
//   },

//   {
//     headerName: "Type",
//     field: "itemType",
//     width: 200,
//     flex: 1,
//   },
//   {
//     headerName: "Category",
//     field: "itemCategory",
//     valueGetter: (params: ItemCategory) => {
//       if (!params) return params;
//       return params.itemCategoryName;
//     },
//     width: 200,
//     flex: 1,
//   },
//   // {
//   // headerName: "Detail",
//   // field: "itemDetails",
//   // renderCell: (params: GridRenderCellParams<ItemDetail[]>) => {
//   //   return (
//   //     <Box sx={{ display: "flex", flexDirection: "column" }}>
//   //       <DataGrid
//   //         rows={params.value}
//   //         columns={[
//   //           // { headerName: "", field: "id" },
//   //           { headerName: "Type", field: "itemType" },
//   //           { headerName: "Item No", field: "itemNo" },
//   //           { headerName: "Price", field: "price" },
//   //           // { headerName: "Currency", field: "currency" },
//   //         ]}
//   //       />
//   //     </Box>
//   //   );
//   // },
//   //   flex: 1,
//   // },
//   {
//     headerName: "Actions",
//     field: "actions",
//     type: "actions",

//     getActions: (params) => [
//       <GridActionsCellItem
//         icon={<EditIcon />}
//         label="Delete"
//         // onClick={}
//       />,
//       <GridActionsCellItem
//         icon={<EditIcon />}
//         label="Delete"
//         // onClick={}
//       />,
//       <GridActionsCellItem
//         icon={<EditIcon />}
//         label="Delete"
//         // onClick={}
//       />,
//     ],
//     width: 80,
//     flex: 1,
//   },
// ];

// const paginationModel = { page: 0, pageSize: 5 };

function formatNumber(value: number): string {
  const formatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 4,
  });
  return formatter.format(value);
}

function ItemPage() {
  const [itemGridRowSource, setItemGridRowSource] = useState<ItemHeader[]>([]);

  useEffect(() => {
    async function fetchCurrencies() {
      try {
        const response = await fetch(endpoints.v1.item);
        const data: ItemHeader[] = await response.json();
        const newData = data.map((i) => {
          return {
            // id: String(i.itemNo + ":" + i.itemType),
            itemNo: i.itemNo,
            itemType: i.itemType,
            itemCategory: {
              itemCategoryId: i.itemCategory.itemCategoryId,
              itemCategoryName: i.itemCategory.itemCategoryName,
              itemType: i.itemCategory.itemType,
            },
            itemName: i.itemName,
            mItemName: i.mItemName,
            itemDetails: i.itemDetails.map((detail): ItemDetail => {
              const { currencyId, currencyNotation, currencyDescription } =
                detail.currency;
              return {
                id: detail.id,
                itemType: detail.itemType,
                itemNo: detail.itemNo,
                price: detail.price,
                currency: {
                  currencyId: currencyId,
                  currencyNotation: currencyNotation,
                  currencyDescription: currencyDescription,
                },
              };
            }),
          };
        });

        setItemGridRowSource(newData);
      } catch (error) {
        console.error("Error fetching currencies:", error);
      }
    }

    fetchCurrencies();
  }, []);

  const [expandedRowIds, setExpandedRowIds] = useState([]);
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
    data: itemGridRowSource,
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
                  <>
                    <TableRow
                      key={detail.id}
                      sx={{ border: "1px solid #e0e0e0" }}
                    >
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
                  </>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      ) : null,
    // initialState: { expanded: true }, //expand all rows by default
    initialState: {
      expanded: {},
    },
    paginateExpandedRows: false, //When rows are expanded, do not count sub-rows as number of rows on the page towards pagination
  });

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
        <MaterialReactTable table={table} />
      </AppMainContent>
    </>
  );
}

export { ItemPage };
