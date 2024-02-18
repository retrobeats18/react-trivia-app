import React from "react";
import Timer from "./Timer";
function GameCategory({
  gameHeader,
  score,
  active,
  isActive,
  tally,
  setTally,
}) {
  if (active === true) {
    return (
      <>
        <div className="mainNav scoreBoard">
          <h2>Category: {gameHeader}</h2>
          <h2>Score: {score}</h2>
          <Timer
            active={active}
            isActive={isActive}
            tally={tally}
            setTally={setTally}
          />
        </div>
      </>
    );
  }
}

export default GameCategory;
