import "./styles/game-board.css";
import { Images } from "../../assets/Images";
import { useState } from "react";

const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

//onSubmit and state here for userInput
//track correct and incorrect answers
//if userInput matches nextFishToName.name, add 1 to correct
//if it doesn't, add 1 to incorrect
//move to the next fish to name in the list
//when moving to the next fish, regardless of if answer is right or not, the correct answer for that fish is removed from the list of answers

export function FunctionalGameBoard() {
  const nextFishToName = initialFishes[0];

  const [userInput, setUserInput] = useState("");
  console.log("this is userInput:", userInput);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("this is userInput: ", userInput);
    console.log("this is nextFishToName: ", nextFishToName);
    // userInput === nextFishToName.name
    //   ? (correctCount = correctCount + 1)
    //   : (incorrectCount = incorrectCount + 1);

    setUserInput("");
  };
  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form id="fish-guess-form" onSubmit={onSubmit}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          value={userInput}
          onChange={(e) => {
            setUserInput(e.target.value);
            // console.log("this is userInput:", userInput);
          }}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
