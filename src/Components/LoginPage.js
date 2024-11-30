// LoginPage.js
import React from "react";
import { Divider, useMediaQuery, Button } from "@mui/material";
// import { VisibilityIcon } from "@mui/icons-material";
const LoginPage = () => {
  const matches = useMediaQuery("(max-width: 900px)");
  return (
    <div>
      <h1>{matches ? "Login Page" : "SigninPage"}</h1>
      <Divider variant="horizontal" />
      <Button size="large" variant="contained" startIcon={<VisibilityIcon />}>
        View
      </Button>
      <p>This is where the login form would go.</p>
    </div>
  );
};

export default LoginPage;
