const output = document.querySelector('#name-output');
const outputContent = output.textContent;

const inputElement = document.querySelector('#name-input');
inputElement.addEventListener('input', pasteName);

function pasteName(event) {
	const inputValue = event.currentTarget.value.trim();
	if (inputValue) {
		output.textContent = inputValue;
	} else {
		output.textContent = outputContent;
	}
}