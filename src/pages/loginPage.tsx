import { Container, Paper } from "@mui/material";
import AppLoginForm from "../components/forms/AppLoginForm";

function LoginPage() {
  return (
    <>
      <Container maxWidth={"xs"} sx={{ padding: "4em" }}>
        <Paper
          elevation={2}
          sx={{
            padding: 4,
          }}
        >
          <AppLoginForm></AppLoginForm>
        </Paper>
      </Container>
    </>
  );
}

export default LoginPage;
