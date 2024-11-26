import { createContext, ReactNode, useState } from "react";
import {
  createTheme,
  // Palette,
  // PaletteOptions,
  ThemeOptions,
} from "@mui/material";

// interface HmsnoorPalette extends Palette {
//   brand: {
//     light: string;
//     main: string;
//     dark: string;
//   };
//   [key: string]: any;
// }

// interface HmsnoorThemeOptions extends ThemeOptions {
//   palette: HmsnoorPalette;
// }

const hmsnoorThemeOptions: ThemeOptions = {
  components: {},
  palette: {
    mode: "light",
    primary: {
      light: "#02c0ef",
      main: "#0182a3",
      dark: "#001e26",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },

  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    // fontSize: 14,
  },
};
const hmsnoorTheme = createTheme(hmsnoorThemeOptions);

hmsnoorTheme.typography.h3 = {
  fontSize: "1.2rem",
  "@media (min-width:600px)": {
    fontSize: "1.5rem",
  },
  [hmsnoorTheme.breakpoints.up("md")]: {
    fontSize: "2.4rem",
  },
};
// defaultTheme.typography.subtitle1 = {
//   fontSize: "1.2rem",
//   "@media (min-width:600px)": {
//     fontSize: "1.5rem",
//   },
//   [defaultTheme.breakpoints.up("md")]: {
//     fontSize: "2.4rem",
//   },
// };

const ThemeContext = createContext(hmsnoorTheme);

function ThemeContextProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState(hmsnoorTheme);

  return (
    <>
      <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    </>
  );
}

export { ThemeContextProvider, ThemeContext };
