let humanScore = 0;
let computerScore = 0;

let humanSelection = getUserChoice();
let computerSelection = getComputerChoice();


function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    if (randomNumber < 35) {
        return "rock";
    }
    else if (randomNumber > 68) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getUserChoice() {
    let message = prompt();
    message = message.toLowerCase();
    return message;
}

function playGame() {
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanSelection;
        computerChoice = computerSelection;

        if (humanChoice === computerChoice) {
            return "Tie! You both made the same choice.";
        }
        if (humanChoice === "rock" && computerChoice === "paper") {
            computerScore += 1;
            let result = `You lose! Paper beats rock.\nYour Score: ${humanScore}\nComputer's Score: ${computerScore}`;
            return result;
        }
        if (humanChoice === "paper" && computerChoice === "scissors") {
            computerScore += 1;
            let result = `You lose! Scissors beat paper.\nYour Score: ${humanScore}\nComputer's Score: ${computerScore}`;
            return result;
        }
        if (humanChoice === "scissors" && computerChoice === "rock") {
            computerScore += 1;
            let result = `You lose! Rock beats scissors.\nYour Score: ${humanScore}\nComputer's Score: ${computerScore}`;
            return result;
        }

        if (humanChoice === "rock" && computerChoice === "scissors") {
            humanScore += 1;
            let result = `You win! Rock beats scissors.\nYour Score: ${humanScore}\nComputer's Score: ${computerScore}`;
            return result;
        }
        if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore += 1;
            let result = `You win! Paper beats rock.\nYour Score: ${humanScore}\nComputer's Score: ${computerScore}`;
            return result;
        }
        if (humanChoice === "scissors" && computerChoice === "paper") {
            humanScore += 1;
            let result = `You win! Scissors beat paper.\nYour Score: ${humanScore}\nComputer's Score: ${computerScore}`;
            return result;
        }
    }

    for (let i = 0; i < 5; i++) {
        getComputerChoice();
        getUserChoice();
        console.log(playRound(humanSelection, computerSelection));
    }
}


console.log(playGame());




