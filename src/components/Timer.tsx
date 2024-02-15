import React from "react";
import Countdown from "react-countdown";

// future game timer function
function Timer() {
  //const renderer =
  return (
    <div>
      <button className="btn btn-light multi">Reset</button>
      <Countdown date={Date.now() + 60000} />
    </div>
  );
}

export default Timer;
