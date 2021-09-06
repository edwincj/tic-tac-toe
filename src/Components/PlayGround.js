import React, { useState, useEffect } from "react";
import Row from "./Row";

const PlayGround = () => {
  const initial = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  const [gameState, setGamestate] = useState(initial);
  const [player, setPlayer] = useState("X");

  const moveHandler = (x, y) => {
    const newState = [...gameState];
    newState[x][y] = player;
    setPlayer((plr) => {
      if (plr === "X") return "O";
      return "X";
    });
    setGamestate(newState);
  };

  const checkEachRow = () => {
    let flg = false;
    gameState.forEach((row) => {
      if (row.every((c) => c === "X")) {
        flg = true;
        return false;
      }
    });
    return flg;
  };

  useEffect(() => {
    let flg = false;
    gameState.forEach((row) => {
      if (row.every((c) => c === "X")) {
        flg = true;
        return false;
      }
    });
    if (
      gameState.every((x) => x[0] === "X" || x[1] === "X" || x[2] === "X") ||
      flg
    ) {
      console.log("X");
    }
  }, [gameState]);

  return (
    <div className="playGround">
      <div className="board">
        {gameState.map((row, index) => {
          return (
            <Row key={index} rowNum={index} value={row} move={moveHandler} />
          );
        })}
      </div>
    </div>
  );
};

export default PlayGround;
