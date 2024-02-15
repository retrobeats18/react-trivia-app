import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

// Background image attribution Image by <a href="https://www.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_13223496.htm#query=background&position=1&from_view=keyword&track=sph&uuid=8af0c84f-4b2d-47cc-a363-6b9d70285954">Freepik</a>

function Trivia({ question, options, answer, tally, setTally }) {
  const [flipped, setFlipped] = useState(false);
  // const [count, setCount] = useState(0);

  console.log("Flipped", flipped, tally);
  function handleClick(option) {
    //Flip Card if correct and tally point
    //else flip card
    console.log(option);
    if (option === answer && flipped === false) {
      // setCount(count + 1);
      setTally(tally + 1);
      setFlipped(!flipped);
    } else if (option != answer && flipped === false) {
      setFlipped(!flipped);
    }
  }
  return (
    // Front of Card
    <div className="card">
      {/* Card Front   */}
      {!flipped && (
        <>
          {/* <div className="top">
            <h2>{category}</h2>
          </div> */}
          <div className="top">
            <h5 className="question">{question}</h5>
            <div className="answer">
              <button
                onClick={() => {
                  let option = options[0];
                  handleClick(option);
                  // scoreOne(option);
                }}
                type="button"
                className="btn btn-light btn-sm multi"
              >
                A. {options[0]}
              </button>
              <button
                onClick={() => {
                  let option = options[1];
                  handleClick(option);
                  // scoreOne(option);
                }}
                type="button"
                className="btn btn-light btn-sm multi"
              >
                B. {options[1]}
              </button>
              <button
                onClick={() => {
                  let option = options[2];
                  handleClick(option);
                  // scoreOne(option);
                }}
                type="button"
                className="btn btn-light btn-sm multi"
              >
                C. {options[2]}
              </button>
              <button
                onClick={() => {
                  let option = options[3];
                  handleClick(option);
                  // scoreOne(option);
                }}
                type="button"
                className="btn btn-light btn-sm multi"
              >
                D. {options[3]}
              </button>
            </div>
          </div>
        </>
      )}
      {/* Back of Card */}
      {flipped && (
        <div
          // onClick={() => {
          //   const option = -1;
          //   handleClick(option);
          // }}
          className="bottom"
        >
          <h5>{answer}</h5>
        </div>
      )}
    </div>
  );
}

export default Trivia;
