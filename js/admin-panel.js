const btnBloger = document.querySelector('.card-bloger__item--primary')

const infoBloger = document.querySelector('.card-bloger__info')

btnBloger.addEventListener('click', () => {
	infoBloger.style.opacity = '1'

	btnBloger.onmouseout = () => {
		infoBloger.style.opacity = '0'
	}
})


const btnPromo = document.querySelectorAll('.btn-promo')
const btnText = document.querySelectorAll('.btn-promo__text')
const btnItem = document.querySelectorAll('.btn-promo__item')
const btnIcons = document.querySelectorAll('.btn-promo__icons')

const img1 = document.querySelectorAll('.img1')
const img2 = document.querySelectorAll('.img2')


for (let i = 0; i < btnPromo.length; i++) {
	btnIcons[i].addEventListener('click', () => {
		btnItem[i].textContent = 'до 20.10.2022, 10:45 / 1000 (осталось 958)'
		btnItem[i].style.fontSize = '14px'
		btnPromo[i].style.background = '#252525'
		btnItem[i].style.color = '#FFFFFF'
		btnText[i].style.opacity = '0'

		btnPromo[i].onmouseout = () => {
			btnItem[i].textContent = 'CODE1337'
			btnItem[i].style.fontSize = '20px'
			btnItem[i].style.color = '#252525'
			btnPromo[i].style.background = '#F8F8F8'
			btnText[i].style.opacity = '1'
		}
	})
}
