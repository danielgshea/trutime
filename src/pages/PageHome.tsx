import React from "react";
import "./PageHome.css";
import { Unstable_Grid2 as Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import useTheme from "@mui/material/styles/useTheme";
import { SortingBlock } from "../components/SortingBlock";

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
    <Box
      sx={{ flexGrow: 1 }}
      className="pagehomecontainer"
      style={{ background: theme.palette.background.default }}
    >
      <Grid container spacing={2} color="primary">
        <Grid xs={6} md={8}>
          <Item style={{ background: theme.palette.primary.main }}>
            <Typography
              component="h1"
              variant="h1"
              align="center"
              color="textSecondary"
            >
              Welcome to what-the-sort
            </Typography>
          </Item>
        </Grid>
        <Grid xs={6} md={4}>
          <Item style={{ background: theme.palette.primary.main }}>
            <Typography
              component="h3"
              variant="h3"
              align="center"
              color="textSecondary"
            >
              An app by Daniel
            </Typography>
          </Item>
        </Grid>
        <Grid xs={6} md={4}>
          <Item style={{ background: theme.palette.primary.main }}>
            <Typography
              component="h4"
              variant="h4"
              align="center"
              color="textSecondary"
            >
              Todays date: {today}
            </Typography>
          </Item>
        </Grid>
        <Grid xs={6} md={8}>
          <Item style={{ background: theme.palette.primary.main }}>
            <Typography
              component="h2"
              variant="h2"
              align="center"
              color="textSecondary"
            >
              Practice sorting stuff
            </Typography>
          </Item>
        </Grid>
        <Grid
          xs={12}
          alignContent={"flex-start"}
          alignItems={"flex-start"}
        ></Grid>
      </Grid>
    </Box>
  );
};

export default PageHome;
