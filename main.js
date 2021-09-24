let textField = document.getElementById('text');
let message = 'Hello, I\'m Lawi, This is a trial version!.'
let pText = document.getElementById('click');

function clickMe() {
	pText.textContent = 'Thanks for clicking';
	textField.textContent = message;
}