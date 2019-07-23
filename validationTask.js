const inputElements = document.querySelectorAll('input');

const usernameElement = document.getElementById('username');
const passwordElement = document.getElementById('password');

function validateInput() {
	console.dir(this.id)
	const refObj = {
		username: /[^a-z0-9\s-']/,
		firstname: /[^a-z]+/i,
		lastname: /[^a-z]+/i

	}
	console.log(!refObj[this.id])
	if (!refObj[this.id].test(this.value)) {
		this.classList.remove('invalid');
		this.classList.add('valid');

	} else {
		this.classList.remove('valid');
		this.classList.add('invalid');
		const errMsg = document.createElement('p')
		errMsg.innerText = "Incorrect input"
		this.parentNode[0].append(errMsg)
		this.parentNode.appendChild(errMsg)

		// console.dir(this.parentNode.appendChild(errMsg))
	}
};

inputElements.forEach((element) => {
	element.addEventListener('change', validateInput);
});
