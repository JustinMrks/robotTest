import React from 'react';
import GridRow from './GridRow';

const Grid = (props) => {
  const arr = Array.from({ length: props.gridSize + 1 }, (v, i) => i);

  return (
    <div className="bigDaddy">
      {arr.map((row, key) => (
        <GridRow
          gridSize={props.gridSize}
          row={row}
          key={key}
          bot={props.bot}
          obstacles={props.obstacles}
        />
      ))}
    </div>
  );
};

export default Grid;
