import React, { useEffect, useState } from "react";
import { Button, Unstable_Grid2 as Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import useTheme from "@mui/material/styles/useTheme";
import { SortingBlock } from "../components/SortingBlock";
import { SortTypeButtons } from "../components/SortTypeButtons";

const PageHome: React.FC = () => {
  const theme = useTheme();
  const today = new Date().toLocaleDateString();

  const handleShuffle = () => {
    const shuffledValues = Array.from({ length: 10 }, (_, i) => i + 1).sort(
      () => Math.random() - 0.5
    );
    setValues(shuffledValues);
    console.log("SHUFFLE");
  };

  const [handleSort, setHandleSort] = useState("bogo");

  const onSort = (
    type: "bogo" | "bubble" | "selection" | "insertion" | "quick"
  ) => {
    setHandleSort(type);
  };

  const [values, setValues] = useState(
    Array.from({ length: 10 }, (_, i) => i + 1)
  );

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
        bgcolor={theme.palette.primary.dark}
        height="auto"
        xs={12}
      >
        <SortTypeButtons handleShuffle={handleShuffle} />
      </Grid>
      <Grid
        /* Grid for data */
        container
        bgcolor={theme.palette.background.default}
        alignItems="stretch"
        height="750px"
        xs={12}
      >
        <SortingBlock values={values} onSort={handleSort} />
      </Grid>
    </Grid>
  );
};

export default PageHome;
