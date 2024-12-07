import { useMemo } from "react";
import { Currency, CurrencyDataSource } from "../types/currency.type";
import { AppTitle } from "../components/AppTitle";
import { AppMainContent } from "../components/AppMainContent";
import { useFetchCurrenciesQuery } from "../store/rtkApis/currencyApi";
import {
  MaterialReactTable,
  MRT_ColumnDef,
  useMaterialReactTable,
} from "material-react-table";
import { Alert } from "@mui/material";

function CurrencyPage() {
  const { data, error, isFetching } = useFetchCurrenciesQuery(null);

  const mrtColumns = useMemo<MRT_ColumnDef<Currency>[]>(
    () => [
      {
        accessorKey: "currencyId",
        header: "ID",
      },
      {
        accessorKey: "currencyNotation",
        header: "Notation",
      },
      {
        accessorKey: "currencyDescription",
        header: "Name",
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns: mrtColumns,
    data: data ?? [],
    // enableExpandAll: true, //hide expand all double arrow in column header
    // enableExpanding: true,
    filterFromLeafRows: true, //apply filtering to all rows instead of just parent rows
  });

  const renderContent = () => {
    if (isFetching) return <>Loading...</>;
    if (error) return <Alert severity="warning">Error loading data</Alert>;

    return <MaterialReactTable table={table} />;
  };

  return (
    <>
      <AppTitle title="Currency" />
      <AppMainContent>{renderContent()}</AppMainContent>
    </>
  );
}

export { CurrencyPage };
