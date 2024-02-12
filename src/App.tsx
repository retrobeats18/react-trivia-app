import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Trivia from "./components/Trivia";

// Array of objects with trivia questions and multiple-choice answers for The Office
const categories = [
  "The Office",
  "Friends",
  "Arreseted Development",
  "Community",
];

const allTrivia = [
  {
    category: "The Office",
    question: "Who is the regional manager of Dunder Mifflin Scranton?",
    options: ["Michael Scott", "Jim Halpert", "Dwight Schrute", "Pam Beesly"],
    answer: "Michael Scott",
  },
  {
    category: "The Office",
    question: "What is Dwight Schrute's famous catchphrase?",
    options: [
      "Bears, beets, Battlestar Galactica",
      "That's what she said",
      "Identity theft is not a joke, Jim!",
      "Assistant to the regional manager",
    ],
    answer: "Bears, beets, Battlestar Galactica",
  },
  {
    category: "The Office",
    question: "Which episode features Jim proposing to Pam at a gas station?",
    options: [
      "Season 5, Episode 23 - 'Michael Scott Paper Company'",
      "Season 4, Episode 14 - 'Goodbye, Toby'",
      "Season 7, Episode 22 - 'Goodbye, Michael'",
      "Season 9, Episode 23 - 'Finale'",
    ],
    answer: "Season 5, Episode 23 - 'Michael Scott Paper Company'",
  },
  {
    category: "The Office",
    question:
      "What prank does Jim frequently play on Dwight involving his stapler?",
    options: [
      "Encasing the stapler in Jello",
      "Hiding Dwight's desk supplies",
      "Switching Dwight's chair with a whoopee cushion",
      "Changing Dwight's computer password",
    ],
    answer: "Encasing the stapler in Jello",
  },
  {
    category: "The Office",
    question: "Who does Pam date before Jim in the early seasons of the show?",
    options: ["Roy Anderson", "Ryan Howard", "Andy Bernard", "Kevin Malone"],
    answer: "Roy Anderson",
  },
  {
    category: "The Office",
    question: "What is the name of the company's HR representative?",
    options: [
      "Toby Flenderson",
      "Angela Martin",
      "Phyllis Vance",
      "Stanley Hudson",
    ],
    answer: "Toby Flenderson",
  },
  {
    category: "The Office",
    question: "Which character has a beet farm and bed and breakfast?",
    options: ["Jim Halpert", "Pam Beesly", "Dwight Schrute", "Ryan Howard"],
    answer: "Dwight Schrute",
  },
  {
    category: "The Office",
    question: "What is the name of the paper company in The Office?",
    options: [
      "Dunder Mifflin",
      "Scranton Paper Co.",
      "Paper Paradise",
      "Sabre",
    ],
    answer: "Dunder Mifflin",
  },
  {
    category: "The Office",
    question: "Who is known for their unique fashion sense and love for cats?",
    options: [
      "Kevin Malone",
      "Phyllis Vance",
      "Stanley Hudson",
      "Angela Martin",
    ],
    answer: "Angela Martin",
  },
  {
    category: "The Office",
    question: "Which character is known for their love of pretzel day?",
    options: [
      "Stanley Hudson",
      "Michael Scott",
      "Dwight Schrute",
      "Andy Bernard",
    ],
    answer: "Stanley Hudson",
  },
  {
    category: "Friends",
    question: "Which character is known for their love of pretzel day?",
    options: [
      "Stanley Hudson",
      "Michael Scott",
      "Dwight Schrute",
      "Andy Bernard",
    ],
    answer: "Stanley Hudson",
  },
];

function App() {
  // const [filteredOffice, setFilteredTricks] = useState(officeTrivia)

  // const handleClick =(category) => {
  //   console.log(category)
  //   if (category === "All") {

  //       setFilteredTricks(dogTricks)

  //   } else {

  //     // filter all tricks array by category
  //     const newTricks = dogTricks.filter(trick =>trick.category === category)
  //     //return filtered tricks
  //     setFilteredTricks(newTricks)

  //   }
  const [filteredTrivia, setFilteredTrivia] = useState(allTrivia);

  const handleClick = (category) => {
    console.log(category);
    if (category === "All") {
      setFilteredTrivia(allTrivia);
    } else {
      const setTrivia = allTrivia.filter(
        (trivia) => trivia.category === category
      );
      //return filtered Trivia
      setFilteredTrivia(setTrivia);
    }
  };
  return (
    <div className="background-img">
      <div className="main-nav">
        <div className="page-header">
          <h1>Speed Trivia</h1>
        </div>
      </div>
      <div className="body">
        <h3>Click a category below to begin!</h3>
        <div>
          {categories.map((category) => {
            return (
              <button
                key={category}
                onClick={() => {
                  handleClick(category);
                }}
                className="navButton btn btn-light"
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>
      <div className="cardContainer">
        {filteredTrivia.map((trivia) => {
          return (
            <Trivia
              key={trivia.category}
              question={trivia.question}
              options={trivia.options}
              answer={trivia.answer}
            />
          );
        })}

        {/* {filteredTricks.map((trick) => {
            return (
              <Trick 
                  key={trick.title}
                  category={trick.category}
                  title={trick.title}
                  description={trick.description}/>
            )
          })}

          <Trick category='Basic' title='Sit' description='Dog sits' /> */}
      </div>
    </div>
  );
}

export default App;
