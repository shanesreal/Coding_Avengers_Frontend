import React from 'react';
import Button from '@mui/material/Button';

const MyButton = ({ name, style }) => {
  return (
    <Button variant="contained" style={style}>
      {name}
    </Button>
  );
};

export default MyButton;