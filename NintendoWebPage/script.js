const searchInput = document.querySelector('.inputSearchBar');
const faIconArrow = document.querySelector('.navBarSearchCategoryIcon');
const faIconArrowParents = document.querySelectorAll(
	'.nintendoStoreIcon, .allCategoriesDiv, .gamesIcon, .nintendoSwitchHome, .playNintendoIcon'
);
const menuButtonSearchBar = document.querySelector('.buttonMenuBar');
const searchIcon = document.querySelector('.fa-magnifying-glass');
const allCategoriesDivNav = document.querySelector('.allCategoriesDiv');
const menuFaIconArrow = document.querySelector('.allCategoriesMenu');
const firstchildMenuNavBar = document.querySelector('.allCategoriesMenu :nth-child(1)');
const xButtonClose = document.querySelector('.xButtonToClose');
const navBarSearchSlideDown = document.querySelector('.navBarSearchSlideDown');
const navBarSearch = document.querySelector('.navBarSearch');
const navBarList = document.querySelector('.navBarList');
const heartSpark = document.querySelectorAll('.sparks');
const heartButtons = document.querySelectorAll('.heartButton');
const changeInputPlaceholder = (e) => {
	if (searchInput.placeholder == 'Search') {
		searchInput.placeholder = 'Search games, hardware, news, etc';
	} else {
		searchInput.placeholder = 'Search';
	}
};
const changeOnOverHoverColor = (e) => {
	searchInput.style.color = 'red';
	searchIcon.style.color = 'red';
	searchInput.style.transition = '0.5s';
	searchIcon.style.transition = '0.5s';
};
const changeOnLeaveHoverColor = (e) => {
	searchInput.style.color = 'black';
	searchIcon.style.color = 'black';
};

for (const arrowsChild of faIconArrowParents) {
	arrowsChild.addEventListener('click', function rotateIcons() {
		let lastChild = arrowsChild.lastElementChild;
		if (lastChild.classList.contains('rotateIcon')) {
			lastChild.classList.remove('rotateIcon');
			lastChild.style.transition = '0.5s';
		} else {
			lastChild.classList.add('rotateIcon');
		}
	});
}
// for (const heartSparks of heartSpark) {
// 	for (const heartButton of heartButtons) {
// 		heartButton.addEventListener('mouseenter', function showSparks1() {
// 			heartSparks.classList.add('sparks2');
// 		});
// 	}
// }

// for (const heartSparks of heartSpark) {
// 	for (const heartButton of heartButtons) {
// 		heartButton.addEventListener('mouseleave', function showSparks2() {
// 			heartSparks.classList.remove('sparks2');
// 		});
// 	}
// }
for (const heartButton of heartButtons) {
	heartButton.addEventListener('mouseover', function rotateIcons() {
		let lastChildHeartButton = heartButton.lastElementChild;
		lastChildHeartButton.style.transition = 'all 0.5s';
		lastChildHeartButton.classList.remove('sparks2');
		setTimeout(() => {
			lastChildHeartButton.classList.add('sparks2');
			lastChildHeartButton.style.transition = 'all 0.5s';
		}, '500');
	});
}
for (const heartButton of heartButtons) {
	heartButton.addEventListener('mouseleave', function rotateIcons() {
		let lastChildHeartButton = heartButton.lastElementChild;
		lastChildHeartButton.classList.add('sparks2');
		lastChildHeartButton.style.transition = 'all 0.5s';
	});
}
const hideMenuNavBar = () => {
	menuFaIconArrow.classList.toggle('hideMenu');
	menuFaIconArrow.classList.remove('rotateIcon');
	firstchildMenuNavBar.style.background = 'var(--separator)';
};
const arrowsFirstChildFixNavBar = () => {
	faIconArrow.classList.toggle('rotateIcon');
};
const colorChangeHoverMenuCategories = () => {
	if ((firstchildMenuNavBar.style.background = 'var(--separator)')) {
		firstchildMenuNavBar.style.background = 'white';
	}
};
const colorChangeHoverMenuCategories2 = () => {
	if ((firstchildMenuNavBar.style.background = 'white')) {
		firstchildMenuNavBar.style.background = 'rgb(243, 243, 243)';
	}
};

const closeAllcategoriesMenu = (event) => {
	if (!allCategoriesDivNav.contains(event.target)) {
		menuFaIconArrow.classList.add('hideMenu');
		faIconArrow.classList.remove('rotateIcon');
	}
};

const closeTopSlideMenu = (event) => {
	if (!navBarSearchSlideDown.contains(event.target) && !searchInput.contains(event.target)) {
		navBarSearchSlideDown.style.transform = 'translateY(-30.5rem)';
		xButtonClose.style.visibility = 'hidden';
		navBarSearch.style.borderBottom = '1px solid var(--separator)';
		navBarList.style.zIndex = '3';
		navBarList.style.borderBottom = '1px solid var(--separator)';
		searchIcon.style.transform = 'scale(1)';
		searchInput.placeholder = 'Search';
		document.body.style.overflow = 'scroll';
		document.getElementById('overlay').classList.remove('wrapIt');
	}
};
const showTopSlideMenu = () => {
	navBarSearchSlideDown.style.visibility = 'visible';
	xButtonClose.style.visibility = 'visible';
	navBarSearchSlideDown.style.transform = 'translateY(0rem)';
	navBarSearch.style.borderBottom = '0px';
	navBarList.style.borderBottom = '0px';
	navBarList.style.zIndex = '1';
	searchIcon.style.transform = 'scale(0.9)';
	searchInput.placeholder = 'Search games, hardware, news, etc';
	document.body.style.overflow = 'hidden';
	document.getElementById('overlay').classList.add('wrapIt');
};
searchInput.addEventListener('click', changeInputPlaceholder);
searchInput.addEventListener('mouseover', changeOnOverHoverColor);
searchInput.addEventListener('mouseleave', changeOnLeaveHoverColor);
searchIcon.addEventListener('mouseover', changeOnOverHoverColor);
searchIcon.addEventListener('mouseleave', changeOnLeaveHoverColor);
allCategoriesDivNav.addEventListener('click', hideMenuNavBar);
allCategoriesDivNav.addEventListener('click', arrowsFirstChildFixNavBar);
firstchildMenuNavBar.addEventListener('mouseout', colorChangeHoverMenuCategories);
firstchildMenuNavBar.addEventListener('mouseover', colorChangeHoverMenuCategories2);
menuFaIconArrow.addEventListener('mouseout', colorChangeHoverMenuCategories);
document.addEventListener('click', closeAllcategoriesMenu);
xButtonClose.addEventListener('click', closeTopSlideMenu);
searchInput.addEventListener('click', showTopSlideMenu);
document.addEventListener('click', closeTopSlideMenu);
