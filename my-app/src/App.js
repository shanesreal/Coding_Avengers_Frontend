import logo from './logo.svg';
import './App.css';
import MyButton from './Components/Buttons/MyButton';
import { HomePage } from './Components/Pages/HomePage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HomePage/>
      </header>
    </div>
  );
}

export default App;
