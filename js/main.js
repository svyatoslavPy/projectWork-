const btn = document.querySelector('.nav__icon')


let theme = 'light'


if (localStorage.getItem('theme') === 'dark') {
	document.body.classList.add('dark-theme')
}

btn.addEventListener('click', () => {
	if (theme === 'light') {
		theme = 'dark'
	} else {
		theme = 'light'
	}
	localStorage.setItem('theme', theme)
	document.body.classList.toggle('dark-theme')
})

theme = localStorage.getItem('theme')




