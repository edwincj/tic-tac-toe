import React, { useState, useEffect } from "react";
import Row from "./Row";
import Overlay from "./Overlay";

const PlayGround = ({ newGame }) => {
  const initial = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  const [gameState, setGamestate] = useState(initial);
  const [player, setPlayer] = useState("X");
  const [result, setResult] = useState("Active");

  const overlayContent =
    result === "Draw" ? "Game Drawn" : "Winner : " + result;

  const restart = <button onClick={newGame}>Restart</button>;

  const moveHandler = (x, y) => {
    const newState = [...gameState];
    newState[x][y] = player;
    setPlayer((plr) => {
      if (plr === "X") return "O";
      return "X";
    });
    setGamestate(newState);
  };

  useEffect(() => {
    let rowFlg = false;
    let diagFlg = true;
    let secDiagFlg = true;
    let colFlg = false;
    let prev = "X";
    if (player === "X") prev = "O";
    gameState.forEach((row) => {
      if (row.every((c) => c === prev)) {
        rowFlg = true;
        return false;
      }
    });

    for (let i = 0; i < 3; i++) {
      if (gameState[i][i] !== prev) {
        diagFlg = false;
        break;
      }
    }

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (i + j === 2 && gameState[i][j] !== prev) secDiagFlg = false;
      }
    }

    for (let i = 0; i < 3; i++) {
      if (gameState.every((x) => x[i] === prev)) {
        colFlg = true;
        break;
      }
    }

    if (colFlg || rowFlg || diagFlg || secDiagFlg) {
      setResult(prev);
    } else if (
      gameState.every((row) => {
        return row.every((ele) => ele !== "");
      })
    ) {
      setResult("Draw");
    }
    console.log(result);
  }, [gameState, player, result]);

  return (
    <div className="playGround">
      {result !== "Active" && (
        <Overlay content={overlayContent} newGame={newGame} />
      )}
      <div className="board">
        {gameState.map((row, index) => {
          return (
            <Row key={index} rowNum={index} value={row} move={moveHandler} />
          );
        })}
      </div>
      <div className="footer">
        <div
          className={player === "X" && result === "Active" ? "current" : "wait"}
        >
          X
        </div>
        <div>{result === "Active" && restart}</div>
        <div
          className={player === "O" && result === "Active" ? "current" : "wait"}
        >
          O
        </div>
      </div>
    </div>
  );
};

export default PlayGround;
