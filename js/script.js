document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.nav')

	function addShadow() {
		if (window.scrollY >= 100) {
			nav.classList.add('shadow-bg')
		} else {
			nav.classList.remove('shadow-bg')
		}
	}

	window.addEventListener('scroll', addShadow)
})



const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.nav__button');
const footerYear = document.querySelector('.footer__year');


const handleCurrentYear = () =>{
	const year = (new Date).getFullYear();
	footerYear.innerText = year;
}
handleCurrentYear();

const handleNav = () => {
	nav.classList.toggle('nav--active')}

	navBtn.addEventListener('click',handleNav)
