import { styled, Typography } from "@mui/material";

type AppTitleProps = {
  title: string;
};

// { theme }: { theme: Theme}
const StyledTypography = styled(Typography)(({ theme }) => ({
  fontVariant: "common-ligatures",
  fontSize: "1.5em",
  fontWeight: "bold",
  color: theme.palette.primary.dark,
  // background: "#efefef",
  // marginTop: 64, sx={{ paddingX: "0.5em", paddingY: "0.5em" }}
  // padding: ".5em",
}));

function AppTitle({ title }: AppTitleProps) {
  return <StyledTypography>{title}</StyledTypography>;
}

export { AppTitle };
