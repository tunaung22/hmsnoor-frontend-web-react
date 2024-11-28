import { ItemHeader } from "../types/item.type";

export async function fetchUsers(): Promise<ItemHeader[]> {
  try {
    const response = await fetch("/api/users");
    const data: ItemHeader[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}
