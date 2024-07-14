import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const MyButton = ({ name, style, route }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (route) {
      navigate(route);
    }
  };

  return (
    <Button variant="contained" style={style} onClick={handleClick}>
      {name}
    </Button>
  );
};

export default MyButton;