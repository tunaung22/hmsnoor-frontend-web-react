import { Outlet } from "react-router";
import { AppNavbar } from "../components/AppNavbar/AppNavBar";
import { AppFooter } from "../components/AppFooter/AppFooter";
import { Box, Container, Paper, Stack } from "@mui/material";

function RootLayout() {
  // const [primary, setPrimary] = useState("#1677ff");

  return (
    <>
      {/* <Box> */}
      <AppNavbar />
      {/* <span>Path : {location.pathname}</span> */}
      {/* <Container
        sx={{
          paddingTop: "1em",
          minWidth: "100vw",
          minHeight: "90vh",
        }}
      > */}
      {/* <Paper> */}
      {/* // style={{ padding: ".5em 2em .5em" }}> */}
      {/* <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              background: colorBgContainer,
              minHeight: 280,
              padding: 24,
              borderRadius: borderRadiusLG,
            }}
          >
            Content
          </div> */}
      {/* </Paper>   */}
      <Stack>
        <Outlet />
      </Stack>
      {/* </Container> */}
      <AppFooter />
    </>
  );
}

export { RootLayout };
