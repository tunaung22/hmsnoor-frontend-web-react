import { useEffect, useState } from "react";
import { endpoints } from "../../services/api";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import {
  ItemCategory,
  ItemCategoryGridRowSource,
} from "../../types/itemCategory.type";
import { AppTitle } from "../../components/AppTitle";
import { AppMainContent } from "../../components/AppMainContent";

const paginationModel = { page: 0, pageSize: 5 };

const columns: GridColDef[] = [
  {
    headerName: "ID",
    field: "itemCategoryId",
    width: 120,
    flex: 1,
  },
  {
    headerName: "Name",
    field: "itemCategoryName",
    width: 200,
    flex: 1,
  },
  {
    headerName: "Type",
    field: "itemType",
    width: 200,
    flex: 1,
  },
];

function CategoryPage() {
  const [itemCategoryGridRowSource, setItemCategoryGridRowSource] = useState<
    ItemCategoryGridRowSource[]
  >([]);

  useEffect(() => {
    async function fetchCurrencies() {
      try {
        const response = await fetch(endpoints.v1.itemCategory);
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

  return (
    <>
      <AppTitle>Item Category</AppTitle>
      <AppMainContent>
        <DataGrid
          rows={itemCategoryGridRowSource}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10, 20, 50, 100]}
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
    </>
  );
}

export { CategoryPage };
