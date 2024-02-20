import { Unstable_Grid2 as Grid, Paper, Typography } from "@mui/material";
import useTheme from "@mui/material/styles/useTheme";
import { useState } from "react";
import { DndContext, UniqueIdentifier, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
} from "@dnd-kit/sortable";
import { SortableItem } from "./SortableItem";

export const SortingBlock = () => {
  const theme = useTheme();

  const [values, setValues] = useState<number[]>(
    Array.from({ length: 20 }, (v, i) => i + 1)
  );

  const handleDragEnd = (event: any) => {
    console.log("drag end called");
    const { active, over } = event;
    console.log("ACTIVE: " + active.id);
    console.log("OVER: " + over.id);

    if (active.id !== over.id) {
      setValues((items) => {
        const activeIndex = items.indexOf(active.id);
        const overIndex = items.indexOf(over.id);

        return arrayMove(items, activeIndex, overIndex);
      });
    }
  };

  return (
    <Grid
      container
      direction="row"
      alignItems="flex-end"
      width="100vw"
      columns={100}
    >
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext
          items={values}
          strategy={horizontalListSortingStrategy}
        >
          {values.map((value) => (
            <SortableItem key={value} id={value} numVals={values.length} />
          ))}
        </SortableContext>
      </DndContext>
    </Grid>
  );
};

/*
        {values.map((value) => (
          <Grid xs={1} key={value.index}>
            <Bar value={value} key={value.index} />
          </Grid>
        ))}
*/
