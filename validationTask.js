const inputElements = document.querySelectorAll('input');

const usernameElement = document.getElementById('username');
const passwordElement = document.getElementById('password');

function validateInput() {
	if (this.name === 'dateOfBirth') {
		const currentDate = Date.now();
		const newCurrentDate = new Date(currentDate);

		const oneYear = 31556926000;
		const eighteenYears = oneYear * 18;

		const enteredDate = document.getElementById('dateOfBirth').value;
		const splitDate = enteredDate.split('-');
		const newEnteredDate = new Date(splitDate[0], splitDate[1] - 1, splitDate[2]);

		if (newCurrentDate - newEnteredDate < eighteenYears) {
			this.classList.add('invalid');
			this.classList.remove('valid');
			const errMsg = document.createElement('p');

			errMsg.innerText = 'Invalid Date';
			if (this.parentNode.lastChild.tagName !== 'P') {
				this.parentNode.append(errMsg);
			}
		} else {
			this.classList.remove('invalid');
			this.classList.add('valid');

			if (this.parentNode.lastChild.tagName === 'P') {
				this.parentNode.lastChild.remove('p');
			}
		}
	} else {
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

		if (!refObj[this.id].reg.test(this.value)) {
			this.classList.remove('invalid');
			this.classList.add('valid');
			if (this.parentNode.lastChild.tagName === 'P') {
				this.parentNode.lastChild.remove('p');
			}
		} else {
			this.classList.remove('valid');
			this.classList.add('invalid');
			const errMsg = document.createElement('p');

			errMsg.innerText = refObj[this.id].msg;
			if (this.parentNode.lastChild.tagName !== 'P') {
				this.parentNode.append(errMsg);
			}
		}
	}
}

inputElements.forEach((element) => {
	element.addEventListener('change', validateInput);
});
