//use strict mode in all scripts
"use strict";

let currentGuess;
let score = 10;
let RANDOM_NUMBER = Math.trunc(Math.random() * 20) + 1;

document.querySelector(".check").addEventListener("click", () => {
  currentGuess = Number(document.querySelector("input").value);

  if (!currentGuess || typeof currentGuess !== "number") {
    document.querySelector(".message").innerHTML = "";
    document.querySelector(".message").innerHTML = "No number!";
    return;
  }

  switch (true) {
    case currentGuess < RANDOM_NUMBER:
      score--;
      document.querySelector(".score").innerHTML = score;
      document.querySelector(".message").innerHTML = "👇🏼 Too low!";
      document.querySelector("input").value = "";
      break;
    case currentGuess > RANDOM_NUMBER:
      score--;
      document.querySelector(".score").innerHTML = score;
      document.querySelector(".message").innerHTML = "👆🏼 Too high!";
      document.querySelector("input").value = "";
      break;
    default:
      document.querySelector(".message").innerHTML = "🎯 Correct Number!";
      document.querySelector(".number").innerHTML = RANDOM_NUMBER;
      const highScore = document.querySelector(".highscore").innerHTML;
      if (score > highScore) {
        document.querySelector(".highscore").innerHTML = score;
      }
      document.querySelector(".check").style.visibility = "hidden";
      document.body.style.backgroundColor = "#60b347";
  }

  if (score === 0) {
    document.querySelector(".message").innerHTML = "";
    document.querySelector(".message").innerHTML = "☠️ You lost!";
    document.querySelector(".check").style.visibility = "hidden";
  }
});

document.querySelector(".again").addEventListener("click", () => {
  currentGuess = undefined;
  score = 10;
  RANDOM_NUMBER = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".score").innerHTML = score;
  document.querySelector(".message").innerHTML = "";
  document.querySelector(".message").innerHTML = "Start guessing...";
  document.querySelector("input").value = "";
  document.querySelector(".number").innerHTML = "?";
  document.querySelector(".check").style.visibility = "visible";
  document.body.style.backgroundColor = "#222";
});
