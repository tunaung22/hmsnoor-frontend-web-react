import { Button } from "@mui/material";
import { AppTitle } from "../components/AppTitle";
import { AppMainContent } from "../components/AppMainContent";

function DashboardPage() {
  return (
    <>
      <AppTitle title="Dashboard Page" />
      <AppMainContent>
        <Button>Button</Button>
        <Button variant="outlined">Primary</Button>
      </AppMainContent>
    </>
  );
}

export { DashboardPage };
