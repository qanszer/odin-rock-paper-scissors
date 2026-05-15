let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");

let message = document.createElement("p");
let announcer = document.querySelector(".announcer");
let player = document.querySelector(".player-score");
let computer = document.querySelector(".computer-score");

let computerSelection = "";

let humanScore = 0;
let computerScore = 0;
let reset = 0;

rock.addEventListener('click', () => {
    let result = handleChoice("rock");
    getComputerChoice();

    console.log(result);
    announcer.textContent = result;
    player.textContent = humanScore;
    computer.textContent = computerScore;

    // rock.style.backgroundColor = "#ffcd66";
    // if (computerSelection === "rock")
    //     paper.style.color = "#769f45";
    // if (computerSelection === "paper")
    //     paper.style.color = "#769f45";
    // if (computerSelection === "scissors")
    //     paper.style.color = "#769f45";

    // paper.style.backgroundColor = "#efefef";
    // scissors.style.backgroundColor = "#efefef";
});

paper.addEventListener('click', () => {
    let result = handleChoice("paper");
    getComputerChoice();

    console.log(result);
    announcer.textContent = result;
    player.textContent = humanScore;
    computer.textContent = computerScore;

    // rock.style.backgroundColor = "#efefef";
    // paper.style.backgroundColor = "#ffcd66";
    // scissors.style.backgroundColor = "#efefef";
});

scissors.addEventListener('click', () => {
    let result = handleChoice("scissors");
    getComputerChoice();

    console.log(result);
    announcer.textContent = result;
    player.textContent = humanScore;
    computer.textContent = computerScore;

    // rock.style.backgroundColor = "#efefef";
    // paper.style.backgroundColor = "#efefef";
    // scissors.style.backgroundColor = "#ffcd66";
});


let buttons = document.querySelector(".buttons");
let restart = document.querySelector(".restart");

buttons.addEventListener('click', () => {
    let currentHumanScore = Number(player.textContent);
    let currentComputerScore = Number(computer.textContent);



    if (currentComputerScore >= 5 || currentHumanScore >= 5) {
        console.log("e");

        if (currentComputerScore >= 5) {
            announcer.textContent = "You lost the game.";
        }
        if (currentHumanScore >= 5) {
            announcer.textContent = "You won the game!";
        }

        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;

        rock.style.pointerEvents = "none";
        paper.style.pointerEvents = "none";
        scissors.style.pointerEvents = "none";

        restart.style.display = "block";
    }
});

restart.addEventListener('click', () => {
    player.textContent = "0";
    computer.textContent = "0";
    humanScore = 0;
    computerScore = 0;

    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;

    rock.style.pointerEvents = "auto";
    paper.style.pointerEvents = "auto";
    scissors.style.pointerEvents = "auto";

    restart.style.display = "none";

    announcer.textContent = "First to score 5 points wins!";
});


function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let result;

    if (randomNumber < 35)      result = "rock";
    else if (randomNumber > 68) result = "paper";
    else                        result = "scissors";

    computerSelection = result;
    return computerSelection;
}

function handleChoice(userChoice) {
    let result = "";

    function playRound(humanChoice, computerChoice) {
        humanChoice = userChoice;

        if (humanChoice === computerChoice) {
            result = `Tie! You both made the same move.`;
        }
        if (humanChoice === "rock" && computerChoice === "paper") {
            computerScore += 1;
            result = `You lost! Computer chose paper.`;
        }
        if (humanChoice === "paper" && computerChoice === "scissors") {
            computerScore += 1;
            result = `You lost! Computer chose scissors.`;
        }
        if (humanChoice === "scissors" && computerChoice === "rock") {
            computerScore += 1;
            result = `You lost! Computer chose rock.`;
        }

        if (humanChoice === "rock" && computerChoice === "scissors") {
            humanScore += 1;
            result = `You won! Computer chose scissors.`;
        }
        if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore += 1;
            result = `You won! Computer chose rock.`;
        }
        if (humanChoice === "scissors" && computerChoice === "paper") {
            humanScore += 1;
            result = `You won! Computer chose paper.`;
        }

        return result;
    }

    playRound(userChoice, getComputerChoice());
    return result;
}