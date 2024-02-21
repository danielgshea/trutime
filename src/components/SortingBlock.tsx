import {
  Button,
  Unstable_Grid2 as Grid,
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

export const SortingBlock = (props: { values: number[]; onSort: string }) => {
  const theme = useTheme();

  const [values, setValues] = useState(props.values);

  useEffect(() => {
    setValues(props.values);
  }, [props.values]);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setValues((items) => {
        const activeIndex = items.indexOf(active.id);
        const overIndex = items.indexOf(over.id);

        return arrayMove(items, activeIndex, overIndex);
      });
    }
  };

  return (
    <>
      <Grid
        container
        position="relative"
        direction="row"
        width="100%"
        columns={values.length}
      >
        {/* {valuesStatic.map((value) => (
        <Grid
          border="1px solid white"
          xs={1}
          height="100%"
          position="absolute"
          top="0"
          bottom="0"
        >
          {" "}
          hello world
        </Grid>
      ))} */}
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={values}
            strategy={horizontalListSortingStrategy}
          >
            {values.map((value) => (
              <Grid
                style={{
                  display: "flex",
                  borderLeft: "1px solid white",
                }}
                height="100%"
                xs={1}
                padding="0"
                direction="row"
                alignItems="flex-start"
              >
                <Typography
                  color={theme.palette.text.secondary}
                  alignSelf="flex-start"
                  zIndex="12"
                >
                  {values.indexOf(value)}
                </Typography>
                <div
                  style={{
                    width: `${(98 * 1) / values.length}%`,
                    height: "100%",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                    position: "absolute",
                    zIndex: "0",
                  }}
                >
                  <SortableItem
                    key={value}
                    id={value}
                    numVals={values.length}
                  />
                </div>
              </Grid>
            ))}
          </SortableContext>
        </DndContext>
      </Grid>
    </>
  );
};

/*
        {values.map((value) => (
          <Grid xs={1} key={value.index}>
            <Bar value={value} key={value.index} />
          </Grid>
        ))}
*/
