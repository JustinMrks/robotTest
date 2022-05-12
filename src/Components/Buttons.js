import React from 'react';

const Buttons = ({ bot, setBot, obstacles, gridSize }) => {
  const obsCheck = (future) => {
    return obstacles
      .map((ob) => {
        return ob.x === future.x && ob.y === future.y;
      })
      .includes(true);
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
      {/* <button onClick={where}>help me</button>
      <button onClick={opps}>where da opps</button> */}
    </div>
  );
};

export default Buttons;
