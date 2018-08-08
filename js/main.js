window.addEventListener("load", init);

let time = 5;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");

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
}

function checkGameStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = "Game Over!";
  }
}
