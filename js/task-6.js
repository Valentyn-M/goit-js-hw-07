function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const inputNumber = document.querySelector('input[type="number"]');
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

buttonCreate.addEventListener('click', createCollection);

function createCollection() {
	const inputNumberValue = inputNumber.value;
	const inputNumberValueMin = Number(inputNumber.min);
	const inputNumberValueMax = Number(inputNumber.max);
	if (inputNumberValue >= inputNumberValueMin && inputNumberValue <= inputNumberValueMax) {
		createBoxes(inputNumberValue);
		inputNumber.value = '';
	}
}

function createBoxes(amount) {
	removeCollection();

	let squareWidth = 30;
	let squareHeight = 30;
	let squares = '';
	for (let i = 0; i < amount; i++) {
		const square = `<div class="square" style="background-color: ${getRandomHexColor()}; width: ${squareWidth}px; height: ${squareHeight}px;"></div>`;
		squares += square;
		squareWidth += 10;
		squareHeight += 10;
	}

	boxesContainer.insertAdjacentHTML("beforeend", squares);
}

buttonDestroy.addEventListener('click', removeCollection);

function removeCollection() {
	boxesContainer.innerHTML = '';
}