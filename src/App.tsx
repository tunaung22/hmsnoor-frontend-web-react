// import { useState } from "react";
import { RouterProvider } from "react-router/dom";
import { useContext } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import "./App.css";
import { ThemeContext } from "./contexts/themeContext";
import { router } from "./router";

function App() {
  const theme = useContext(ThemeContext);

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <RouterProvider
          router={router}
          // future={{
          //   v7_startTransition: true,
          // }}
        />
      </ThemeProvider>
    </>
  );
}

export default App;
