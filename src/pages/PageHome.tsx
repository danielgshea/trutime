import React from "react";
import "./PageHome.css";
import { Unstable_Grid2 as Grid } from "@mui/material";
import { ThemeProvider, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import useTheme from "@mui/material/styles/useTheme";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const PageHome: React.FC = () => {
  const theme = useTheme();
  const today = new Date().toLocaleDateString();

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={6} md={8}>
            <Item color="primary">
              <h1>Welcome to what-the-sort</h1>
            </Item>
          </Grid>
          <Grid xs={6} md={4}>
            <Item>
              <h2>An app by Daniel</h2>
            </Item>
          </Grid>
          <Grid xs={6} md={4}>
            <Item>Todays date: {today}</Item>
          </Grid>
          <Grid xs={6} md={8}>
            <Item>
              Practice sorting stuff for whatever algorithm class you're in
            </Item>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default PageHome;
