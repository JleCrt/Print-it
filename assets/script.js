// Tableau
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

// Variables 
const arrow_left = document.querySelector(".arrow_left");
const arrow_right = document.querySelector(".arrow_right");
const dots_div = document.querySelector(".dots");
const banner = document.querySelector(".banner-img");
const text = document.querySelector(".slide-text");

// Ecouteurs d'événements au clic sur les flèches
arrow_left.addEventListener("click", img_back);
arrow_right.addEventListener("click", img_next);

// Boucles qui créée les points du slide
for (let i = 0; i < slides.length; i++) {
	const dot = document.createElement("div");
	dot.className = "dot";
	dots_div.appendChild(dot);
	//Ecouteurs d'événements au clic sur les points
	dot.addEventListener("click", () => {
		update_carrousel(count, i);
	});
};

// Sélection point de navigation
const dots = document.querySelectorAll(".dot");
dots[0].classList.add("dot_selected");

// Compteur index slide carrousel 
let count = 0;

// Fonction d'update carrousel et dots 
function update_carrousel(count_remove, count_add) {
	count = count_add; 
	dots[count_remove].classList.remove("dot_selected");
	banner.src = "./assets/images/slideshow/" + slides[count_add].image;
	text.innerHTML = slides [count_add].tagLine;
	dots[count_add].classList.add("dot_selected");
}

// Fonction slide suivant
function img_next() {
	let count_add; 
	if (count < slides.length - 1) {
		count_add = count + 1;
	} else {
		count_add = 0; 
	}
	update_carrousel(count, count_add);
}

// Fonction slide précédent
function img_back() {
	let count_add; 
	if (count === 0) {
		count_add = slides.length -1;
	} else {
		count_add = count - 1; 
	}
	update_carrousel(count, count_add);
}