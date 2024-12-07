import { Currency } from "../types/currency.type";
import { ENDPOINTS } from "./api";

export async function fetchUsers(): Promise<Currency[]> {
  try {
    const response = await fetch(ENDPOINTS.v1.currency);
    const data: Currency[] = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}
