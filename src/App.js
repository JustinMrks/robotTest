import './App.css';
import React, { useState } from 'react';

function App() {
  const defaultPos = { x: 1, y: 1 };
  const [bot, setBot] = useState(defaultPos);
  const [obstacles, setObstacles] = useState([
    { x: 2, y: 1 },
    { x: 5, y: 5 },
  ]);
  const [gridSize, setGridSize] = useState(5);

  const obsCheck = (future) => {
    return obstacles
      .map((ob) => {
        return ob.x === future.x && ob.y === future.y;
      })
      .includes(true);
  };

  const addObstacle = (x, y) => {
    const newOb = { x: x, y: y };
    setObstacles([...obstacles, newOb]);
  };

  const moveU = () => {
    const up = { ...bot, y: bot.y - 1 };
    if (obsCheck(up)) {
      console.log('There is something in the way!');
      return;
    }
    if (up.y < 0) {
      console.log('Cannot move off of the grid!');
      return;
    } else {
      console.log('Moving bot up one space!');
      setBot(up);
    }
  };

  const moveD = () => {
    const down = { ...bot, y: bot.y + 1 };
    if (obsCheck(down)) {
      console.log('There is something in the way!');
      return;
    }
    if (down.y > gridSize) {
      console.log('Cannot move off of the grid!');
      return;
    } else {
      console.log('Moving bot down one space!');
      setBot(down);
    }
  };

  const moveL = () => {
    const left = { ...bot, x: bot.x - 1 };
    if (obsCheck(left)) {
      console.log('There is something in the way!');
      return;
    }
    if (left.x < 0) {
      console.log('Cannot move off of the grid!');
      return;
    } else {
      console.log('Moving bot left one space!');
      setBot(left);
    }
  };

  const moveR = () => {
    const right = { ...bot, x: bot.x + 1 };
    if (obsCheck(right)) {
      console.log('There is something in the way!');
      return;
    }
    if (right.x > gridSize) {
      console.log('Cannot move off of the grid!');
      return;
    } else {
      console.log('Moving bot right one space!');
      setBot(right);
    }
  };

  const where = () => {
    console.log(bot);
  };

  const opps = () => {
    console.log(obstacles);
  };

  return (
    <div>
      <button onClick={moveU}>up</button>
      <button onClick={moveD}>down</button>
      <button onClick={moveL}>left</button>
      <button onClick={moveR}>right</button>
      <button onClick={where}>help me</button>
      <button onClick={opps}>where da opps</button>
    </div>
  );
}

export default App;
