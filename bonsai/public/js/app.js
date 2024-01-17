"use strict";
const btnToggleNav = document.getElementById('toggle-nav');
// Toggle Elements
const navClassList = document.querySelector('.nav');
const btnClassList = document.querySelector('.action-btn');
const mobileNavBg = document.querySelector('.mobile-nav-background');
const toggleMenu = () => {
    console.log(btnClassList.classList);
    console.log(navClassList.classList);
    if (navClassList.classList[1] == 'nav--desktop') {
        navClassList.classList.remove('nav--desktop');
        mobileNavBg.classList.remove('mobile-nav-background--invisible');
        mobileNavBg.classList.remove('mobile-nav-background--visible');
        navClassList.classList.add('nav--mobile');
    }
    else {
        navClassList.classList.remove('nav--mobile');
        navClassList.classList.add('nav--desktop');
        mobileNavBg.classList.remove('mobile-nav-background--visible');
        mobileNavBg.classList.remove('mobile-nav-background--invisible');
    }
    if (btnClassList.classList[1] == 'action-btn--desktop') {
        btnClassList.classList.remove('action-btn--desktop');
        btnClassList.classList.add('action-btn--mobile');
    }
    else {
        btnClassList.classList.remove('action-btn--mobile');
        btnClassList.classList.add('action-btn--desktop');
    }
};
btnToggleNav.addEventListener('click', (event) => toggleMenu());
