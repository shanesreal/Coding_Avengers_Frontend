import { Grid, Typography } from "@mui/material"
import MyButton from "../Buttons/MyButton"

export const HomePage = () => {

    return (
        <div>
        <Typography variant="h4" align="center" gutterBottom>
          Welcome to Trivial Compute
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item>
            <MyButton name="New Game" route="/new-game" style={{ backgroundColor: 'red', color: 'black' }} />
          </Grid>
          <Grid item>
            <MyButton name="Load Game" route="/load-game" style={{ backgroundColor: 'lightblue', color: 'black' }} />
          </Grid>
          <Grid item>
            <MyButton name="Settings" route="/settings" style={{ backgroundColor: 'lightgreen', color: 'black' }} />
          </Grid>
        </Grid>
        <Grid container justifyContent="center" style={{ marginTop: '40px' }}>
          <Grid item>
            <MyButton name="Leaderboard" route="/leaderboard" style={{ backgroundColor: 'yellow', color: 'black' }} />
          </Grid>
        </Grid>
      </div>
    )
}

export default HomePage;