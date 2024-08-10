function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const buttonColor = document.querySelector('.change-color');
buttonColor.addEventListener('click', changeColor);

function changeColor(event) {
	const newColor = getRandomHexColor();
	const outputColor = document.querySelector('.color');
	outputColor.textContent = newColor;
	document.body.style.backgroundColor = newColor;
}