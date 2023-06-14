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
