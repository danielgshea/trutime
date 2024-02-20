import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Card, Paper, Typography } from "@mui/material";

export function SortableItem(props: { id: number; numVals: number }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: "pointer",
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Card
        style={{
          height: "500px",
          width: `${60 / props.numVals}vw`,
          margin: "10px",
        }}
      >
        {props.id}
      </Card>
    </div>
  );
}
