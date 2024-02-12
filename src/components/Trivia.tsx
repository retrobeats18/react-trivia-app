import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

// Background image attrbution Image by <a href="https://www.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_13223496.htm#query=background&position=1&from_view=keyword&track=sph&uuid=8af0c84f-4b2d-47cc-a363-6b9d70285954">Freepik</a>

function Trivia({ category, question, options, answer }) {
  const [flipped, setFlipped] = useState(false);
  const [selected, setselected] = useState(false);
  let score = 0;

  function handleClick(option) {
    setFlipped(!flipped);
    console.log(flipped);
    if (option === answer) {
      score += 1;
      console.log(score);
    }
  }
  return (
    // Front of Card
    <div className="card">
      {/* Card Front   */}
      {!flipped && (
        <>
          <div className="top">
            <h2>{category}</h2>
          </div>
          <div>
            <p>{question}</p>
            <button
              onClick={() => {
                const option = options[0];
                handleClick(option);
              }}
              type="button"
              className="btn btn-light"
            >
              A. {options[0]}
            </button>
            <button
              onClick={() => {
                const option = options[1];
                handleClick(option);
              }}
              type="button"
              className="btn btn-light"
            >
              B. {options[1]}
            </button>
            <button
              onClick={() => {
                const option = options[2];
                handleClick(option);
              }}
              type="button"
              className="btn btn-light"
            >
              C. {options[2]}
            </button>
            <button
              onClick={() => {
                const option = options[3];
                handleClick(option);
              }}
              type="button"
              className="btn btn-light"
            >
              D. {options[3]}
            </button>
          </div>
        </>
      )}
      {/* Back of Card */}
      {flipped && (
        <div
          onClick={() => {
            handleClick();
          }}
          className="bottom"
        >
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default Trivia;
