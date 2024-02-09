import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Form, redirect } from "react-router-dom";
import { adminLoginService } from "../AdminService/AdminAuthService";

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function AdminLogin() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <Form method="post">
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs display="flex" justifyContent="end">
                <Link variant="body2">Forgot password?</Link>
              </Grid>
            </Grid>
          </Box>
        </Form>
      </Container>
    </ThemeProvider>
  );
}

export async function authAction({ request }) {
  try {
    const data = await request.formData();
    const authData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    console.log(authData);
    const response = await adminLoginService(authData);
    console.log(response);
    if (response?.data.status) {
      localStorage.setItem("_t", response?.data.data?.token?.accessToken);
    }
    return redirect("/admin");
  } catch (err) {
    console.log(err);
    return null;
  }
}
