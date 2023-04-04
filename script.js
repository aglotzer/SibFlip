const form = document.getElementById('upload-form');
const input = document.getElementById('upload-input');
const button = document.getElementById('upload-button');
const resultContainer = document.getElementById('result-container');
const coinImage = document.getElementById('coin-image');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const file = input.files[0];
	if (file) {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			const imageBase64 = reader.result;
			flipCoin(imageBase64);
		};
	} else {
		flipCoin();
	}
});

function flipCoin(imageBase64 = null) {
	const result = Math.random() < 0.5 ? 'Heads' : 'Tails';
	const coinImageUrl = result === 'Heads' ? 'heads.png' : 'tails.png';
	if (imageBase64) {
		coinImage.style.backgroundImage = `url(${imageBase64})`;
	} else {
		coinImage.style.backgroundImage = `url(${coinImageUrl})`;
	}
	resultContainer.style.display = 'block';
}
