import React from "react";

function GameCategory({ gameHeader, score }) {
  return (
    <>
      <h2>Category: {gameHeader}</h2>
      <h2>Score: {score}</h2>
    </>
  );
}

export default GameCategory;
