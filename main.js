
function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

function rockPaperScisors(computerSelection, playerSelection) {
  if (computerSelection == 0 && playerSelection == "scisor") {
    console.log("You Lose! Rock beats Scisor");
  }
  if (computerSelection == 0 && playerSelection == "paper") {
    console.log("You Win! Paper beats Rock");
  }
  if (computerSelection == 1 && playerSelection == "scisor") {
    console.log("You Win! Scisor beats Paper");
  }
  if (computerSelection == 1 && playerSelection == "rock") {
    console.log("You Lose! Paper beats Rock");
  }
  if (computerSelection == 2 && playerSelection == "rock") {
    console.log("You Win! Rock beats Sciros");
  }
  if (computerSelection == 2 && playerSelection == "paper") {
    console.log("You Lose! Sciors beats Paper");
  }
  if (
    (computerSelection == 0 && playerSelection == "rock") ||
    (computerSelection == 1 && playerSelection == "paper ") ||
    (computerSelection == 3 && playerSelection == "scisor")
  ) {
    console.log("Both Selected Same, No One Wins");
  }
}

rockPaperScisors(getComputerChoice(), prompt("Enter rock, paper or scisor"));





