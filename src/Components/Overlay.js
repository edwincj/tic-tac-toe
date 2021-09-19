import React from "react";

const Overlay = ({ content, newGame }) => {
  const restart = <button onClick={newGame}>Restart</button>;
  return (
    <div className="overlay">
      {content}
      {restart}
    </div>
  );
};

export default Overlay;
