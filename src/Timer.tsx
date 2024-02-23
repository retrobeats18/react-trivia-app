import React from "react";
import Countdown from "react-countdown";

// future game timer function
function Timer({ active, isActive, setTally }) {
  // handle reset on button click, pass that value up to parent and restart game
  //   const handleReset = () => {
  //     if (active === true) {
  //       isActive(!active);
  //       //   setTally(0);
  //     }
  //   };
  if (active === true) {
    return (
      <Countdown date={Date.now() + 10000} />
      //   <>
      //     <button onClick={handleReset} className="btn btn-light btn-sm multi">
      //       Reset
      //     </button>
      //     <Countdown date={Date.now() + 10000} />
      //   </>
    );
  }
}

export default Timer;
