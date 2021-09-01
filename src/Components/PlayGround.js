import React, { useState } from "react";
import Row from "./Row";

const PlayGround = () => {
  const initial = [
    ["X", "X", "O"],
    ["X", "O", "O"],
    ["X", "O", "X"],
  ];
  const [gameState, setGamestate] = useState(initial);
  return (
    <div className="playGround">
      <div className="board">
        {gameState.map((row, index) => {
          return <Row key={index} value={row} />;
        })}
      </div>
    </div>
  );
};

export default PlayGround;
