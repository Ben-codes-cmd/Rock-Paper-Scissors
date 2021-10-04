function round(){
    let victory;
    let human;
    let computer;
    let winner = false;
    // game loop, while no winner has been declared
    while (!winner) {
        // gather input
        human = getInput();
        computer = generateChoice();
        // display matchup
        console.log(`You have chosen ${human}... Computer has chosen ${computer}`);
        // evaluate matchup
        if (human === computer) {
            // if tie
            console.log("The match ends in a tie! Go again.");
        }
        else{
            winner = true;
            // determine winner
            victory = getWinner(human, computer);
            // display the outcome
            display(victory, computer, human)
            return victory;
        }
    }
}
function getInput(){
    let raw;
    while (true){
        raw = prompt("Please input rock, paper or scissors: ").toLowerCase();
        // verify valid option
        if (raw === "rock" || raw === "paper" || raw === "scissors"){
            return raw;
        }else{
            console.log("Please input a valid choice.");
        }
    }
}

function generateChoice() {
    const options = ["rock", "paper", "scissors"];
    // random # from 0, 2
    let choice = Math.floor(Math.random() * 3);
    return options[choice];
}

function getWinner(human, computer) {
    let res;
    // Human chooses rock 
    if (human === "rock"){
        (computer === "scissors") ? res = true : res = false;
    }
    // Human chooses paper
    else if (human === "paper"){
        (computer === "rock") ? res = true : res = false;
    }
    // Human chooses scissors
    else{
        (computer === "paper") ? res = true : res = false;
    }
    return res;
}

function display(victory, computer, human){
    // winner
    if (victory){
        console.log(`Victory! ${human} beats ${computer}.`);
    }
    // loser
    else{
        console.log(`Defeat! ${computer} beats ${human}.`);
    }
}

// execution

let wins = 0
const rounds = 7;
let minWins = Math.ceil(rounds/2); // determine best # of wins out of max rounds

for(let i = 1; i < rounds + 1; i++){
    console.log(`Round ${i}:`) // display the current round
    if(round()){
        // if the human wins, increment
        wins++;
    }
    // print score
    console.log(`${wins}-${i - wins}`)
    // check if the game is a lost cause
    if (minWins - wins > rounds - i){
        break
    }
}
if (wins >= minWins){
    console.log(`Congratulations! You have won the series with the best ${wins}/${rounds} wins`);
}
else{
    console.log(`Better luck next time...you lost the series with ${wins} wins`)
}