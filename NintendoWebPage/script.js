const searchInput = document.querySelector('.inputSearchBar');
const faIconArrow = document.querySelector('.navBarSearchCategoryIcon');
const menuButtonSearchBar = document.querySelector('.buttonMenuBar');
const searchIcon = document.querySelector('.fa-magnifying-glass');

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
const toggleArrow = (e) => {
	faIconArrow.classList.toggle('rotateIcon');
};

searchInput.addEventListener('click', changeInputPlaceholder);
searchInput.addEventListener('mouseover', changeOnOverHoverColor);
searchInput.addEventListener('mouseleave', changeOnLeaveHoverColor);
faIconArrow.addEventListener('click', toggleArrow);
menuButtonSearchBar.addEventListener('click', toggleArrow);
//
//faIconArrow.forEach((searchIcon) => {
//	searchIcon.addEventListener('click', () => searchIcon.classList.toggle('rotateIcon'));
//});
//
