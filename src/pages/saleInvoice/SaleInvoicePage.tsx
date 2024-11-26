import { useEffect, useState } from "react";
import { SaleInvoice } from "../../types/saleInvoice.type";
import { Typography } from "@mui/material";
import { AppTitle } from "../../components/AppTitle/AppTitle";

function SaleInvoicePage() {
  const [invoices, setInvoices] = useState<SaleInvoice[]>();

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch("/api/users");
        const data: SaleInvoice[] = await response.json();
        setInvoices(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }

    fetchUsers();
  }, []);

  return (
    <>
      <AppTitle>Sale Invoices</AppTitle>
    </>
  );
}

export { SaleInvoicePage };
