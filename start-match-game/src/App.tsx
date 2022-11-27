import React, {useState} from 'react';
import './App.css';
import Home from './views/pages/Home';

function App() {
    const [gameId, setGameId] =useState<number>(0)
    const restartTheGame = () => {
        setGameId(gameId+1);
    }

  return (
    <div className="App">
      <Home restartTheGame={restartTheGame} key={gameId}></Home>
    </div>
  );
}

export default App;
