/* Switch Seventeen Player */
let getReloadClass = document.querySelector(".reload"); // div for reload
let reloadBtn = document.querySelector('.reload-btn'); // button for reload

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
        let svtImage = document.querySelector(".svt-img");
        /* Select name of seventeen player */
        let svtName = document.querySelector(".svt-name");

		switch(true) {
			case (i === 1):
				svtImage.src = require("./images/svt-pilot-1.jpg");
				svtName.textContent = "S.coups";
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
                svtName.textContent = "Jun";
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
                svtName.textContent = "Woozi";
			break;
			case(i === 8):
                svtImage.src = require("./images/svt-pilot-8.jpg");
                svtName.textContent = "The8";
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

/* Player's Name Input */
let getRenameClass = document.querySelector(".rename");

getRenameClass.addEventListener("click", function () {
    let caratCardName = document.querySelector(".player-name");
    let getCaratName = prompt("What's your name?");
    // Capitalized player's name input 
    const capitalizedName = capitalizedFirstLetter(getCaratName);

    caratCardName.textContent = capitalizedName;
});

/* Function to capitalize first letter of player's name input */
const capitalizedFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);

/* Generate random numbers for computer play */
const computerPlay = () => {
    let computerSelection = Math.floor(Math.random() * 3);
    if (computerSelection === 0) {
        return("rock")
    }
    if (computerSelection === 1) {
        return("paper")
    }
    if (computerSelection === 2) {
        return("scissors")
    }
}

/* Return rock, paper or scissors when player clicked button */
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
let btnChoices = [rockBtn, paperBtn, scissorsBtn];

const playerButtons = () => {
    btnChoices.forEach(choices => 
        {choices.addEventListener('click', (e) => {

            let playerSelection = e.target;
    
            if(playerSelection.classList.contains("rock")){
                rockBtn.classList.add("clicked-btn");
                paperBtn.classList.remove("clicked-btn");
                scissorsBtn.classList.remove("clicked-btn");
                playRound("rock");
                console.log("rock");
            }
            if(playerSelection.classList.contains("paper")){
                rockBtn.classList.remove("clicked-btn");
                paperBtn.classList.add("clicked-btn");
                scissorsBtn.classList.remove("clicked-btn");
                playRound("paper");
                console.log("paper");
            }
            if(playerSelection.classList.contains("scissors")){
                rockBtn.classList.remove("clicked-btn");
                paperBtn.classList.remove("clicked-btn");
                scissorsBtn.classList.add("clicked-btn");
                playRound("scissors");
                console.log("scissors");
            }
        
        })})
}
console.log(playerButtons());


/* Main Game */

const result = document.querySelector(".result-text");
let computerScore = 0;
let playerScore = 0;

const playRound = (playerSelect) => {
    const play = computerPlay();
    let computerSelect = play;
    console.log(play);

    const playerScoreNum = document.querySelector(".player-score");
    const computerScoreNum = document.querySelector(".computer-score");

    // Select players' name 
    let playerName = document.querySelector(".player-name").textContent;
    let computerName = document.querySelector(".svt-name").textContent;

    if(playerSelect === computerSelect){
        result.textContent = "It's a tie!";
        console.log( "It's a tie!")
    } else if(playerSelect === "rock"){
        if(computerSelect === "paper") {
            result.textContent = `${computerName} chose paper! ${playerName} " lost this round.`;
            computerScore++
            computerScoreNum.textContent = computerScore;

            console.log(`${computerName} chose paper! ${playerName} " lost this round.`)
        } else {
            result.textContent = `${computerName} chose scissors! ${playerName} won this round.`;
            playerScore++;
            playerScoreNum.textContent = playerScore;

            console.log(`${computerName} chose scissors! ${playerName} won this round.`);
        }
    } else if(playerSelect === "paper"){
        if(computerSelect === "scissors"){
            result.textContent = `${computerName} chose scissors! ${playerName} lost this round.`;
            computerScore++
            computerScoreNum.textContent = computerScore;

            console.log(`${computerName} chose scissors! ${playerName} lost this round.`);
        } else {
            result.textContent = `${computerName} chose rock! ${playerName} won this round.`;
            playerScore++
            computerScoreNum.textContent = playerScore;

            console.log(`${computerName} chose rock! ${playerName} won this round.`);
        }
    } else if(playerSelect === "scissors"){
        if (computerSelect ===  "rock") {
            result.textContent = `${computerName} chose rock! ${playerName} lost this round.`;
            computerScore++
            computerScoreNum.textContent = computerScore;

            console.log(`${computerName} chose rock! ${playerName} lost this round.`);
        } else {
            result.textContent = `${computerName} chose paper! ${playerName} won this round.`;
            playerScore++
            playerScoreNum.textContent = playerScore;

            console.log(`${computerName} chose paper! ${playerName} won this round.`);
        }
    }
    gameRound();
    gameOver();
}

/* Function to count rounds */
let rounds = 0;
const gameRound = () => {
    const numOfRounds = document.querySelector(".num-of-rounds");
    rounds++
    numOfRounds.textContent = rounds;
}

let tryAgainButton = document.querySelector(".try-again");

/* Function when the game is over */
const gameOver = () => {

    let playButtons = document.querySelector(".play-buttons");
    let roundLabel = document.querySelector(".round-label");

    if(rounds === 10) {
        playButtons.style.display = "none";
        tryAgainButton.style.display = "block";
        if(tryAgainButton.style.display = "block") {
            reloadPage();
        }
        roundLabel.textContent = "Final";

        if(roundLabel.textContent.includes("Final")){

            // Select players' name 
            let playerName = document.querySelector(".player-name").textContent;
            let computerName = document.querySelector(".svt-name").textContent;

            if(playerScore > computerScore){
                result.textContent = (playerName + " won! Baksu!");
            } else {
                result.textContent = (computerName + " won! Try again next time!");
            }
        }
    }

}

/* Function to reload page */
const reloadPage = () => {
    tryAgainButton.addEventListener("click", (e) => {
        window.location.reload();
    })
}