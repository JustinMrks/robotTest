import React from 'react';
import GridBlock from './Gridblock';

const GridRow = (props) => {
  const arr = Array.from({ length: props.gridSize + 1 }, (v, i) => i);
  return (
    <div className="row">
      {arr.map((column, key) => (
        <GridBlock
          gridSize={props.gridSize}
          column={column}
          row={props.row}
          key={key}
          bot={props.bot}
          obstacles={props.obstacles}
        />
      ))}
    </div>
  );
};

export default GridRow;
