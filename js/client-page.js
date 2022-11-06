const btnCopy = document.querySelectorAll('.story-btn__copy');
const btnAbout = document.querySelectorAll('.story-about__copy');
const img = document.querySelectorAll('#path');
const btncopyText = document.querySelectorAll('.story-btn__text');


for (let i = 0; i < btnCopy.length; i++) {
	btnCopy[i].addEventListener('click', () => {
		btncopyText[i].textContent = 'Login228:password';
		navigator.clipboard.writeText(btncopyText[i].textContent);
		btnCopy[i].style.background = '#FFFFFF';
		btnCopy[i].style.border = '1px solid #0077FF';
		btncopyText[i].style.color = '#0077FF';
		img[i].setAttribute('fill', '#0077FF');
		btnAbout[i].style.opacity = '1';

		btnCopy[i].onmouseout = () => {
			btncopyText[i].textContent = 'Копировать данные';
			btnCopy[i].style.background = '#0077FF';
			btncopyText[i].style.color = '#FFFFFF';
			img[i].setAttribute('fill', '#FFFFFF')
			btnAbout[i].style.opacity = '0';
		}
	})
}