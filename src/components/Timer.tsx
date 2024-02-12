import React from "react";
import Countdown from "react-countdown";

function Timer() {
  return (
    <div>
      <Countdown date={Date.now() + 100000} />;
    </div>
  );
}

export default Timer;
