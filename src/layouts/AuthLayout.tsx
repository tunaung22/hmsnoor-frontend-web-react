import { Box } from "@mui/material";
import { Outlet } from "react-router";

function AuthLayout() {
  // const [primary, setPrimary] = useState("#1677ff");

  return (
    <>
      <Box>
        <Outlet />
      </Box>
    </>
  );
}

export { AuthLayout };
