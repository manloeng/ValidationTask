const inputElements = document.querySelectorAll('input');

const usernameElement = document.getElementById('username');
const passwordElement = document.getElementById('password');

function validateInput() {
	//refactored the reg obj to take reg and msg
	const refObj = {
		username: {
			reg: /[^a-z0-9\s-']/,
			msg: 'Incorrect username input'
		},
		firstname: {
			reg: /[^a-z]+/i,
			msg: 'Incorrect firstname input'
		},
		lastname: {
			reg: /[^a-z]+/i,
			msg: 'Incorrect lastname input'
		}
	};

	//refactored our check - refObj[this.id].reg.test(this.value) to read regex
	if (!refObj[this.id].reg.test(this.value)) {
		this.classList.remove('invalid');
		this.classList.add('valid');
	} else {
		this.classList.remove('valid');
		this.classList.add('invalid');
		const errMsg = document.createElement('p');

		// refactored 	errMsg.innerText = refObj[this.id] to read our newly created msg
		errMsg.innerText = refObj[this.id].msg;
		this.parentNode.append(errMsg);

		// not needed anymore - was our previous test
		// // this.parentNode.appendChild(errMsg);
		// console.log(this.parentNode);

		// // console.dir(this.parentNode.appendChild(errMsg))
	}
}

inputElements.forEach((element) => {
	element.addEventListener('change', validateInput);
});
