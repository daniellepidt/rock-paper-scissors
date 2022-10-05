// Defining all constans
// Basic variables
var userScore = 0;
var computerScore = 0;
const smallUser = "user".fontsize(3).sup();
const smallComp = "comp".fontsize(3).sup();
// HTML variables
const userScore_span = document.getElementById("user-score"); //span tag
const computerScore_span = document.getElementById("computer-score"); //span tag
const scoreBoard_div = document.querySelector(".score-board"); //div tag
const result_p = document.querySelector(".result>p"); //div tag
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

// Defining the game
function convertWord(l){
    if (l=="r") return "ROCK";
    if (l=="p") return "PAPER";
    return "SCISSORS";
}
// Defining situations:
// Win
function win(user, comp){
    console.log("WIN");
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${convertWord(user)}${smallUser} beats ${convertWord(comp)}${smallComp}. You win!🐱‍🏍`
    document.getElementById(user).classList.add("green-glow");
    setTimeout(function() {document.getElementById(user).classList.remove('green-glow')}, 500)
}
// Lose
function lose(user, comp){
    console.log("LOSE");
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertWord(user)}${smallUser} loses ${convertWord(comp)}${smallComp}. You lost...😕`
    document.getElementById(user).classList.add("red-glow");
    setTimeout(function() {document.getElementById(user).classList.remove('red-glow')}, 500)
}
// Draw
function draw(user, comp){
    console.log("DRAW")
    result_p.innerHTML = `${convertWord(user)}${smallUser} equals ${convertWord(comp)}${smallComp}. It's a draw😐`
    document.getElementById(user).classList.add("gray-glow");
    setTimeout(function() {document.getElementById(user).classList.remove('gray-glow')}, 500)
}
// Defining computer choice
function getComputerChoice(){
    const choices = ['r','p','s']
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber]
}
// Defining user choice and the results of the game
function game(userChoice){
    const computerChoice = getComputerChoice()
    console.log("computer chose " + computerChoice)
    // The if way and the switch way
    /*if ((userChoice=="r" && computerChoice=="r") || (userChoice=="p" && computerChoice=="p") || (userChoice=="s" && computerChoice=="s")){
        return "even"
    } else if ((userChoice=="r" && computerChoice=="p") || (userChoice=="p" && computerChoice=="s") || (userChoice=="s" && computerChoice=="r")){
        return "lose"
    } else {
        return "win"
    }*/
    switch (userChoice+computerChoice){
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice,computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,computerChoice);
            break;
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,computerChoice);
            break;
    }
}
// Geetting user's choice
function main(){
    // Defining Clicks
    rock_div.addEventListener('click', function(){
        console.log("clicked on rock");
        game("r");
    })

    paper_div.addEventListener('click', function(){
        console.log("clicked on paper");
        game("p");
    })

    scissors_div.addEventListener('click', function(){
        console.log("clicked on scissors");
        game("s");
    })
}

main();

