import React from 'react';
import Button from '@mui/material/Button';

const MyButton = ({name}) => {
  return (
    <Button variant="contained" color="primary">
      {name}
    </Button>
  );
};

export default MyButton;