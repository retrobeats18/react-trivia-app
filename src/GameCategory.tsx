function GameCategory({
  gameHeader,
  active,
  isActive,
  tally,
  setTally,
  handleNext,
  handleBack,
  handleReset,
}) {
  if (active === true) {
    return (
      <>
        <div className="mainNav scoreBoard">
          <h2>Category: {gameHeader}</h2>
          <h2>Score: {tally}</h2>
        </div>

        <div className="answer">
          <div>
            <button
              onClick={() => {
                handleReset();
              }}
              type="button"
              className="btn btn-light btn-sm multi"
            >
              Reset
            </button>
          </div>
          <button
            onClick={() => {
              handleBack();
            }}
            type="button"
            className="btn btn-light btn-sm multi"
          >
            Back
          </button>
          <button
            onClick={() => {
              handleNext();
            }}
            type="button"
            className="btn btn-light btn-sm multi"
          >
            Next
          </button>
        </div>
      </>
    );
  }
}

export default GameCategory;
