import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Trivia from "./components/Trivia";
import GameCategory from "./components/GameCategory";
import Timer from "./components/Timer";
import allTrivia from "./utils/data.js";
import CategorySelection from "./components/CategorySelection.js";
import { allCategories } from "./components/CategorySelection.js";

// Array of Categories
// const allCategories = ["All", "The Office", "Friends", "Ted Lasso"];

// Dictonary of All trivia questions
// const allTrivia = [
//   {
//     category: "The Office",
//     number: 1,
//     question: "Who is the regional manager of Dunder Mifflin Scranton?",
//     options: ["Michael Scott", "Jim Halpert", "Dwight Schrute", "Pam Beesly"],
//     answer: "Michael Scott",
//   },
//   {
//     category: "The Office",
//     number: 2,
//     question: "What is Dwight Schrute's famous catchphrase?",
//     options: [
//       "Bears, beets, Battlestar Galactica",
//       "That's what she said",
//       "Identity theft is not a joke, Jim!",
//       "Assistant to the regional manager",
//     ],
//     answer: "Bears, beets, Battlestar Galactica",
//   },
//   {
//     category: "The Office",
//     number: 3,
//     question: "Which episode features Jim proposing to Pam at a gas station?",
//     options: [
//       "Season 5, Episode 23 - 'Michael Scott Paper Company'",
//       "Season 4, Episode 14 - 'Goodbye, Toby'",
//       "Season 7, Episode 22 - 'Goodbye, Michael'",
//       "Season 9, Episode 23 - 'Finale'",
//     ],
//     answer: "Season 5, Episode 23 - 'Michael Scott Paper Company'",
//   },
//   {
//     category: "The Office",
//     number: 4,
//     question:
//       "What prank does Jim frequently play on Dwight involving his stapler?",
//     options: [
//       "Encasing the stapler in Jello",
//       "Hiding Dwight's desk supplies",
//       "Switching Dwight's chair with a whoopee cushion",
//       "Changing Dwight's computer password",
//     ],
//     answer: "Encasing the stapler in Jello",
//   },
//   {
//     category: "The Office",
//     number: 5,
//     question: "Who does Pam date before Jim in the early seasons of the show?",
//     options: ["Roy Anderson", "Ryan Howard", "Andy Bernard", "Kevin Malone"],
//     answer: "Roy Anderson",
//   },
//   {
//     category: "The Office",
//     number: 6,
//     question: "What is the name of the company's HR representative?",
//     options: [
//       "Toby Flenderson",
//       "Angela Martin",
//       "Phyllis Vance",
//       "Stanley Hudson",
//     ],
//     answer: "Toby Flenderson",
//   },
//   {
//     category: "The Office",
//     number: 7,
//     question: "Which character has a beet farm and bed and breakfast?",
//     options: ["Jim Halpert", "Pam Beesly", "Dwight Schrute", "Ryan Howard"],
//     answer: "Dwight Schrute",
//   },
//   {
//     category: "The Office",
//     number: 8,
//     question: "What is the name of the paper company in The Office?",
//     options: [
//       "Dunder Mifflin",
//       "Scranton Paper Co.",
//       "Paper Paradise",
//       "Sabre",
//     ],
//     answer: "Dunder Mifflin",
//   },
//   {
//     category: "The Office",
//     question: "Who is known for their unique fashion sense and love for cats?",
//     options: [
//       "Kevin Malone",
//       "Phyllis Vance",
//       "Stanley Hudson",
//       "Angela Martin",
//     ],
//     answer: "Angela Martin",
//   },
//   {
//     category: "The Office",
//     question: "Which character is known for their love of pretzel day?",
//     options: [
//       "Stanley Hudson",
//       "Michael Scott",
//       "Dwight Schrute",
//       "Andy Bernard",
//     ],
//     answer: "Stanley Hudson",
//   },
//   {
//     category: "The Office",
//     question: "What is the name of the company's HR representative?",
//     options: [
//       "Toby Flenderson",
//       "Angela Martin",
//       "Phyllis Vance",
//       "Stanley Hudson",
//     ],
//     answer: "Toby Flenderson",
//   },
//   {
//     category: "The Office",
//     question: "Which character has a beet farm and bed and breakfast?",
//     options: ["Jim Halpert", "Pam Beesly", "Dwight Schrute", "Ryan Howard"],
//     answer: "Dwight Schrute",
//   },
//   {
//     category: "The Office",
//     question: "What is the name of the paper company in The Office?",
//     options: [
//       "Dunder Mifflin",
//       "Scranton Paper Co.",
//       "Paper Paradise",
//       "Sabre",
//     ],
//     answer: "Dunder Mifflin",
//   },
//   {
//     category: "The Office",
//     question: "Who is known for their unique fashion sense and love for cats?",
//     options: [
//       "Kevin Malone",
//       "Phyllis Vance",
//       "Stanley Hudson",
//       "Angela Martin",
//     ],
//     answer: "Angela Martin",
//   },
//   {
//     category: "The Office",
//     question: "Which character is known for their love of pretzel day?",
//     options: [
//       "Stanley Hudson",
//       "Michael Scott",
//       "Dwight Schrute",
//       "Andy Bernard",
//     ],
//     answer: "Stanley Hudson",
//   },
//   {
//     category: "Friends",
//     question: "What is the name of Ross and Monica's dog when they were kids?",
//     options: ["Marcel", "Chandler", "Phoebe", "Joey"],
//     answer: "Chandler",
//   },
//   {
//     category: "Friends",
//     question: "Which character famously yelled 'We were on a break!'?",
//     options: ["Joey", "Rachel", "Ross", "Monica"],
//     answer: "Ross",
//   },
//   {
//     category: "Friends",
//     question: "What is the name of Joey's stuffed penguin?",
//     options: ["Hugsy", "Waddles", "Slippy", "Penguin Jr."],
//     answer: "Hugsy",
//   },
//   {
//     category: "Friends",
//     question: "What does Ross famously shout when trying to help move a couch?",
//     options: ["Pivot!", "Lift!", "Slide!", "Rotate!"],
//     answer: "Pivot!",
//   },
//   {
//     category: "Friends",
//     question: "Which character is an executive at Ralph Lauren?",
//     options: ["Monica", "Phoebe", "Rachel", "Chandler"],
//     answer: "Rachel",
//   },
//   {
//     category: "Friends",
//     question:
//       "What song is Ross playing on the keyboard when he insists everyone to join in?",
//     options: [
//       "Twinkle, Twinkle, Little Star",
//       "The Entertainer",
//       "Funky Town",
//       "Axel F",
//     ],
//     answer: "The Entertainer",
//   },
//   {
//     category: "Friends",
//     question:
//       "Which character accidentally threw a woman's wooden leg into a fire?",
//     options: ["Joey", "Ross", "Monica", "Chandler"],
//     answer: "Joey",
//   },
//   {
//     category: "Friends",
//     question: "Who was Monica's first roommate before Rachel?",
//     options: ["Phoebe", "Chandler", "Janice", "Ross"],
//     answer: "Phoebe",
//   },
//   {
//     category: "Friends",
//     question: "What's the name of Joey's identical hand twin?",
//     options: ["Tony", "Alfonso", "Carl", "Bob"],
//     answer: "Tony",
//   },
//   {
//     category: "Friends",
//     question: "What is the name of Ross's second wife?",
//     options: ["Emily", "Carol", "Janice", "Susan"],
//     answer: "Emily",
//   },
//   {
//     category: "Ted Lasso",
//     question: "Which country is Ted Lasso from?",
//     options: ["United States", "Canada", "England", "Australia"],
//     answer: "United States",
//   },
//   {
//     category: "Ted Lasso",
//     question: "What sport is Ted Lasso coaching in the series?",
//     options: ["Basketball", "Baseball", "Soccer", "Football"],
//     answer: "Football",
//   },
//   {
//     category: "Ted Lasso",
//     question: "What is the name of the fictional football team in the show?",
//     options: [
//       "Richmond Rovers",
//       "London Lions",
//       "AFC Wimbledon",
//       "FC Richmond",
//     ],
//     answer: "FC Richmond",
//   },
//   {
//     category: "Ted Lasso",
//     question: "Which character is the team's captain?",
//     options: ["Jamie Tartt", "Roy Kent", "Ted Lasso", "Nate Shelley"],
//     answer: "Roy Kent",
//   },
//   {
//     category: "Ted Lasso",
//     question: "What is the nickname for Ted's assistant coach, Coach Beard?",
//     options: ["Beardy", "Beardie", "Beardo", "Coach B"],
//     answer: "Beardie",
//   },
//   {
//     category: "Ted Lasso",
//     question: "Who is the team owner and Ted's boss?",
//     options: [
//       "Rebecca Welton",
//       "Hannah Waddingham",
//       "Keeley Jones",
//       "Juno Temple",
//     ],
//     answer: "Rebecca Welton",
//   },
//   {
//     category: "Ted Lasso",
//     question: "What does AFC stand for in the team's name?",
//     options: [
//       "Athletic Football Club",
//       "Association Football Club",
//       "Alliance Football Club",
//       "American Football Club",
//     ],
//     answer: "Association Football Club",
//   },
//   {
//     category: "Ted Lasso",
//     question: "What is Ted Lasso's motivational phrase for the team?",
//     options: [
//       "Believe",
//       "Winning is Everything",
//       "Never Give Up",
//       "Be a Goldfish",
//     ],
//     answer: "Be a Goldfish",
//   },
//   {
//     category: "Ted Lasso",
//     question:
//       "Which player has a unique celebration dance when scoring a goal?",
//     options: ["Jamie Tartt", "Roy Kent", "Danny Rojas", "Isaac McAdoo"],
//     answer: "Danny Rojas",
//   },
//   {
//     category: "Ted Lasso",
//     question: "What is the name of Ted's favorite bar in Richmond?",
//     options: [
//       "The Anchor & Hope",
//       "The Crown & Anchor",
//       "The Richmond Tavern",
//       "The Prince's Head",
//     ],
//     answer: "The Crown & Anchor",
//   },
// ];

