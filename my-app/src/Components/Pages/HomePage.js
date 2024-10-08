import { Box, Grid, Typography } from "@mui/material"
import MyButton from "../Buttons/MyButton"

export const HomePage = () => {

    return (
    <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
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
        <Grid container justifyContent="center" spacing={2} style={{ marginTop: '40px' }}>
          <Grid item>
            <MyButton name="Leaderboard" style={{ backgroundColor: 'yellow', color: 'black' }} />
          </Grid>
          <Grid item>
            <MyButton name="Make Questions" route="/questions-page" style={{ backgroundColor: 'black', color: 'white' }} />  {/* Visible to teachers only */}
          </Grid>
        </Grid>
      </Box>
    )
}

export default HomePage;