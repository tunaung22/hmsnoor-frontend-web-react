import { Box, Button, Typography } from "@mui/material";
import { AppTitle } from "../../components/AppTitle/AppTitle";
import { AppMainContent } from "../../components/AppMainContent/AppMainContent";

function DashboardPage() {
  return (
    <>
      <AppTitle>Dashboard Page</AppTitle>
      <AppMainContent>
        <Button>Button</Button>
        <Button variant="outlined">Primary</Button>
      </AppMainContent>
    </>
  );
}

export { DashboardPage };
