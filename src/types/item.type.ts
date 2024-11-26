import { Currency } from "./currency.type";
import { ItemCategory } from "./itemCategory.type";

export interface ItemDetail {
    id: number;
    itemNo: string;
    itemType: string;
    currency: Currency;
    price: number;
}

export interface ItemHeader {
    itemNo: string;
    itemType: string;
    itemCategory: ItemCategory;
    itemName: string;
    mItemName: string;
    itemDetails: ItemDetail[];
}

export interface ItemGridRowSource {
    id: string;
    itemNo: string;
    itemType: string;
    itemCategory: ItemCategory;
    itemName: string;
    mItemName: string;
    itemDetails: ItemDetail[];
}