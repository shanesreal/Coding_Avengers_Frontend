import React, { useState } from 'react';
import { Box, Grid, Typography, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import MyButton from '../Buttons/MyButton';

const DetailedSection = ({ title, items, onAdd, onDelete }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleDelete = () => {
    onDelete(selectedItem);
    setSelectedItem(null);
  };

  return (
    <Grid item xs={12} sm={4}>
      <Typography variant="h5" align="center">
        {title}
      </Typography>
      <Box border={1} borderColor="grey.400" p={2}>
        {items.map((item, index) => (
          <Button
            key={index}
            fullWidth
            variant="outlined"
            onClick={() => setSelectedItem(item)}
            style={{
              marginBottom: 8,
              backgroundColor: selectedItem === item ? 'rgba(0, 0, 0, 0.1)' : 'white',
              borderColor: selectedItem === item ? 'black' : 'rgba(0, 0, 0, 0.23)',
            }}
          >
            {item}
          </Button>
        ))}
        <Grid container spacing={1} mt={2} justifyContent="center">
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="primary"
              onClick={onAdd}
              style={{ width: '100%', minWidth: 60, height: 40 }}
            >
              +
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="error"
              onClick={handleDelete}
              disabled={!selectedItem}
              style={{ width: '100%', minWidth: 60, height: 40 }}
            >
              -
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export const QuestionsPage = () => {
  const [section, setSection] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [newItem, setNewItem] = useState("");
  const [categories, setCategories] = useState(['Animal Trivia', 'Space Trivia', 'Sports Trivia']);
  const [questions, setQuestions] = useState([
    'What is the fastest land animal?',
    'What is the fastest aquatic animal?',
    'What is the largest animal on earth?',

    'Which planet is closest to Earth?',
    'What is the largest planet in our solar system?',

    'Where did the Olympic games originate?',
    'How many rings make up the Olympic rings?',
    'In what sport can you get a hole in one?',]);

  const handleButtonClick = (sectionName) => {
    setSection(sectionName);
  };

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleAddItem = () => {
    if (section === 'categories') {
      setCategories([...categories, newItem]);
    } else if (section === 'questions') {
      setQuestions([...questions, newItem]);
    }
    setNewItem("");
    handleDialogClose();
  };

  const handleDeleteItem = (item) => {
    if (section === 'categories') {
      setCategories(categories.filter(category => category !== item));
    } else if (section === 'questions') {
      setQuestions(questions.filter(question => question !== item));
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      padding={2}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Make Questions for Trivial Compute
      </Typography>
      <Grid container spacing={4} justifyContent="center" marginBottom={4}>
        <Grid item>
          <Button
            variant="contained"
            style={{ backgroundColor: 'red', color: 'black' }}
            onClick={() => handleButtonClick('categories')}
          >
            New Categories
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            style={{ backgroundColor: 'lightblue', color: 'black' }}
            onClick={() => handleButtonClick('questions')}
          >
            New Questions
          </Button>
        </Grid>
        <Grid item>
          <MyButton
            name="Settings"
            route="/settings"
            style={{ backgroundColor: 'lightgreen', color: 'black' }}
          />
        </Grid>
      </Grid>
      {section === 'categories' && (
        <Grid container spacing={4} justifyContent="center">
          <DetailedSection
            title="Categories"
            items={categories}
            onAdd={handleDialogOpen}
            onDelete={handleDeleteItem}
          />
        </Grid>
      )}
      {section === 'questions' && (
        <Grid container spacing={4} justifyContent="center">
          <DetailedSection
            title="Questions"
            items={questions}
            onAdd={handleDialogOpen}
            onDelete={handleDeleteItem}
          />
        </Grid>
      )}
      <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Add New {section === 'categories' ? 'Category' : 'Question'}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the name of the new {section === 'categories' ? 'category' : 'question'}.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label={section === 'categories' ? 'Category Name' : 'Question Name'}
            type="text"
            fullWidth
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddItem} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default QuestionsPage;