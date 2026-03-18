let humanSelection = getUserChoice();
let computerSelection = getComputerChoice();


function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let result;

    if (randomNumber < 35) {
        result = "rock";
    }
    else if (randomNumber > 68) {
        result = "paper";
    }
    else {
        result = "scissors";
    }

    return result;
}

function getUserChoice() {
    let message = prompt(`Type "rock", "paper", or "scissors"`);
    message = message.toLowerCase();
    return message;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanSelection;
        // console.log(humanChoice);
        computerChoice = computerSelection;
        // console.log(computerChoice);
        let result;

        if (humanChoice === computerChoice) {
            result = `Tie! You both made the same choice.\nYour Score: ${humanScore}\nComputer's Score: ${computerScore}\n`;
        }
        if (humanChoice === "rock" && computerChoice === "paper") {
            computerScore += 1;
            result = `You lose! Paper beats rock.\nYour Score: ${humanScore}\nComputer's Score: ${computerScore}\n`;
        }
        if (humanChoice === "paper" && computerChoice === "scissors") {
            computerScore += 1;
            result = `You lose! Scissors beat paper.\nYour Score: ${humanScore}\nComputer's Score: ${computerScore}\n`;
        }
        if (humanChoice === "scissors" && computerChoice === "rock") {
            computerScore += 1;
            result = `You lose! Rock beats scissors.\nYour Score: ${humanScore}\nComputer's Score: ${computerScore}\n`;
        }

        if (humanChoice === "rock" && computerChoice === "scissors") {
            humanScore += 1;
            result = `You win! Rock beats scissors.\nYour Score: ${humanScore}\nComputer's Score: ${computerScore}\n`;
        }
        if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore += 1;
            result = `You win! Paper beats rock.\nYour Score: ${humanScore}\nComputer's Score: ${computerScore}\n`;
        }
        if (humanChoice === "scissors" && computerChoice === "paper") {
            humanScore += 1;
            result = `You win! Scissors beat paper.\nYour Score: ${humanScore}\nComputer's Score: ${computerScore}\n`;
        }

        humanSelection = getUserChoice();
        computerSelection = getComputerChoice();
        return result;
    }
    

    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}`);
        console.log(playRound(humanSelection, computerSelection));
    }

}
    
playGame();