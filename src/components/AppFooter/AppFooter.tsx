import { Box, Typography } from "@mui/material";

function AppFooter() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Typography>HMSNOOR ©{new Date().getFullYear()}</Typography>
      </Box>
    </>
  );
}
export { AppFooter };
