import { Box, Grid, Typography, } from "@mui/material"
import MyTextField from "../TextFields/MyTextField"
import MyDropDown from "../DropDowns/MyDropDown"
import CategoryDropDown from "../DropDowns/CategoryDropDown"

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
        <Grid justifyContent="center" style={{ marginTop: '5px', marginBottom: '40px'}}>
          <MyTextField fieldname1={"Player One"} fieldname2={"Player Two"} fieldname3={"Player Three"} fieldname4={"Player Four"}/>
        </Grid>
        
        <Typography variant="h4" align="center" gutterBottom>
          Choose your colors
        </Typography>
        <Grid container style={{ marginTop: '5px', marginBottom: '40px', justifyContent: 'center'}}>
            <Grid>
                <Grid>
                    <MyDropDown fieldname={"Player One"}/>
                </Grid> 
                <Grid>
                    <MyDropDown fieldname={"Player Two"}/>
                </Grid> 
            </Grid>
            <Grid>
                <Grid>
                    <MyDropDown fieldname={"Player Three"}/>
                </Grid> 
                <Grid>
                    <MyDropDown fieldname={"Player Four"}/>
                </Grid> 
            </Grid>
        </Grid>

        <Typography variant="h4" align="center" gutterBottom>
          Choose four categories of questions
        </Typography>
        <Grid container style={{ marginTop: '5px', marginBottom: '40px', justifyContent: 'center'}}>
            <Grid>
                <Grid>
                    <CategoryDropDown fieldname={"Category One"}/>
                </Grid> 
                <Grid>
                    <CategoryDropDown fieldname={"Category Two"}/>
                </Grid> 
            </Grid>
            <Grid>
                <Grid>
                    <CategoryDropDown fieldname={"Category Three"}/>
                </Grid> 
                <Grid>
                    <CategoryDropDown fieldname={"Category Four"}/>
                </Grid> 
            </Grid>
        </Grid>
      </Box>
    )
}

export default NewGame;