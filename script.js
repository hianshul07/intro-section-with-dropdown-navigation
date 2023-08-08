const showMenu = document.getElementById('menuIcon');
const closeMenu = document.getElementById('closeIcon');
const sideMenu = document.getElementById('aside');
const mainScreen = document.getElementById('body');

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

if (sideMenu.style.display === 'block') {
}
