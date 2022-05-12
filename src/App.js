import './App.css';
import React, { useState } from 'react';
import Buttons from './Components/Buttons';
import Grid from './Components/Grid';

function App() {
  const defaultPos = { x: 1, y: 1 };
  const [bot, setBot] = useState(defaultPos);
  const [obstacles, setObstacles] = useState([
    { x: 2, y: 1 },
    { x: 5, y: 5 },
  ]);
  const [gridSize, setGridSize] = useState(5);

  const addObstacle = (x, y) => {
    const newOb = { x: x, y: y };
    setObstacles([...obstacles, newOb]);
  };

  return (
    <div className="body">
      <Buttons
        bot={bot}
        setBot={setBot}
        obstacles={obstacles}
        gridSize={gridSize}
      />
      <Grid gridSize={gridSize} bot={bot} obstacles={obstacles} />
    </div>
  );
}

export default App;
