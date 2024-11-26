import { createTheme } from "@mui/material";

const lightTheme = createTheme({
    palette: {
        mode: "light",
        // primary: {
        //     light: '#757ce8',
        //     main: '#00637C',
        //     dark: '#002884',
        //     contrastText: '#fff',
        // },
        // secondary: {
        //     light: '#ff7961',
        //     main: '#f44336',
        //     dark: '#ba000d',
        //     contrastText: '#000',
        // },
    },
    components: {
    }
});

const darkTheme = createTheme({
    palette: {
        mode: "dark"
    },

});

export {
    lightTheme,
    darkTheme
};