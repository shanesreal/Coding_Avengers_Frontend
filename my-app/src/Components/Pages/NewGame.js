import { Box, Grid, Typography, } from "@mui/material"
import MyTextField from "../TextFields/MyTextField"
import MyDropDown from "../DropDowns/MyDropDown"
import CategoryDropDown from "../DropDowns/CategoryDropDown"
import MyButton from "../Buttons/MyButton"

export const NewGame = () => {
    return (
        <div>
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                minHeight="60vh"
                marginTop={'40px'}
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
                <Grid container style={{ marginTop: '5px', justifyContent: 'center'}}>
                    <Grid>
                        <Grid>
                            <CategoryDropDown fieldname={"Category One"}/>
                        </Grid> 
                        <Grid>
                            <CategoryDropDown fieldname={"Category Two"}/>
                        </Grid> 
                    </Grid>
                    <Grid>
                        <Grid item>
                            <CategoryDropDown fieldname={"Category Three"}/>
                        </Grid> 
                        <Grid item>
                            <CategoryDropDown fieldname={"Category Four"}/>
                        </Grid> 
                    </Grid>
                </Grid>
            </Box>
            <Grid container spacing={4} justifyContent="center" style={{ marginTop: '5px', marginBottom: '40px'}}>
                <Grid item>
                    <MyButton name="Start Game" route="" style={{ backgroundColor: 'green', color: 'black' }} />
                </Grid>
                <Grid item>
                    <MyButton name="Go Back" route="/home-page" style={{ backgroundColor: 'red', color: 'black' }} />
                </Grid>
                
            </Grid>


        </div>
        
    )
}

export default NewGame;