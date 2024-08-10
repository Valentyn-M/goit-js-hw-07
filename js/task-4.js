const registerForm = document.querySelector('.login-form');
registerForm.addEventListener('submit', event => {
	event.preventDefault();

	const form = event.target;
	const inputEmailContent = form.elements.email.value.trim();
	const inputPasswordContent = form.elements.password.value.trim();

	if (inputEmailContent === '' || inputPasswordContent === '') {
		return alert('All form fields must be filled in');
	}

	const formObject = {
		email: inputEmailContent,
		password: inputPasswordContent,
	}
	console.log(formObject);

	form.reset();
})
