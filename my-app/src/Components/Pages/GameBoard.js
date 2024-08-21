import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography, Button } from "@mui/material";

const GameBoard = () => {
  const boardLayout = [
    ["Roll Again", "yellow", "blue", "green", "HQ1", "yellow", "blue", "green", "Roll Again"],
    ["red", "delete", "delete", "delete", "yellow", "delete", "delete", "delete", "red"],
    ["green", "delete", "", "delete", "blue", "delete", "", "delete", "yellow"],
    ["blue", "delete", "delete", "delete", "green", "delete", "delete", "delete", "blue"],
    ["HQ4", "blue", "green", "red", "Trivial Compute", "blue", "yellow", "red", "HQ2"],
    ["red", "delete", "delete", "delete", "yellow", "delete", "delete", "delete", "red"],
    ["green", "delete", "", "delete", "red", "delete", "", "delete", "yellow"],
    ["blue", "delete", "delete", "delete", "green", "delete", "delete", "delete", "blue"],
    ["Roll Again", "yellow", "red", "green", "HQ3", "yellow", "red", "green", "Roll Again"],
  ];

  const pathSequence = [
    [0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [0, 8],
    [1, 8], [2, 8], [3, 8], [4, 8], [5, 8], [6, 8], [7, 8], [8, 8],
    [8, 7], [8, 6], [8, 5], [8, 4], [8, 3], [8, 2], [8, 1], [8, 0],
    [7, 0], [6, 0], [5, 0], [4, 0], [3, 0], [2, 0], [1, 0]
  ];

  const initialPositions = {
    p1: { position: 0, hasMoved: false },
    p2: { position: 0, hasMoved: false },
    p3: { position: 0, hasMoved: false },
    p4: { position: 0, hasMoved: false }
  };

  const initialScores = {
    p1: 0,
    p2: 0,
    p3: 0,
    p4: 0,
  };

  const [positions, setPositions] = useState(initialPositions);
  const [scores, setScores] = useState(initialScores);
  const [currentPlayer, setCurrentPlayer] = useState('p1');
  const [questions, setQuestions] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [diceValue, setDiceValue] = useState(0);
  const [winner, setWinner] = useState("");

  useEffect(() => {
    fetch('http://127.0.0.1:5000/questions')
      .then(response => response.json())
      .then(data => setQuestions(data))
      .catch(error => console.error(error));
  }, []);

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

  const rollDice = () => {
    if (winner) return; //  winner

    fetch('http://127.0.0.1:5000/dice')
      .then(response => response.json())
      .then(data => {
        const diceRoll = data.value;
        setDiceValue(diceRoll);
        movePlayer(currentPlayer, diceRoll);
      })
      .catch(error => console.error(error));
  };

  const movePlayer = (player, diceRoll) => {
    const newPos = { ...positions };
    let newPositionIndex = newPos[player].position + diceRoll;
    newPositionIndex = newPositionIndex % pathSequence.length;

    const newPosCoords = pathSequence[newPositionIndex];
    const tileContent = boardLayout[newPosCoords[0]][newPosCoords[1]];
  
    newPos[player].position = newPositionIndex;
    newPos[player].hasMoved = true;
    setPositions(newPos);

    if (tileContent.startsWith("HQ")) {
      const newScores = { ...scores };
      newScores[player] += 1;
      setScores(newScores);
  
      if (newScores[player] >= 4) {
        setWinner(player);
        return;
      }
    }

    const nextPlayer = getNextPlayer(player);
    setCurrentPlayer(nextPlayer);
    updateQuestion(nextPlayer);
  };

  const getNextPlayer = (currentPlayer) => {
    const currentIndex = parseInt(currentPlayer[1]);
    return `p${(currentIndex % 4) + 1}`;
  };

  const updateQuestion = (player) => {
    const category = getCategoryForPlayer(player);
    const questionKey = getRandomQuestionKey(category);
    setCurrentQuestion(`${category}: ${questionKey}`);
  };

  const getCategoryForPlayer = (player) => {
    const categories = Object.keys(questions);
    const playerIndex = parseInt(player[1]) - 1;
    return categories[playerIndex % categories.length];
  };

  const getRandomQuestionKey = (category) => {
    const questionSet = questions[category];
    const questionKeys = Object.keys(questionSet);
    const randomIndex = Math.floor(Math.random() * questionKeys.length);
    return questionKeys[randomIndex];
  };

  const renderTile = (content, color, row, col) => {
    let players = Object.entries(positions).filter(([key, value]) => {
      const posIndex = value.position;
      const [r, c] = pathSequence[posIndex];
      return r === row && c === col;
    }).map(([key]) => key);

    return (
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
        {content} {players.join(', ')}
      </Box>
    );
  };

  const renderScores = () => {
    return Object.entries(scores).map(([player, score]) => (
      <Typography key={player} variant="h6">
        {player.toUpperCase()} Score: {score}
      </Typography>
    ));
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" padding={2}>
      <Typography variant="h4" align="center" gutterBottom>
        GAMEPLAY
      </Typography>
      <Typography variant="h6" align="center" style={{ margin: '20px 0' }}>
        Current Player: {currentPlayer.toUpperCase()}
      </Typography>
      {winner && (
        <Typography variant="h4" align="center" color="green" gutterBottom>
          Winner: {winner.toUpperCase()}!
        </Typography>
      )}
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={3}>
          <Button variant="contained" style={{ backgroundColor: 'lightcoral', color: 'black' }} onClick={rollDice}>
            Roll Dice
          </Button>
          <h1 id='diceNumber'>{diceValue}</h1>
          <Box mt={2}>
            {renderScores()}
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box border={1} borderColor="grey.400" p={2} borderRadius={1}>
            <Grid container spacing={1}>
              {boardLayout.map((row, rowIndex) => (
                <Grid container item xs={12} key={rowIndex} spacing={1}>
                  {row.map((tile, colIndex) =>
                    tile !== "delete" ? (
                      <Grid item xs={1.33} key={colIndex}>
                        {renderTile(tile, getColor(tile), rowIndex, colIndex)}
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
            <Typography align="center" style={{ margin: '10px 0' }}>
              {currentQuestion}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GameBoard;