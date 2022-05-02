/* Switch Seventeen Player */
let getReloadClass = document.querySelector(".reload"); // div for reload
let reloadBtn = document.querySelector('.reload-btn'); // button for reload

/* Variable for image of seventeen player */
let svtImage
/* Variable for name of seventeen player */
let svtName = '';

getReloadClass.addEventListener("click", function svtNameReload(event) {
    /* Switch button animation */
    reloadBtn.classList.add("reload-btn-animation");
    if(reloadBtn.classList.contains("reload-btn-animation")) {
        getReloadClass.classList.add("clicked-btn");
        getReloadClass.classList.remove("unclicked-btn");
    }


    /* Generate random number to switch seventeen player */

    let randomNumber = Math.floor(Math.random() * 13) + 1;
    /* Randomly switch seventeen player */

    for( let i = 0; i <= randomNumber; i++) {

        /* Select image of seventeen player */
        svtImage = document.querySelector(".svt-img");
        /* Select name of seventeen player */
        svtName = document.querySelector(".svt-name");

		switch(true) {
			case (i === 1):
				svtImage.src = require("./images/svt-pilot-1.jpg");
				svtName.textContent = "Seungcheol";
			break;
			case(i === 2):
                svtImage.src = require("./images/svt-pilot-2.jpg");
                svtName.textContent = "Jeonghan";
			break;
			case(i === 3):
                svtImage.src = require("./images/svt-pilot-3.jpg");
                svtName.textContent = "Joshua";
			break;
			case(i === 4):
                svtImage.src = require("./images/svt-pilot-4.jpg");
                svtName.textContent = "Junhui";
			break;
			case(i === 5):
                svtImage.src = require("./images/svt-pilot-5.jpg");
                svtName.textContent = "Hoshi";
			break;
			case(i === 6):
                svtImage.src = require("./images/svt-pilot-6.jpg");
                svtName.textContent = "Wonwoo";
			break;
			case(i === 7):
                svtImage.src = require("./images/svt-pilot-7.jpg");
                svtName.textContent = "Jihoon";
			break;
			case(i === 8):
                svtImage.src = require("./images/svt-pilot-8.jpg");
                svtName.textContent = "Minghao";
			break;
			case(i == 9):
                svtImage.src = require("./images/svt-pilot-9.jpg");
                svtName.textContent = "Mingyu";
			break;
			case(i === 10):
                svtImage.src = require("./images/svt-pilot-10.jpg");
                svtName.textContent = "Dokyeom";
			break;
			case(i === 11):
                svtImage.src = require("./images/svt-pilot-11.jpg");
                svtName.textContent = "Seungkwan";
			break;
			case(i === 12):
                svtImage.src = require("./images/svt-pilot-12.jpg");
                svtName.textContent = "Vernon";
			break;
			case(i === 13):
                svtImage.src = require("./images/svt-pilot-13.jpg");
                svtName.textContent = "Dino";
			break;
			default:
				svtImage.src = require("./images/svt-pilot-13.jpg");
				svtName.textContent = "Seventeen";
			break;
		}
	}
});

/* Carat's Name Input */

let getRenameClass = document.querySelector(".rename");
let getCaratName

getRenameClass.addEventListener("click", function () {

    let caratCardName = document.querySelector(".player-name");
    getCaratName = prompt("What's your name?");
    caratCardName.textContent = getCaratName;
    // Code for characters limit on names
});

/* Generate random numbers for computer play */

let computerSelection

let rock = "rock";
let paper = "paper";
let scissors = "scissors";

function computerPlay() {
    computerSelection = Math.floor(Math.random() * 3) + 1;
    let computerChoices = [rock, paper, scissors];
    if (computerSelection === 1) {
        // console.log(computerChoices[0])
        return(computerChoices[0])
    }
    if (computerSelection === 2) {
        // console.log(computerChoices[1])
        return(computerChoices[1])
    }
    if (computerSelection === 3) {
        // console.log(computerChoices[2])
        return(computerChoices[2])
    }
}


const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
let btnChoices = [rockBtn, paperBtn, scissorsBtn];
let playerSelection 

function playerButtons() {
    btnChoices.forEach(choices => 
        {choices.addEventListener('click', (e) => {

            playerSelection = e.target;
    
            if(playerSelection.classList.contains("rock")){
                playRound("rock");
                console.log("rock");
            }
            if(playerSelection.classList.contains("paper")){
                playRound("paper");
                console.log("paper");
            }
            if(playerSelection.classList.contains("scissors")){
                playRound("scissors");
                console.log("scissors");
            }
        
        })})
}
console.log(playerButtons());


/* Main Game */
function playRound(playerSelect) {
    console.log(computerPlay());
    let computerSelect = computerPlay();
    
    let computerScore = 0;
    let playerScore = 0;

    const result = document.querySelector(".result-text");
    const playerScoreNum = document.querySelector(".player-score");
    const computerScoreNum = document.querySelector(".computer-score");

    /* Select players name */
    const playerName = document.querySelector(".player-name").textContent;
    const computerName = document.querySelector(".svt-name").textContent;

    if(playerSelect === computerSelect){
        result.textContent = "It's a tie!";
        console.log( "It's a tie!")
    } else if(playerSelect === "rock"){
        if(computerSelect === "paper") {
            result.textContent = (computerName + " won this round!");
            computerScore++
            computerScoreNum.textContent = computerScore;

            console.log(computerName + " won this round!")
        } else {
            result.textContent = (playerName + " won this round!");
            playerScore++;
            playerScoreNum.textContent = playerScore;

            console.log(playerName + " won this round!");
        }
    } else if(playerSelect === "paper"){
        if(computerSelect === "scissors"){
            result.textContent = (computerName + " won this round!");
            computerScore++
            computerScoreNum.textContent = computerScore;

            console.log(computerName + " won this round!");
        } else {
            result.textContent = (playerName + " won this round!");
            playerScore++
            computerScoreNum.textContent = playerScore;

            console.log(playerName + " won this round!");
        }
    } else if(playerSelect === "scissors"){
        if (computerSelect ===  "rock") {
            result.textContent = (computerName + " won this round!");
            computerScore++
            computerScoreNum.textContent = computerScore;

            console.log(computerName + " won this round!");
        } else {
            result.textContent = (playerName + " won this round!");
            playerScore++
            playerScoreNum.textContent = playerScore;

            console.log(playerName + " won this round!");
        }
    }
}