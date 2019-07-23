const inputElements = document.querySelectorAll('input');

const usernameElement = document.getElementById('username');
const passwordElement = document.getElementById('password');

const validateInput = (event) => {
	const reg = /\d+/g;
	if (reg.test(usernameElement.value)) {
		usernameElement.classList.remove('invalid');
		usernameElement.classList.add('valid');
	} else {
		usernameElement.classList.remove('valid');
		usernameElement.classList.add('invalid');
	}
};

inputElements.forEach((element) => {
	element.addEventListener('change', validateInput);
});
