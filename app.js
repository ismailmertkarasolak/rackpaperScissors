const computerChoiceDisplay = document.getElementById("opponent-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const decisionDisplay = document.getElementById("decision");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let decision;

possibleChoices.forEach(choice => choice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getDecision();
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        computerChoice = "Rock";
    } else if (randomNumber === 2) {
        computerChoice = "Paper";
    } else if (randomNumber === 3) {
        computerChoice = "Scissors";
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getDecision() {
    if (userChoice === computerChoice) {
        decision = "Draw!";
    } else if (userChoice === "Rock" && computerChoice === "Paper") {
        decision = "Opponent Wins, You Lose!";
    } else if (userChoice === "Paper" && computerChoice === "Scissors") {
        decision = "Opponent Wins, You Lose!";
    } else if (userChoice === "Scissors" && computerChoice === "Rock") {
        decision = "Opponent Wins, You Lose!";
    } else {
        decision = "You Win!";
    }
    decisionDisplay.innerHTML = decision;
}
