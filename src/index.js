document.querySelector(".reload-btn").addEventListener("click", function handleClick(event) {
    event.target.classList.toggle("reload-btn-animation");

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