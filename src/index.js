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

/* Player's Name Input */
getRenameClass.addEventListener("click", function () {
    let getRenameClass = document.querySelector(".rename");
    let caratCardName = document.querySelector(".player-name");
    let getCaratName = prompt("What's your name?");
    caratCardName.textContent = getCaratName;
});

/* Generate random numbers for computer play */
function computerPlay() {
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
function playerButtons() {
    btnChoices.forEach(choices => 
        {choices.addEventListener('click', (e) => {

            const rockBtn = document.querySelector(".rock");
            const paperBtn = document.querySelector(".paper");
            const scissorsBtn = document.querySelector(".scissors");
            let btnChoices = [rockBtn, paperBtn, scissorsBtn];

            let playerSelection = e.target;
    
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

    /* Select players' name */
    let playerName = document.querySelector(".player-name").textContent;
    let computerName = document.querySelector(".svt-name").textContent;

    if(playerSelect === computerSelect){
        result.textContent = "It's a tie!";
        console.log( "It's a tie!")
    } else if(playerSelect === "rock"){
        if(computerSelect === "paper") {
            result.textContent = (computerName + " chose paper! " + computerName + " won this round.");
            computerScore++
            computerScoreNum.textContent = computerScore;

            console.log(computerName + " chose paper! " + computerName + " won this round.")
        } else {
            result.textContent = (computerName + " chose scissors! " + playerName + " won this round.");
            playerScore++;
            playerScoreNum.textContent = playerScore;

            // console.log(playerName + " won this round!");
            console.log(computerName + " chose scissors! " + playerName + " won this round.");
        }
    } else if(playerSelect === "paper"){
        if(computerSelect === "scissors"){
            // result.textContent = (computerName + " won this round!");
            result.textContent = (computerName + " chose scissors! " + computerName + " won this round.");
            computerScore++
            computerScoreNum.textContent = computerScore;

            console.log(computerName + " chose scissors! " + computerName + " won this round.");
            // console.log(computerName + " won this round!");
        } else {
            result.textContent = (computerName + " chose rock! " + playerName + " won this round.");
            playerScore++
            computerScoreNum.textContent = playerScore;

            console.log(computerName + " chose rock! " + playerName + " won this round.");
            // console.log(playerName + " won this round!");
        }
    } else if(playerSelect === "scissors"){
        if (computerSelect ===  "rock") {
            result.textContent = (computerName + " chose rock! " + computerName + " won this round.");
            computerScore++
            computerScoreNum.textContent = computerScore;

            console.log(computerName + " chose rock! " + computerName + " won this round.");
            // console.log(computerName + " won this round!");
        } else {
            result.textContent = (computerName + " chose paper! " + playerName + " won this round.");
            // result.textContent = (playerName + " won this round!");
            playerScore++
            playerScoreNum.textContent = playerScore;

            console.log(computerName + " chose paper! " + playerName + " won this round.");
            // console.log(playerName + " won this round!");
        }
    }
}