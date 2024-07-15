
import { Box, Grid, Typography } from "@mui/material"
import MyButton from "../Buttons/MyButton"

export const NewGame = () => {
    return (
        <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Typography variant="h4" align="center" gutterBottom>
          Choose your name
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={8}>
            <MyButton name="Player one" style={{ background: 'white', color: 'black' }} />
          </Grid>
          <Grid item xs={4}>
            <MyButton name="Player two" style={{  background: 'white', color: 'black' }} />
          </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={4}>
            <MyButton name="Player three" style={{  background: 'white', color: 'black' }} />
          </Grid>
          <Grid item xs={8}>
            <MyButton name="Player four" style={{  background: 'white', color: 'black' }} />
          </Grid>
        </Grid>
    </Box>
    )
}

export default NewGame;