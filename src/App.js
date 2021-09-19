import React, { useState } from "react";
import "./App.css";
import PlayGround from "./Components/PlayGround";

const App = () => {
  const [gameId, setGameId] = useState(1);
  return <PlayGround key={gameId} newGame={() => setGameId((id) => id + 1)} />;
};

export default App;
