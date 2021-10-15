// Ben Jordan
// 10/4/21
// Rock Paper Scissors

function round(e) {
    let human;
    let computer;
    let isWinner = false;

    while (!isWinner) {
        // get data from event
        human = e.target.id;
        computer = generateChoice();

        // evaluate matchup

        if (human === computer) {
            outcome.innerHTML = "The match ends in a tie. Go again!";
        }
        else {
            updateGame(human, computer);
            break;
        }
    }
}

function setMessage(victory, computerChoice, humanChoice) {
    // display matchup
    selection.innerHTML = `You have chosen ${humanChoice}... Computer has chosen ${computerChoice}`; 
    
    // display outcome
    if (victory) {
        outcome.innerHTML = `Victory! ${humanChoice} beats ${computerChoice}.`;
    }
    else {
        outcome.innerHTML = `Defeat! ${computerChoice} beats ${humanChoice}.`;
    }
}

function setScore(human, computer){
    // sets visual score, not values
    score.innerHTML = `${human}-${computer}`;
}

function generateChoice() {
    const OPTIONS = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * 3); // random # from 0, 2
    return OPTIONS[choice];
}

function getWinner(human, computer) {
    let res;
    // rock 
    if (human === "rock") {
        (computer === "scissors") ? res = true : res = false;
    }
    // paper
    else if (human === "paper") {
        (computer === "rock") ? res = true : res = false;
    }
    // scissors
    else {
        (computer === "paper") ? res = true : res = false;
    }
    return res;
}

function updateGame(human, computer) {
    victory = getWinner(human, computer);
    victory ? wins++: losses++; // increment
    setMessage(victory, computer, human);
    setScore(wins, losses);
    if(wins === 5){
        outcome.classList.add("winner");
        endGame(true);
    }
    else if(losses === 5){
        outcome.classList.add("loser");
        endGame(false);
    }
}

function endGame(victory){
    if(victory){
        outcome.innerHTML = "Congratulations, you win!";
    }
    else{
        outcome.innerHTML = "Computer wins! You just got pseudo-randomly owned!";
    }
    wins = 0;
    losses = 0;
    deactivate();
    body.appendChild(playAgain);
    playAgain.addEventListener("click", restart);
}

function restart(e){
    body.removeChild(playAgain);
    init();
}

function activate(){
    buttons.forEach(button => button.addEventListener('click', round));
}

function deactivate(){
    buttons.forEach(button => button.removeEventListener("click", round));
}

function init(){
    setScore(0, 0);
    activate();
    selection.innerHTML = "Make a selection";
    outcome.innerHTML = "";
    outcome.classList.remove("winner", "loser");
}
// Frequently referenced elements
const score = document.querySelector(".score");

const selection = document.querySelector(".selection");

const outcome = document.querySelector(".outcome");

const buttons = Array.from(document.querySelectorAll(".option"));

const body = document.querySelector("body");

// play again button to be frequently removed
let playAgain = document.createElement('button');
    playAgain.classList.add("again");
    playAgain.innerHTML = "Play Again";

// startup

let wins = 0, losses = 0;
init();