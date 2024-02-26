import React from "react";
import { Unstable_Grid2 as Grid, Typography } from "@mui/material";
import useTheme from "@mui/material/styles/useTheme";
import { SortingBlock } from "../components/SortingBlock";

const PageHome: React.FC = () => {
  const theme = useTheme();

  return (
    <Grid
      /* Grid for whole page */
      container
      className="eyore2"
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      bgcolor={theme.palette.background.default}
      minHeight="auto"
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
            for practicing sorting algorithms
          </Typography>
        </Grid>
      </Grid>

      <Grid
        /* Grid for data */
        container
        bgcolor={theme.palette.background.default}
        alignItems="stretch"
        height="750px"
        xs={12}
      >
        <SortingBlock />
      </Grid>
    </Grid>
  );
};

export default PageHome;