function App() {
  const [active, isActive] = useState(false);
  const [filteredTrivia, setFilteredTrivia] = useState(allTrivia);
  const [categoryHeader, setCategoryHeader] = useState("All");
  const [tally, setTally] = useState(0);

  console.log(tally);
  // handleClick in Nav for category selection
  const handleClick = (category) => {
    // filtering trivia cards based on nav selection
    // also setting category header
    if (active === false) {
      isActive(!active);

      if (category === "All") {
        setFilteredTrivia(allTrivia);
        setCategoryHeader(allCategories[0]);
      } else {
        const setHeader = category;
        const setTrivia = allTrivia.filter(
          (trivia) => trivia.category === category
        );
        //return filtered Trivia
        setFilteredTrivia(setTrivia);
        setCategoryHeader(setHeader);
        // console.log("Header =", setHeader);
      }
    }
  };

  // };
  return (
    <>
      <div className="background-img">
        <div className="main-nav">
          <div className="page-header">
            {/* <h1>Speed Trivia</h1> */}
            <img
              className="logo"
              src="src/assets/speed-trivia-high-resolution-logo-transparent (1).png"
            ></img>
          </div>
        </div>
        <div className="body">
          {active ? (
            <GameCategory
              gameHeader={categoryHeader}
              score={tally}
              active={active}
              isActive={isActive}
              tally={tally}
              setTally={setTally}
            />
          ) : (
            <CategorySelection handleClick={handleClick} />
          )}
        </div>

        <div className="cardContainer">
          {active &&
            filteredTrivia.map((trivia, i) => {
              return (
                <Trivia
                  key={i}
                  question={trivia.question}
                  options={trivia.options}
                  answer={trivia.answer}
                  tally={tally}
                  setTally={setTally}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}

export default App;
