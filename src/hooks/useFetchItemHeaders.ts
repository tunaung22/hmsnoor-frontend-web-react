import { useEffect, useState } from "react";
import { ENDPOINTS } from "../services/api";
import { ItemDetail, ItemHeader } from "../types/item.type";

const useFetchItemHeaders = () => {
  const [itemGridRowSource, setItemGridRowSource] = useState<ItemHeader[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [reload, setReload] = useState(false);

  const reloadData = () => {
    setReload(!reload);
  };

  const fetchItems = async () => {
    console.log("fetchItems method started");
    setIsLoading(true);
    try {
      const response = await fetch(ENDPOINTS.v1.item);
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }

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
      console.error("Error fetching items:", error);
      setError("Error fetching items from server. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, [reload]);

  return {
    states: {
      error,
      isLoading,
      itemGridRowSource,
    },
    methods: {
      fetchItems,
      reloadData,
    },
  };
};

export { useFetchItemHeaders };
