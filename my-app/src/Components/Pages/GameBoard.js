import React from 'react';
import { Box, Grid, Typography, Button } from "@mui/material";

const GameBoard = () => {
  const boardLayout = [
    ["Roll Again", "yellow", "blue", "green", "HQ1", "yellow", "blue", "green", "Roll Again"],
    ["red", "delete", "delete", "delete", "yellow", "delete", "delete", "delete", "red"],
    ["green", "delete", "p1", "delete", "blue", "delete", "p2", "delete", "yellow"],
    ["blue", "delete", "delete", "delete", "green", "delete", "delete", "delete", "blue"],
    ["HQ4", "blue", "green", "red", "Trivial Compute", "blue", "yellow", "red", "HQ2"],
    ["red", "delete", "delete", "delete", "yellow", "delete", "delete", "delete", "red"],
    ["green", "delete", "p3", "delete", "red", "delete", "p4", "delete", "yellow"],
    ["blue", "delete", "delete", "delete", "green", "delete", "delete", "delete", "blue"],
    ["Roll Again", "yellow", "red", "green", "HQ3", "yellow", "red", "green", "Roll Again"],
  ];

  const colorMap = {
    "Roll Again": "grey",
    "HQ1": "red",
    "HQ2": "green",
    "HQ3": "blue",
    "HQ4": "yellow",
    "Trivial Compute": "white",
    "blue": "blue",
    "red": "red",
    "yellow": "yellow",
    "green": "green",
    "": "white",
  };

  const getColor = (content) => {
    return colorMap[content] || "white";
  };

  const getDice = (d) => {
    document.getElementById('diceNumber').innerHTML = Math.floor(Math.random()*6) + 1;
  }

  const renderTile = (content, color) => (
    <Box
      border={1}
      borderColor="black"
      bgcolor={color}
      height={60}
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderRadius={1}
    >
      {content}
    </Box>
  );

  return (
    <Box display="flex" flexDirection="column" alignItems="center" padding={2}>
      <Typography variant="h4" align="center" gutterBottom>
        GAMEPLAY
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={3}>
          <Button variant="contained" style={{ backgroundColor: 'lightcoral', color: 'black' }} onClick={getDice}>
            Roll Dice
          </Button>
          <h1 id='diceNumber'></h1>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box border={1} borderColor="grey.400" p={2} borderRadius={1}>
            <Grid container spacing={1}>
              {boardLayout.map((row, rowIndex) => (
                <Grid container item xs={12} key={rowIndex} spacing={1}>
                  {row.map((tile, colIndex) =>
                    tile !== "delete" ? (
                      <Grid item xs={1.33} key={colIndex}>
                        {renderTile(tile, getColor(tile))}
                      </Grid>
                    ) : (
                      <Grid item xs={1.33} key={colIndex}></Grid>
                    )
                  )}
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Box border={1} borderColor="grey.400" p={2} borderRadius={1}>
            <Typography variant="h5" align="center">
              Trivial Compute
            </Typography>
            {['Blue', 'Red', 'Yellow', 'Green'].map((color, index) => (
              <Box key={index} display="flex" alignItems="center" mb={2}>
                <Box
                  width={40}
                  height={40}
                  borderRadius="50%"
                  bgcolor={color.toLowerCase()}
                  mr={2}
                />
                <Typography>
                  Question {index}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GameBoard;