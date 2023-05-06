const MOVES_LIST = ["ROCK", "PAPER", "SCISSORS"];

const playerScore = document.getElementById('player-score'),
  cpuScore = document.getElementById('cpu-score'),
  resultText = document.getElementById('result-text');

function updateScore() {
  playerScore.textContent = playerWins;
  cpuScore.textContent = computerWins;
}

function setResultText(text) {
  resultText.textContent = text;
}

function getComputerChoice() {
  return MOVES_LIST[Math.floor(Math.random() * MOVES_LIST.length)]; // Random choice
}

function playerChoice(choice) {
  if (!choice || !(MOVES_LIST.includes(choice.toUpperCase()))) return;

  playRound(choice.toUpperCase());
}

const choiceButtons = document.querySelectorAll('.choices button');
choiceButtons.forEach(button => button.addEventListener('click', 
  () => {playerChoice(button.getAttribute('data-choice'));}
));

function playRound(playerSelection) {
  if (!gameInProgress) return;
  const computerSelection = getComputerChoice();
  let result;
  if (playerSelection === computerSelection) {
    result = "TIE";
  }
  switch (playerSelection) {
    case "ROCK":
      switch (computerSelection) {
        case "PAPER":
          result = "LOSS";
          break;
        case "SCISSORS":
          result = "WIN";
          break;
      }
      break;
    
    case "PAPER":
      switch (computerSelection) {
        case "ROCK":
          result = "WIN";
          break;
        case "SCISSORS":
          result = "LOSS";
          break;
      }
      break;
    
    case "SCISSORS":
      switch (computerSelection) {
        case "ROCK":
          result = "LOSS";
          break;
        case "PAPER":
          result = "WIN";
          break;
      }
      break;
  }

  switch (result) {
    case "TIE":
      setResultText(`There was a tie! ${playerSelection} matches ${computerSelection}!`);
      break;
    case "WIN":
      setResultText(`You win! ${playerSelection} beats ${computerSelection}!`);
      playerWins++;
      break;
    case "LOSS":
      setResultText(`You lose! ${playerSelection} loses to ${computerSelection}!`);
      computerWins++;
      break;
  }

  updateScore();

  roundEnded();
}

function roundEnded() {
  if (computerWins < 5 && playerWins < 5) return;

  if (computerWins === playerWins) {
    setResultText(`There was a tie! (${playerWins} - ${computerWins})`);
  }
  else if (playerWins > computerWins) {
    setResultText(`You win! (${playerWins} - ${computerWins})`);
  }
  else {
    setResultText(`You lose! (${playerWins} - ${computerWins})`);
  }

  gameInProgress = false;
  playButton.style.display = "block";
}

// Run a new game and announce results at the end.
let computerWins = 0;
let playerWins = 0;
let winningScore = 5;
let gameInProgress = false;
function newGame() {
  if (gameInProgress) return;

  gameInProgress = true;
  
  computerWins = 0;
  playerWins = 0;
  updateScore();

  document.getElementById('gamemode-text').textContent = `First to ${winningScore} Wins.`;

  setResultText("Make your choice!");

  console.log("New game started.");
}

const playButton = document.getElementById('playButton');
playButton.addEventListener('click', function() { playButton.style.display = "none"; newGame();});

