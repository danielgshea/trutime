import { Button, Typography } from "@mui/material";
import useTheme from "@mui/material/styles/useTheme";

export const SortTypeButton = (props: {
  name: string;
  handleClick: () => void;
  disabled: boolean;
}) => {
  const theme = useTheme();
  return (
    <Button
      onClick={props.handleClick}
      disabled={props.disabled}
      style={{
        backgroundColor: theme.palette.primary.light,
        padding: "10px",
        margin: "10px",
      }}
    >
      <Typography variant="body1" color={theme.palette.text.secondary}>
        {props.name}
      </Typography>
    </Button>
  );
};
