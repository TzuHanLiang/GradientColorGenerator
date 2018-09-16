let colorDisplay = document.querySelector("#colorDisplay");
let textDisplay = document.querySelector("#textDisplay");
let topColor = document.querySelector("#topColor");
let bottomColor = document.querySelector("#bottomColor");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

setGradient();

function setGradient(){
	colorDisplay.style.background = 
	"linear-gradient(to bottom, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	topColor.textContent = color1.value;
	bottomColor.textContent = color2.value;
}