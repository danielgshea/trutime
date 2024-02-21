import {
  Button,
  Unstable_Grid2 as Grid,
  Paper,
  Typography,
} from "@mui/material";
import useTheme from "@mui/material/styles/useTheme";

const SortTypeButton = (props: { name: string; handleClick: () => void }) => {
  const theme = useTheme();
  return (
    <Button
      onClick={props.handleClick}
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

export const SortTypeButtons = (props: { handleShuffle: () => void }) => {
  const theme = useTheme();

  async function shuffleParty() {
    for (let i = 0; i < 20; i++) {
      props.handleShuffle();
      await timeout(1000);
    }
  }

  function timeout(delay: number) {
    return new Promise((res) => setTimeout(res, delay));
  }

  const handleClickBogoSort = () => {
    console.log("BOGO Sort");
  };

  return (
    <>
      <Grid>
        <Button
          style={{ backgroundColor: "red", padding: "10px", margin: "10px" }}
          onClick={() => props.handleShuffle()}
        >
          <Typography variant="body1">SHUFFLE</Typography>
        </Button>
      </Grid>
      <Grid>
        <Button
          style={{ backgroundColor: "green", padding: "10px", margin: "10px" }}
          onClick={() => shuffleParty()}
        >
          <Typography variant="body1">SHUFFLE PARTAY</Typography>
        </Button>
      </Grid>
      <Grid>
        <SortTypeButton
          name="BOGO SORT"
          handleClick={() => handleClickBogoSort()}
        />
      </Grid>
      <Grid>
        <SortTypeButton
          name="Bubble Sort"
          handleClick={() => handleClickBogoSort()}
        />
      </Grid>
      <Grid>
        <SortTypeButton
          name="SELECTION SORT"
          handleClick={() => handleClickBogoSort()}
        />
      </Grid>
      <Grid>
        <SortTypeButton
          name="INSERTION SORT"
          handleClick={() => handleClickBogoSort()}
        />
      </Grid>
      <Grid>
        <SortTypeButton
          name="QUICK SORT"
          handleClick={() => handleClickBogoSort()}
        />
      </Grid>
    </>
  );
};
