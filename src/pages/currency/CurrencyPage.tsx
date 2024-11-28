import { useEffect, useState } from "react";
import { Currency, CurrencyDataSource } from "../../types/currency.type";
import { endpoints } from "../../services/api";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { AppTitle } from "../../components/AppTitle";
import { AppMainContent } from "../../components/AppMainContent";

const paginationModel = { page: 0, pageSize: 5 };

function CurrencyPage() {
  const [currencyDataSoure, setCurrencyDataSoure] = useState<
    CurrencyDataSource[]
  >([]);

  useEffect(() => {
    async function fetchCurrencies() {
      try {
        const response = await fetch(endpoints.v1.currency);
        const data: Currency[] = await response.json();
        const newData: CurrencyDataSource[] = data.map((c) => ({
          id: c.currencyNotation,
          currencyId: c.currencyId,
          currencyDescription: c.currencyDescription,
          currencyNotation: c.currencyNotation,
        }));
        console.log(newData);
        setCurrencyDataSoure(newData);
      } catch (error) {
        console.error("Error fetching currencies:", error);
      }
    }

    fetchCurrencies();
  }, []);

  const columns: GridColDef[] = [
    {
      headerName: "ID",
      field: "currencyId",
      width: 120,
      flex: 1,
    },
    {
      headerName: "Notation",
      field: "currencyNotation",
      width: 200,
      flex: 1,
    },
    {
      headerName: "Notation",
      field: "currencyDescription",
      width: 200,
      flex: 1,
    },
  ];

  return (
    <>
      <AppTitle>Currency</AppTitle>
      <AppMainContent>
        {/* <Paper sx={{ height: 400, width: "100%" }}> */}
        <DataGrid
          rows={currencyDataSoure}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10, 20, 50]}
          // checkboxSelection
          sx={{
            border: 0,
            [`&  .MuiDataGrid-cell:focus`]: {
              outline: "solid #00637C 0px",
              outlineOffset: "-1px",
            },
          }}
        />
      </AppMainContent>
      {/* <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 750 }}
          aria-labelledby="tableTitle"
          size={dense ? "small" : "medium"}
        >
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Notation</TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currencyDataSoure.map((data) => (
              <TableRow hover>
                <TableCell>{data.currencyId}</TableCell>
                <TableCell>{data.currencyNotation}</TableCell>
                <TableCell>{data.currencyDescription}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> */}
    </>
  );
}

export { CurrencyPage };
