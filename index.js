const MOVES_LIST = ["ROCK", "PAPER", "SCISSORS"];

function getComputerChoice() {
  return MOVES_LIST[Math.floor(Math.random() * MOVES_LIST.length)]; // Random choice
}

function getPlayerChoice() {
  let playerChoice;
  // Loop until valid choice entered
  while (!playerChoice) {
    playerChoice = prompt("Choose your move! (Rock, Paper, Scissors)");
    if (!playerChoice || !(MOVES_LIST.includes(playerChoice.toUpperCase()))) {
      playerChoice = null;
    }
  }

  return playerChoice.toUpperCase();
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "TIE";
  }
  switch (playerSelection) {
    case "ROCK":
      switch (computerSelection) {
        case "PAPER":
          return "LOSS";
        case "SCISSORS":
          return "WIN";
      }
      break;
    
    case "PAPER":
      switch (computerSelection) {
        case "ROCK":
          return "WIN";
        case "SCISSORS":
          return "LOSS";
      }
      break;
    
    case "SCISSORS":
      switch (computerSelection) {
        case "ROCK":
          return "LOSS";
        case "PAPER":
          return "WIN";
      }
      break;
  }
}

// Run a new 5-round game and announce results at the end.
function newGame() {
  let computerWins = 0;
  let playerWins = 0;
  const rounds = 5;

  console.info(`Playing for ${rounds} rounds.`);

  for (let i=1; i < rounds; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    
    switch (result) {
      case "TIE":
        console.log(`There was a tie! ${playerSelection} matches ${computerSelection}!`);
        break;
      case "WIN":
        console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
        playerWins++;
        break;
      case "LOSS":
        console.log(`You lose! ${playerSelection} loses to ${computerSelection}!`);
        computerWins++;
        break;
    }
  }

  if (computerWins === playerWins) {
    console.log(`There was a tie! (${playerWins} - ${computerWins})`);
  }
  else if (playerWins > computerWins) {
    console.log(`You win! (${playerWins} - ${computerWins})`);
  }
  else {
    console.log(`You lose! (${playerWins} - ${computerWins})`);
  }

  console.info("Call newGame() to play again!");
}

console.info("Greetings! To start a new game, call newGame().");
