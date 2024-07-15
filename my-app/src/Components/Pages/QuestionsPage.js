import { Box, Grid, Typography } from "@mui/material"
import MyButton from "../Buttons/MyButton"

export const QuestionsPage = () => {

    return (
    <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Typography variant="h4" align="center" gutterBottom>
          Make Questions for Trivial Compute
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item>
            <MyButton name="New Categories" style={{ backgroundColor: 'red', color: 'black' }} />
          </Grid>
          <Grid item>
            <MyButton name="New Questions" style={{ backgroundColor: 'lightblue', color: 'black' }} />
          </Grid>
          <Grid item>
            <MyButton name="Settings" route="/settings" style={{ backgroundColor: 'lightgreen', color: 'black' }} />
          </Grid>
        </Grid>
    </Box>
    )
}

export default QuestionsPage;