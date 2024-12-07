import { useMemo } from "react";
import { SaleInvoice } from "../types/saleInvoice.type";
import { Alert, Stack } from "@mui/material";
import { AppTitle } from "../components/AppTitle";
import { useFetchSaleInvoicesQuery } from "../store/rtkApis/saleInvoiceApi";
import { AppMainContent } from "../components/AppMainContent";
import {
  MaterialReactTable,
  MRT_ColumnDef,
  useMaterialReactTable,
} from "material-react-table";
import { useSearchParams } from "react-router";

function SaleInvoicePage() {
  const [searchParams] = useSearchParams();

  const saleType = searchParams.get("saleType");
  const pageNumber = searchParams.get("pageNumber")
    ? String(searchParams.get("pageNumber"))
    : "1";
  const pageSize = searchParams.get("pageSize")
    ? String(searchParams.get("pageSize"))
    : "10";

  console.log("saleType", saleType, pageNumber, pageSize);
  if (saleType === null) {
    return (
      <>
        <AppTitle title="Sale Invoices" />
        <Alert severity="info">
          Sale type is required in url. Exampe: /sales?type=minibar
        </Alert>
      </>
    );
  }

  const { data, error, isFetching } = useFetchSaleInvoicesQuery({
    saleType,
    pageNumber,
    pageSize,
  });
  console.log(error);
  const columnsDef = useMemo<MRT_ColumnDef<SaleInvoice>[]>(
    () => [
      {
        accessorKey: "invoiceDate",
        header: "invoiceDate",
      },
      {
        accessorKey: "invoiceNo",
        header: "invoiceNo",
      },
      {
        accessorKey: "salesType",
        header: "salesType",
      },
      {
        // accessorKey: "voucherNo",
        accessorFn: (row) => `${row.voucherNo ? row.voucherNo : "NONE"}`,
        header: "voucherNo",
      },
      {
        accessorKey: "currency",
        header: "currency",
      },
      {
        accessorKey: "discountAmt",
        header: "discountAmt",
      },
      {
        accessorKey: "total",
        header: "total",
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns: columnsDef,
    data: data ?? [],
  });

  const renderTable = () => {
    if (isFetching) return <>Loading...</>;
    if (error)
      return (
        <Stack spacing={2}>
          <Alert severity="warning">Error loading data</Alert>
          {/* DEV ONLY */}
          {/* <Alert severity="error">{JSON.stringify(error)}</Alert> */}
        </Stack>
      );

    return <MaterialReactTable table={table} />;
  };

  return (
    <>
      <AppTitle title="Sale Invoices" />
      <AppMainContent>{renderTable()}</AppMainContent>
    </>
  );
}

export { SaleInvoicePage };
