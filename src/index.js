/* Switch Seventeen Player */
document.querySelector(".reload-btn").addEventListener("click", function svtNameReload(event) {
    /* Switch button animation */
    this.classList.add("reload-btn-animation");

    /* Generate random number to switch seventeen player */

    let randomNumber = Math.floor(Math.random() * 13) + 1;
    /* Randomly switch seventeen player */

    for( let i = 0; i <= randomNumber; i++) {

		let svtImage = document.querySelector(".svt-img");
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

/* Carat's Name Input */

document.querySelector(".rename").addEventListener("click", function caratNameInput() {
    const caratCardName = document.querySelector(".carat-name");
    const getCaratName = prompt("What's your name?");
    
    caratCardName.textContent = getCaratName;

    // Code for characters limit on names
});


/* Player Selection */

function playerSelect() {
    const playerRockBtn = document.querySelector(".carat-rock-btn");
    const playerPaperBtn = document.querySelector(".carat-paper-btn");
    const playerScissorsBtn = document.querySelector(".carat-scissors-btn");
    let choicesArray = [playerRockBtn, playerPaperBtn, playerScissorsBtn];
    //- Click each button, should console.log rock paper or scissors
    choicesArray.forEach(choicesBtn => {
        choicesBtn.addEventListener('click', event => {
            let targetBtn = event.target;
            if(targetBtn.classList.contains("carat-rock-btn")){
                playerRockBtn.classList.add("clicked-btn");
                playerPaperBtn.classList.remove("clicked-btn");
                playerScissorsBtn.classList.remove("clicked-btn");
                // return("rock");
                console.log("rock");
            }
            if(targetBtn.classList.contains("carat-paper-btn")){
                playerPaperBtn.classList.add("clicked-btn");
                playerRockBtn.classList.remove("clicked-btn");
                playerScissorsBtn.classList.remove("clicked-btn");
                // return("paper");
                console.log("paper");
            }
            if(targetBtn.classList.contains("carat-scissors-btn")){
                playerScissorsBtn.classList.add("clicked-btn");
                playerRockBtn.classList.remove("clicked-btn");
                playerPaperBtn.classList.remove("clicked-btn");
                // return("scissors");
                console.log("scissors");
            }
        })
    });
}

/* SEVENTEEN (computer) Play */

function computerSelect() {
    const computerRockBtn = document.querySelector("svt-rock-btn");
    const computerPaperBtn = document.querySelector("svt-paper-btn");
    const computerScissorsBtn = document.querySelector("svt-scissors-btn");
    /* Generate random numbers */
    let svtPlayRandomNum = Math.floor(Math.random() * 3) + 1;

    if (svtPlayRandomNum === 1) {
        // return ("rock")
        // computerRockBtn.classList.add("clicked-btn");
        // computerPaperBtn.classList.remove("clicked-btn");
        // computerScissorsBtn.classList.remove("clicked-btn");
        console.log("rock")
    } else if (svtPlayRandomNum === 2) {
        // return("paper")
        // computerRockBtn.classList.remove("clicked-btn");
        // computerPaperBtn.classList.add("clicked-btn");
        // computerScissorsBtn.classList.remove("clicked-btn");
        console.log("paper")
    }  else if (svtPlayRandomNum === 3) {
        // return("scissors")
        // computerRockBtn.classList.remove("clicked-btn");
        // computerPaperBtn.classList.remove("clicked-btn");
        // computerScissorsBtn.classList.add("clicked-btn");
        console.log("scissors")
    }
}

/* Actual Game */



function playRound() {
    const playerSelection = playerSelect();
    console.log(playerSelection);
    const computerSelection = computerSelect();
    if(computerSelection === playerSelection) {
        console.log("It's a tie!")
        if(playerSelection === "rock"){
                if(computerSelection === "paper"){
                    console.log(svtName + " won this round");
                }
                else if(computerSelection === "scissors"){
                    console.log(getCaratName + " won this round");
                }
            // }
        } else if(playerSelection === "paper"){
                if(computerSelection === "rock"){
                    console.log(getCaratName + " won this round!");
                }
                else if(computerSelection === "scissors"){
                    console.log(svtName + " won this round");
                }
            // }
        } else if(playerSelection === "scissors"){
                if(computerSelection === "rock"){
                    console.log(svtName + " won this round!");
                }
                else if(computerSelection === "paper"){
                    console.log(getCaratName + " won this round!");
                }
        }
    }
}

console.log(playRound());
// console.log(playRound(playerSelection, computerSelection));