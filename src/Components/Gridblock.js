import React from 'react';

const GridBlock = (props) => {
  const x = props.column;
  const y = props.row;
  const obstacles = props.obstacles;
  const bot = props.bot;
  const obstacleCheck = () =>
    obstacles.map((ob) => ob.x === x && ob.y === y).includes(true);
  const botCheck = () => bot.x === x && bot.y === y;
  return (
    <div className="block">
      {obstacleCheck() ? (
        <>obstacle</>
      ) : botCheck() ? (
        <>robottttt</>
      ) : (
        <>empty</>
      )}
    </div>
  );
};

export default GridBlock;
