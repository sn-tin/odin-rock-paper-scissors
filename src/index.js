document.querySelector(".reload-btn").addEventListener("click", function handleClick(event) {
    event.target.classList.toggle("reload-btn-animation");

    let randomNumber = Math.floor(Math.random() * 13) + 1;

    for( let i = 0; i <= randomNumber; i++) {

		let svtImage = document.querySelector(".svt-img").src;
		let svtName = document.querySelector(".svt-name").textContent;

		switch(true) {
			case (i === 1):
				svtImage = "./images/svt-pilot-1.jpg";
				svtName = "Choi Seungcheol";
			break;
			case(i === 2):
				svtImage = "./images/svt-pilot-2.jpg";
				svtName = "Yoon Jeonghan";
			break;
			case(i === 3):
				svtImage = "./images/svt-pilot-3.jpg";
				svtName = "Joshua Hong";
			break;
			case(i === 4):
				svtImage = "./images/svt-pilot-4.jpg";
				svtName = "Wen Junhui";
			break;
			case(i === 5):
				svtImage = "./images/svt-pilot-5.jpg";
				svtName = "Kwon Hoshi";
			break;
			case(i === 6):
				svtImage = "./images/svt-pilot-6.jpg";
				svtName = "Jeon Wonwoo";
			break;
			case(i === 7):
				svtImage = "./images/svt-pilot-7.jpg";
				svtName = "Lee Jihoon";
			break;
			case(i === 8):
				svtImage = "./images/svt-pilot-8.jpg";
				svtName = "Xu Minghao";
			break;
			case(i == 9):
				svtImage = "./images/svt-pilot-9.jpg";
				svtName = "Kim Mingyu";
			break;
			case(i === 10):
				svtImage = "./images/svt-pilot-10.jpg";
				svtName = "Lee Dokyeom";
			break;
			case(i === 11):
				svtImage = "./images/svt-pilot-11.jpg";
				svtName = "Boo Seungkwan";
			break;
			case(i === 12):
				svtImage = "./images/svt-pilot-12.jpg";
				svtName = "Vernon Chwe";
			break;
			case(i === 13):
				svtImage = "./images/svt-pilot-13.jpg";
				svtName = "Lee Dino";
			break;
			default:
				svtImage = "./images/svt-pilot-13.jpg";
				svtName = "Team SVT";
			break;
		}
	}
});