// Ben Jordan
// 10/4/21
// Rock Paper Scissors

function round() {
    let victory;
    let human;
    let computer;
    let winner = false;

    while (!winner) {
        human = getInput();
        computer = generateChoice();

        console.log(`You have chosen ${human}... Computer has chosen ${computer}`); // display matchup

        // evaluate matchup

        if (human === computer) {
            console.log("The match ends in a tie! Go again.");
        }
        else {
            winner = true;
            victory = getWinner(human, computer); // determine winner
            display(victory, computer, human) // display the outcome
            return victory;
        }
    }
}
function getInput() {
    let raw;
    while (true) {
        raw = prompt("Please input rock, paper or scissors: ").toLowerCase();

        // verify raw string

        if (raw === "rock" || raw === "paper" || raw === "scissors") {
            return raw;
        } else {
            console.log("Please input a valid choice.");
        }
    }
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

function display(victory, computer, human) {
    // Log outcome
    if (victory) {
        console.log(`Victory! ${human} beats ${computer}.`);
    }
    else {
        console.log(`Defeat! ${computer} beats ${human}.`);
    }
}

function game(num) {
    let wins = 0
    const rounds = num;
    let minWins = Math.ceil(rounds / 2); // determine best # of wins out of max rounds

    for (let i = 1; i < rounds + 1; i++) {

        console.log(`Round ${i}:`) // display current round

        if (round()) { // True represents a win
            wins++;
        }

        console.log(`${wins}-${i - wins}`) // print score ex. 1-2

        if (minWins - wins > rounds - i) { // check if the game is won
            console.log(`Better luck next time...you just got pseudo-randomly owned!`);
            break
        }
        else if (wins >= minWins) {
            console.log(`Congratulations! You have won the series with the best ${wins}/${rounds} wins`);
            break
        }
    }
}

game(7);