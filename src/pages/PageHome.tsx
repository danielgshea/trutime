import React from "react";
import { Unstable_Grid2 as Grid, Typography } from "@mui/material";
import useTheme from "@mui/material/styles/useTheme";
import { SortingBlock } from "../components/SortingBlock";

const PageHome = () => {
  const theme = useTheme();

  return (
    <Grid
      /* Grid for whole page */
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      bgcolor={theme.palette.background.default}
      minHeight="100vh"
    >
      <Grid
        /* Grid for header */
        container
        direction="column"
        xs={12}
        alignItems="center"
        height="auto"
        bgcolor={theme.palette.background.default}
      >
        <Grid xs="auto">
          <Typography variant="h1" color={theme.palette.text.secondary}>
            what the sort
          </Typography>
        </Grid>
        <Grid xs="auto">
          <Typography variant="h5" color={theme.palette.text.secondary}>
            live - laugh - sort
          </Typography>
        </Grid>
      </Grid>
      <SortingBlock />
    </Grid>
  );
};

export default PageHome;
