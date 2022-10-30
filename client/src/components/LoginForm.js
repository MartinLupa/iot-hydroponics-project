import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

export const LoginForm = () => {
  const paperStyle = {
    padding: 20,
    width: 300,
    height: 350,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const iconStyle = {
    fontSize: 40,
    color: "#1565C0",
  };

  const formElementStyle = {
    width: "100%",
    marginTop: 10,
    marginBottom: 10,
    align: "left",
  };

  const formLinkStyle = {
    width: "100%",
    align: "left",
  };

  return (
    <Grid
      align="center"
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Paper elevation={5} style={paperStyle}>
        <LockOpenOutlinedIcon style={iconStyle} />

        <TextField
          style={formElementStyle}
          variant="standard"
          id="email"
          label="Email"
          placeholder="Email"
        />
        <TextField
          style={formElementStyle}
          variant="standard"
          type="password"
          id="password"
          label="Password"
          placeholder="Password"
        />
        <Button style={formElementStyle} variant="contained">
          Login
        </Button>

        <FormControlLabel
          style={formElementStyle}
          control={<Checkbox name="checkedB" color="primary" />}
          label="Remember me"
        ></FormControlLabel>

        <Typography align="left" width="100%">
          <Link href="#">Forgot your password?</Link>
        </Typography>
        <Typography align="left" width="100%">
          Do you have an account?
          <Link href="#">Sign up</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};
