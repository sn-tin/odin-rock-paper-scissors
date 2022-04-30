/* Switch Seventeen Player */
let getReloadClass = document.querySelector(".reload");
let reloadBtn = document.querySelector('.reload-btn');

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

let getRenameClass = document.querySelector(".rename");

getRenameClass.addEventListener("click", function caratNameInput() {
    const caratCardName = document.querySelector(".player-name");
    const getCaratName = prompt("What's your name?");
    caratCardName.textContent = getCaratName;
    // Code for characters limit on names
});

/* Generate random numbers for computer play */

function computerPlay() {
    let computerSelection = Math.floor(Math.random() * 4);
    let computerChoices = ["rock", "paper", "scissors"]
    if (computerSelection === 1) {
        console.log(computerChoices[0])
    }
    if (computerSelection === 2) {
        console.log(computerChoices[1])
    }
    if (computerSelection === 3) {
        console.log(computerChoices[2])
    }
}

/* Main Game */

function playRound(playerSelect, computerSelect) {
    computerSelect = computerPlay();
    playerSelect = this.dataset.button;
}