import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

const AppTitle = styled(Typography)(({ theme }) => ({
  fontVariant: "common-ligatures",
  fontSize: "1.5em",
  fontWeight: "bold",
  // background: "#efefef",
  // marginTop: 64, sx={{ paddingX: "0.5em", paddingY: "0.5em" }}
  // padding: ".5em",
}));

export { AppTitle };
