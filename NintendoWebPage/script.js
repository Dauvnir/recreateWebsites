const searchInput = document.querySelector('.inputSearchBar');
const faIconArrow = document.querySelector('.navBarSearchCategoryIcon');
const menuButtonSearchBar = document.querySelector('.buttonMenuBar');

const changeInputPlaceholder = (e) => {
	if (searchInput.placeholder == 'Search') {
		searchInput.placeholder = 'Search games, hardware, news, etc';
	} else {
		searchInput.placeholder = 'Search';
	}
};
const toggleArrow = () => {
	faIconArrow.classList.toggle('rotateIcon');
};

searchInput.addEventListener('click', changeInputPlaceholder);
faIconArrow.addEventListener('click', toggleArrow);
menuButtonSearchBar.addEventListener('click', toggleArrow);
