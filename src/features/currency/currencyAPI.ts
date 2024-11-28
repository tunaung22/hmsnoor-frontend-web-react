import { endpoints } from "../../services/api";
import { Currency, CurrencyDataSource } from "../../types/currency.type";

export async function fetchCurrencies() {
  try {
    const response = await fetch(endpoints.v1.currency);
    const data: Currency[] = await response.json();
    const newData: CurrencyDataSource[] = data.map((c) => ({
      id: c.currencyNotation,
      currencyId: c.currencyId,
      currencyDescription: c.currencyDescription,
      currencyNotation: c.currencyNotation,
    }));

    return newData;
  } catch (error) {
    console.error("Error fetching currencies:", error);
  }
}
