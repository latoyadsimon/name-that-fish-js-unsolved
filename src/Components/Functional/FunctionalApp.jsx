import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
// import { useState } from "react";

export function FunctionalApp() {
  //   const [userInput, setUserInput] = useState("");

  return (
    <>
      <FunctionalScoreBoard />
      <FunctionalGameBoard />
      {/* <FunctionalScoreBoard userInput={userInput} />
      <FunctionalGameBoard userInput={userInput} /> */}
      {false && <FunctionalFinalScore />}
    </>
  );
}
