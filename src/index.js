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
				svtName.textContent = "Choi Seungcheol";
			break;
			case(i === 2):
                svtImage.src = require("./images/svt-pilot-2.jpg");
                svtName.textContent = "Yoon Jeonghan";
			break;
			case(i === 3):
                svtImage.src = require("./images/svt-pilot-3.jpg");
                svtName.textContent = "Joshua Hong";
			break;
			case(i === 4):
                svtImage.src = require("./images/svt-pilot-4.jpg");
                svtName.textContent = "Wen Junhui";
			break;
			case(i === 5):
                svtImage.src = require("./images/svt-pilot-5.jpg");
                svtName.textContent = "Kwon Hoshi";
			break;
			case(i === 6):
                svtImage.src = require("./images/svt-pilot-6.jpg");
                svtName.textContent = "Jeon Wonwoo";
			break;
			case(i === 7):
                svtImage.src = require("./images/svt-pilot-7.jpg");
                svtName.textContent = "Lee Jihoon";
			break;
			case(i === 8):
                svtImage.src = require("./images/svt-pilot-8.jpg");
                svtName.textContent = "Xu Minghao";
			break;
			case(i == 9):
                svtImage.src = require("./images/svt-pilot-9.jpg");
                svtName.textContent = "Kim Mingyu";
			break;
			case(i === 10):
                svtImage.src = require("./images/svt-pilot-10.jpg");
                svtName.textContent = "Lee Dokyeom";
			break;
			case(i === 11):
                svtImage.src = require("./images/svt-pilot-11.jpg");
                svtName.textContent = "Boo Seungkwan";
			break;
			case(i === 12):
                svtImage.src = require("./images/svt-pilot-12.jpg");
                svtName.textContent = "Vernon Chwe";
			break;
			case(i === 13):
                svtImage.src = require("./images/svt-pilot-13.jpg");
                svtName.textContent = "Lee Dino";
			break;
			default:
				svtImage.src = require("./images/svt-pilot-13.jpg");
				svtName.textContent = "Team SVT";
			break;
		}
	}
});

/* Carat's Name Input */

document.querySelector(".rename").addEventListener("click", function caratNameInput() {
    let caratCardName = document.querySelector(".carat-name");
    let getCaratName = prompt("What's your name?");

    caratCardName.textContent = getCaratName;

    // Code for characters limit on names
});


/* SEVENTEEN (computer) Play */

function seventeenPlay() {
    let svtPlayRandomNum = Math.floor(Math.random() * 3);

    if (svtPlayRandomNum === 0) {
        // result ("rock")
        console.log("rock")
    } else if (svtPlayRandomNum === 1) {
        console.log("paper")
    } else {
        console.log("scissors")
    }
}

/* Global variables for button choices */

const playerRockBtn = document.querySelector(".carat-rock");
const playerPaperBtn = document.querySelector(".carat-paper");
const playerScissorsBtn = document.querySelector(".carat-scissors");
let choicesArray = [playerRockBtn, playerPaperBtn, playerScissorsBtn];
//- Click each button, should console.log rock paper or scissors
choicesArray.forEach(choicesBtn => {
	choicesBtn.addEventListener('click', event => {
        let targetBtn = event.target;
        if(targetBtn.classList.contains("carat-rock")){
            playerRockBtn.classList.add("clicked-btn");
            playerPaperBtn.classList.remove("clicked-btn");
            playerScissorsBtn.classList.remove("clicked-btn");
            // return("rock");
            console.log("rock");
        }
        if(targetBtn.classList.contains("carat-paper")){
            playerPaperBtn.classList.add("clicked-btn");
            playerRockBtn.classList.remove("clicked-btn");
            playerScissorsBtn.classList.remove("clicked-btn");
            // return("paper");
            console.log("paper");
        }
        if(targetBtn.classList.contains("carat-scissors")){
            playerScissorsBtn.classList.add("clicked-btn");
            playerRockBtn.classList.remove("clicked-btn");
            playerPaperBtn.classList.remove("clicked-btn");
            // return("scissors");
            console.log("scissors");
        }
	})
});