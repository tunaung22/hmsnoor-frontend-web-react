import { useEffect, useMemo, useState } from "react";
import { ENDPOINTS } from "../services/api";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import {
  ItemCategory,
  ItemCategoryGridRowSource,
} from "../types/itemCategory.type";
import { AppTitle } from "../components/AppTitle";
import { AppMainContent } from "../components/AppMainContent";
import { useFetchItemCategoriesQuery } from "../store/rtkApis/itemCategoryApi";
import { Alert } from "@mui/material";
import {
  MaterialReactTable,
  MRT_ColumnDef,
  useMaterialReactTable,
} from "material-react-table";

function CategoryPage() {
  const { data, error, isFetching } = useFetchItemCategoriesQuery(null);

  const [itemCategoryGridRowSource, setItemCategoryGridRowSource] = useState<
    ItemCategoryGridRowSource[]
  >([]);

  useEffect(() => {
    async function fetchCurrencies() {
      try {
        const response = await fetch(ENDPOINTS.v1.itemCategory);
        const data: ItemCategory[] = await response.json();
        const newData: ItemCategoryGridRowSource[] = data.map((cat) => ({
          id: cat.itemCategoryId,
          itemCategoryId: cat.itemCategoryId,
          itemCategoryName: cat.itemCategoryName,
          itemType: cat.itemType,
        }));
        console.log(newData);
        setItemCategoryGridRowSource(newData);
      } catch (error) {
        console.error("Error fetching currencies:", error);
      }
    }

    fetchCurrencies();
  }, []);

  const mrtColumns = useMemo<MRT_ColumnDef<ItemCategory>[]>(
    () => [
      { accessorKey: "itemCategoryId", header: "ID" },
      { accessorKey: "itemCategoryName", header: "Name" },
      { accessorKey: "itemType", header: "Type" },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns: mrtColumns,
    data: data ?? [],
    enableColumnResizing: true,
    layoutMode: "semantic",
  });

  const renderTable = () => {
    if (isFetching) return <>Loading...</>;
    if (error) return <Alert>Error fetching data</Alert>;

    return <MaterialReactTable table={table} />;
  };

  return (
    <>
      <AppTitle title="Item Category" />
      <AppMainContent>{renderTable()}</AppMainContent>
    </>
  );
}

export { CategoryPage };
