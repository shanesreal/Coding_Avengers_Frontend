import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const MyTextField = ({fieldname1, fieldname2, fieldname3, fieldname4}) => {
  return (
    <div
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh">
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField id="outlined-basic" label={fieldname1} variant="outlined" />
            <TextField id="outlined-basic" label={fieldname2} variant="outlined" />
        </Box>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField id="outlined-basic" label={fieldname3} variant="outlined" />
            <TextField id="outlined-basic" label={fieldname4} variant="outlined" />
        </Box>  
    </div>
  );
};

export default MyTextField;