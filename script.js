const showMenu = document.getElementById('menuIcon');
const closeMenu = document.getElementById('closeIcon');
const sideMenu = document.getElementById('aside');
const mainScreen = document.getElementById('body');
const clickable = document.querySelector('.click');
const clickable1 = document.querySelector('#company');
const arrowDown = document.querySelector('.arrow-down');
const arrowUp = document.querySelector('.arrow-up');
const arrDown = document.querySelector('#arr-down');
const arrUp = document.querySelector('#arr-up');
const featuresMenu = document.querySelector('#menu-one')

showMenu.addEventListener('click', function () {
	sideMenu.style.display = 'block';

	mainScreen.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
	mainScreen.style.opacity = '1';
});

closeMenu.addEventListener('click', function () {
	sideMenu.style.display = '';
	mainScreen.style.opacity = '';
	mainScreen.style.backgroundColor = '';
});

clickable.addEventListener('click', function () {
	if (arrowDown.style.display === 'none') {
		arrowUp.style.display = 'none';
		arrowDown.style.display = 'block';
		featuresMenu.style.display = '';
		console.log('up');
	} else {
		featuresMenu.style.display = 'block';
		arrowDown.style.display = 'none';
		arrowUp.style.display = 'block';
		console.log('down');
	}
});

clickable1.addEventListener('click', function () {
	if (arrDown.style.display === 'none') {
		arrUp.style.display = 'none';
		arrDown.style.display = 'block';
		console.log('up');
	} else {
		arrDown.style.display = 'none';
		arrUp.style.display = 'block';
		console.log('down');
	}
});