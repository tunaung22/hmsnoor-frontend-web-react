import {
  Button,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import KeyIcon from "@mui/icons-material/Key";
import AccountCircle from "@mui/icons-material/AccountCircle";

import { SubmitHandler, useForm } from "react-hook-form";
import { AppLoginFormSchema } from "./appLoginForm.type";

type Inputs = {
  username: string;
  password: string;
};

function AppLoginForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<AppLoginFormSchema>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("username"));

  return (
    <>
      <Stack spacing={4} sx={{}}>
        <Typography variant="h4" color="primary">
          Login Form
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}></form>

        <TextField
          id="username"
          label="Username"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            },
          }}
          {...(register("username"), { required: true })}
        />
        {/* <FormHelperText id="username-helper-text">Username</FormHelperText> */}

        <TextField
          id="password"
          label="Password"
          type="password"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <KeyIcon />
                </InputAdornment>
              ),
            },
          }}
          {...(register("password"), { required: true })}
        />

        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </Stack>
    </>
  );
}

export default AppLoginForm;
