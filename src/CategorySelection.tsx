import React from "react";
export const allCategories = ["All", "The Office", "Friends", "Ted Lasso"];

function CategorySelection({ handleClick, category }) {
  return (
    <>
      <h3>Click a category below to begin!</h3>
      <div>
        {allCategories.map((category) => {
          return (
            <button
              key={category}
              onClick={() => {
                handleClick(category);
                // handleClick and handleCategory
              }}
              className="navButton btn btn-light"
            >
              {category}
            </button>
          );
        })}
      </div>
    </>
  );
}

export default CategorySelection;
