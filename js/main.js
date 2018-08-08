window.addEventListener("load", init);

// DOM Elements
const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");
const selectLevel = document.querySelector("#select-list");
const highestScore = document.querySelector("#highest-score");

let time = 5;
let score = 0;
let isPlaying;
//Check highest score
const bestScore = parseInt(localStorage.getItem("highest-score"));

const words = [
  "hat",
  "river",
  "lucky",
  "statue",
  "generate",
  "stubborn",
  "cocktail",
  "runaway",
  "joke",
  "developer",
  "establishment",
  "hero",
  "javascript",
  "nutrition",
  "revolver",
  "echo",
  "siblings",
  "investigate",
  "horrendous",
  "symptom",
  "laughter",
  "magic",
  "master",
  "space",
  "definition"
];

// Init Game
function init() {
  // Load random word
  showWord(words);
  // Decrement time every second
  setInterval(countdown, 1000);
  //Check if game is over
  setInterval(checkGameStatus, 50);
  // Start match
  wordInput.addEventListener("input", startMatch);
  //Check level set
  changeLevel();
  // Setting value of local storage highest score
  highestScore.innerHTML = bestScore;
}

// check if the word is correct
function startMatch() {
  if (checkMatch()) {
    isPlaying = true;
    score++;
    time = time + 1;
    wordInput.value = "";
    showWord(words);
  }

  // If score -1 display 0
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

function checkMatch() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = "Correct";
    changeLevel();
    return true;
  } else {
    message.innerHTML = "";
    return false;
  }
}

function showWord(words) {
  // Random word from an array
  const randomIndex = Math.floor(Math.random() * words.length);
  // Output random word
  currentWord.innerHTML = words[randomIndex];
}

function countdown() {
  // Check if time did not end
  if (time > 0) {
    time--;
  } else {
    // Game is over
    isPlaying = false;
  }
  timeDisplay.innerHTML = time;
  seconds.innerHTML = time;
}

// Chaning level after round ends
function changeLevel() {
  const level = selectLevel.value;
  if (level === "Hard") {
    time = 2;
  } else if (level === "Medium") {
    time = 3;
  } else if (level === "Easy") {
    time = 5;
  }
  timeDisplay.innerHTML = time;
}

// Diplay Game over if game ends
function checkGameStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = "Game Over!";
    // console.log(typeof highestScore);
    if (score > bestScore) {
      localStorage.setItem("highest-score", score);
      highestScore.innerHTML = score;
    }
    score = -1;
  }
}
