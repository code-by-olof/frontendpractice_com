"use strict";
const btnToggleNav = document.getElementById('toggle-nav');
const navClassList = document.querySelector('.nav');
const toggleMenu = () => {
    if (navClassList.classList[1] == 'nav--desktop') {
        navClassList.classList.remove('nav--desktop');
        navClassList.classList.add('nav--mobile');
    }
    else {
        navClassList.classList.remove('nav--mobile');
        navClassList.classList.add('nav--desktop');
    }
};
btnToggleNav.addEventListener('click', (event) => toggleMenu());
