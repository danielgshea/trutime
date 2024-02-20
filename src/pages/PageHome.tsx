import React from "react";
import { Unstable_Grid2 as Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import useTheme from "@mui/material/styles/useTheme";
import { SortingBlock } from "../components/SortingBlock";

const PageHome: React.FC = () => {
  const theme = useTheme();
  const today = new Date().toLocaleDateString();

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
        bgcolor={theme.palette.primary.light}
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
        /* Grid for choose algorithm section */
        container
        direction="row"
        justifyContent="space-between"
        alignItems="stretch"
        bgcolor={theme.palette.secondary.main}
        height="auto"
        xs={12}
      >
        <Grid>
          <Paper
            style={{
              backgroundColor: theme.palette.background.default,
              padding: "10px",
              margin: "10px",
            }}
          >
            <Typography variant="body1" color={theme.palette.text.secondary}>
              BOGO
            </Typography>
          </Paper>
        </Grid>
        <Grid>
          <Paper
            style={{
              backgroundColor: theme.palette.background.default,
              padding: "10px",
              margin: "10px",
            }}
          >
            <Typography variant="body1" color={theme.palette.text.secondary}>
              Bubble Sort
            </Typography>
          </Paper>
        </Grid>
        <Grid>
          <Paper
            style={{
              backgroundColor: theme.palette.background.default,
              padding: "10px",
              margin: "10px",
            }}
          >
            <Typography variant="body1" color={theme.palette.text.secondary}>
              Selection Sort
            </Typography>
          </Paper>
        </Grid>
        <Grid>
          <Paper
            style={{
              backgroundColor: theme.palette.background.default,
              padding: "10px",
              margin: "10px",
            }}
          >
            <Typography variant="body1" color={theme.palette.text.secondary}>
              Insertion Sort
            </Typography>
          </Paper>
        </Grid>
        <Grid>
          <Paper
            style={{
              backgroundColor: theme.palette.background.default,
              padding: "10px",
              margin: "10px",
            }}
          >
            <Typography variant="body1" color={theme.palette.text.secondary}>
              Quick Sort
            </Typography>
          </Paper>
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
