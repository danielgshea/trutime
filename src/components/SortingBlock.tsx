import {
  Button,
  Unstable_Grid2 as Grid,
  Icon,
  Paper,
  Typography,
} from "@mui/material";
import useTheme from "@mui/material/styles/useTheme";
import { useEffect, useState } from "react";
import { DndContext, UniqueIdentifier, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
} from "@dnd-kit/sortable";
import { SortableItem } from "./SortableItem";
import { SortTypeButton } from "./SortTypeButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export const SortingBlock = () => {
  const theme = useTheme();

  const [numVals, setNumVals] = useState(12);

  const [delay, setDelay] = useState(0);

  let values = Array.from({ length: numVals }, (_, i) => i + 1);

  const [assignedValues, setAssignedValues] = useState(values);

  const [sorting, isSorting] = useState(false);

  const resetVals = () => {
    values = Array.from({ length: numVals }, (_, i) => i + 1);
    setAssignedValues(values);
  };

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setAssignedValues((items) => {
        const activeIndex = items.indexOf(active.id);
        const overIndex = items.indexOf(over.id);

        return arrayMove(items, activeIndex, overIndex);
      });
      values = assignedValues;
    }
  };

  useEffect(() => {
    values = assignedValues;
  }, [assignedValues]);

  // useEffect(() => {
  //   setAssignedValues(values);
  // }, [values]);

  const isAscendingOrder = () => {
    for (let i = 0; i < values.length - 1; i++) {
      if (values[i] > values[i + 1]) {
        return false;
      }
    }
    return true;
  };

  function handleShuffle() {
    values = Array.from({ length: numVals }, (_, i) => i + 1).sort(
      () => Math.random() - 0.5
    );
    setAssignedValues(values);
  }

  function timeout(delay: number) {
    return new Promise((res) => setTimeout(res, delay));
  }

  async function handleClickBogoSort() {
    if (sorting) return;
    isSorting(true);
    let LIMIT = 100; // gotta set a limit because BOGO sort is either O(n) O(foreeeeeever)
    let count = 0;
    while (!isAscendingOrder() && count < LIMIT) {
      count++;
      await handleShuffle();
      await timeout(delay); // wait for visualization
    }
    isSorting(false);
    setAssignedValues(values);
  }

  async function swap(i1: number, i2: number) {
    const temp = values[i1];
    values[i1] = values[i2];
    values[i2] = temp;
    timeout(delay);
    setAssignedValues([...values]);
  }

  async function handleClickBubbleSort() {
    if (sorting) return;
    isSorting(true);
    let repeat = true;
    while (repeat) {
      repeat = false;
      for (let i = 1; i < values.length; i++) {
        await timeout(delay);
        if (values[i] < values[i - 1]) {
          await swap(i, i - 1);
          repeat = true;
        }
      }
    }
    isSorting(false);
  }

  return (
    <Grid
      container
      position="relative"
      direction="row"
      width="100%"
      height="80vh"
      columns={numVals}
    >
      <Grid
        /* Grid for choose algorithm section */
        container
        direction="row"
        justifyContent="space-between"
        alignItems="stretch"
        bgcolor={theme.palette.primary.dark}
        height="20%"
        width="100vw"
        xs={12}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div>
            <Button
              style={{
                backgroundColor: `${theme.palette.primary.light}`,
                borderRadius: "20px",
              }}
              onClick={() => (numVals > 1 ? setNumVals(numVals - 1) : null)}
            >
              <RemoveIcon style={{ color: "white" }} />
            </Button>
          </div>
          <div>
            <Button
              style={{
                backgroundColor: `${theme.palette.primary.light}`,
                borderRadius: "20px",
              }}
              onClick={() => (numVals > 1 ? setNumVals(numVals + 1) : null)}
            >
              <AddIcon style={{ color: "white" }} />
            </Button>
          </div>
        </div>
        <Grid display="flex" alignItems="center">
          <Typography color={theme.palette.text.secondary}>
            # Items: {numVals}
          </Typography>
        </Grid>
        <Grid display="flex" alignItems="center">
          <Button
            style={{
              backgroundColor: "red",
              padding: "10px",
              margin: "10px",
            }}
            onClick={handleShuffle}
          >
            <Typography variant="body1">SHUFFLE</Typography>
          </Button>
        </Grid>
        <Grid display="flex" alignItems="center">
          <SortTypeButton
            name="Reset Values"
            disabled={sorting}
            handleClick={() => resetVals()}
          />
        </Grid>
        <Grid display="flex" alignItems="center">
          <SortTypeButton
            name="BOGO SORT"
            disabled={sorting}
            handleClick={() => handleClickBogoSort()}
          />
        </Grid>
        <Grid display="flex" alignItems="center">
          <SortTypeButton
            name="Bubble Sort"
            disabled={sorting}
            handleClick={() => handleClickBubbleSort()}
          />
        </Grid>
        <Grid display="flex" alignItems="center">
          <SortTypeButton
            name="SELECTION SORT"
            disabled={sorting}
            handleClick={() => handleClickBogoSort()}
          />
        </Grid>
        <Grid display="flex" alignItems="center">
          <SortTypeButton
            name="INSERTION SORT"
            disabled={sorting}
            handleClick={() => handleClickBogoSort()}
          />
        </Grid>
        <Grid display="flex" alignItems="center">
          <SortTypeButton
            name="QUICK SORT"
            disabled={sorting}
            handleClick={() => handleClickBogoSort()}
          />
        </Grid>
      </Grid>
      <Grid container width="100vw" height="80%">
        {/* Grid for sorting section */}
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
          autoScroll={false}
        >
          <SortableContext
            items={assignedValues}
            strategy={horizontalListSortingStrategy}
          >
            {assignedValues.map((value) => (
              <Grid
                style={{
                  display: "flex",
                  borderLeft: "1px solid white",
                }}
                height="auto"
                xs={1}
                padding="0"
                direction="row"
                justifyContent="center"
                alignItems="flex-start"
                key={value}
              >
                <Typography
                  color={theme.palette.text.secondary}
                  alignSelf="flex-start"
                  zIndex="12"
                  position="absolute"
                >
                  {assignedValues.indexOf(value)}
                </Typography>
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <SortableItem
                    key={value}
                    id={value}
                    numVals={assignedValues.length}
                  />
                </div>
              </Grid>
            ))}
          </SortableContext>
        </DndContext>
      </Grid>
    </Grid>
  );
};
