import { Currency } from "../types/currency.type";
import { apiPrefix } from "./api";

export async function fetchUsers(): Promise<Currency[]> {
    try {
        const response = await fetch(`${apiPrefix}/api/v1/currencies`);
        const data: Currency[] = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}