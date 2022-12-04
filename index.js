// Header

const headerSearchWrapper = document.querySelector('div.header-search-wrapper');
const searchBtn = document.querySelector('button[data-icon="search"]');
const headerCloseBtn = document.querySelector('button.header-search-close');

searchBtn.addEventListener('click', (e) => {
    headerSearchWrapper.setAttribute('show', true);
})

headerCloseBtn.addEventListener('click', (e) => {
    headerSearchWrapper.setAttribute('show', false);
})

const burgerBtn = document.querySelector('button[data-icon="menu"]');
const headerControls = document.querySelector('.header-controls');
burgerBtn.addEventListener('click', (e) => {
    headerControls.toggleAttribute('show');
})