const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrow_left = document.querySelector(".arrow_left");
const arrow_right = document.querySelector(".arrow_right");
const dots_div = document.querySelector(".dots");
const banner = document.querySelector(".banner-img");
const text = document.querySelector(".slide-text");


arrow_left.addEventListener("click", slideBack);
arrow_right.addEventListener("click", slideNext);
function slideBack(){
	console.log("ok gauche");
};
function slideNext() {
	console.log("ok droite");
};

for (let i = 0; i < slides.length; i++) {
	const dot = document.createElement("div");
	dot.className = "dot";
	dots_div.appendChild(dot);
};
const dots = document.querySelectorAll(".dot");
dots[0].classList.add("dot_selected");
let count = 0;