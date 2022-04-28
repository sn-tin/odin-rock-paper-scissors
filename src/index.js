/* Switch Seventeen Player */
document.querySelector(".reload-btn").addEventListener("click", function svtNameReload(event) {
    this.classList.toggle("reload-btn-animation");

    let randomNumber = Math.floor(Math.random() * 13) + 1;

    for( let i = 0; i <= randomNumber; i++) {

		let svtImage = document.querySelector(".svt-img");
		let svtName = document.querySelector(".svt-name");

		switch(true) {
			case (i === 1):
				// svtImage.src = "./images/svt-pilot-1.jpg";
                svtImage.setAttribute("src", "./images/svt-pilot-1.jpg");
				svtName.textContent = "Choi Seungcheol";
			break;
			case(i === 2):
                // svtImage.src = "./images/svt-pilot-2.jpg";
                svtImage.setAttribute("src", "./images/svt-pilot-2.jpg");
                svtName.textContent = "Yoon Jeonghan";
			break;
			case(i === 3):
                // svtImage.src = "./images/svt-pilot-3.jpg";
                svtImage.setAttribute("src", "./images/svt-pilot-3.jpg");
                svtName.textContent = "Joshua Hong";
			break;
			case(i === 4):
                // svtImage.src = "./images/svt-pilot-4.jpg";
                svtImage.setAttribute("src", "./images/svt-pilot-4.jpg");
                svtName.textContent = "Wen Junhui";
			break;
			case(i === 5):
                // svtImage.src = "./images/svt-pilot-5.jpg";
                svtImage.setAttribute("src", "./images/svt-pilot-5.jpg");
                svtName.textContent = "Kwon Hoshi";
			break;
			case(i === 6):
                // svtImage.src = "./images/svt-pilot-6.jpg";
                svtImage.setAttribute("src", "./images/svt-pilot-6.jpg");
                svtName.textContent = "Jeon Wonwoo";
			break;
			case(i === 7):
                // svtImage.src = "./images/svt-pilot-7.jpg";
                svtImage.setAttribute("src", "./images/svt-pilot-7.jpg");
                svtName.textContent = "Lee Jihoon";
			break;
			case(i === 8):
                // svtImage.src = "./images/svt-pilot-8.jpg";
                svtImage.setAttribute("src", "./images/svt-pilot-8.jpg");
                svtName.textContent = "Xu Minghao";
			break;
			case(i == 9):
                // svtImage.src = "./images/svt-pilot-9.jpg";
                svtImage.setAttribute("src", "./images/svt-pilot-9.jpg");
                svtName.textContent = "Kim Mingyu";
			break;
			case(i === 10):
                // svtImage.src = "./images/svt-pilot-10.jpg";
                svtImage.setAttribute("src", "./images/svt-pilot-10.jpg");
                svtName.textContent = "Lee Dokyeom";
			break;
			case(i === 11):
                // svtImage.src = "./images/svt-pilot-11.jpg";
                svtImage.setAttribute("src", "./images/svt-pilot-11.jpg");
                svtName.textContent = "Boo Seungkwan";
			break;
			case(i === 12):
                // svtImage.src = "./images/svt-pilot-12.jpg";
                svtImage.setAttribute("src", "./images/svt-pilot-12.jpg");
                svtName.textContent = "Vernon Chwe";
			break;
			case(i === 13):
                // svtImage.src = "./images/svt-pilot-13.jpg";
                svtImage.setAttribute("src", "./images/svt-pilot-13.jpg");
                svtName.textContent = "Lee Dino";
			break;
			default:
				// svtImage.src = "./images/svt-pilot-13.jpg";
                svtImage.setAttribute("src", "./images/svt-pilot-13.jpg");
				svtName.textContent = "Team SVT";
			break;
		}
	}
});

/* Carat's Name Input */
/*
document.querySelector(".rock").addEventListener("click", function caratNameInput() {
    let caratCardName = document.querySelector(".carat-name");
    let getCaratName = prompt("What's your name?");

    caratCardName.textContent = getCaratName;
});
*/

/* 
* SEVENTEEN (computer) Play 
* svt = Seventeen
*/

function seventeenPlay() {

    let svtPlayRandomNum = Math.floor(Math.random() * 3);

    if (svtPlayRandomNum === 0) {
        result ("rock")
    } else if (svtPlayRandomNum === 1) {
        result ("paper")
    } else {
        result ("scissors")
    }
}

function caratPlay() {
    let svtChoose = seventeenPlay();

    /* Carat choose button */
    let caratPlayRock = document.querySelector(".carat-rock-btn");
	let caratPlayPaper = document.querySelector(".carat-paper-btn");
	let caratPlayScissors = document.querySelector(".carat-scissors-btn");

    /* Seventeen choose button */
    let svtPlayRock = document.querySelector(".svt-rock-btn");
    let svtPlayPaper = document.querySelector(".svt-paper-btn");
    let svtPlayScissors = document.querySelector(".svt-scissors-btn");
}