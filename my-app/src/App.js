import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/Pages/HomePage';
import NewGame from './Components/Pages/NewGame';
import QuestionsPage from './Components/Pages/QuestionsPage';
import GameBoard from './Components/Pages/GameBoard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new-game" element={<NewGame />} />
        <Route path="/questions-page" element={<QuestionsPage />} />
        <Route path="/game-board" element={<GameBoard />} />
      </Routes>
    </Router>
  );
}

export default App;
