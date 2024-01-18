"use strict";
const btnToggleNav = document.querySelector('.toggle-nav');
const navClassList = document.querySelector('.nav');
const btnClassList = document.querySelector('.action-btn');
const mobileNavBg = document.querySelector('.mobile-nav-background');
const switchPaymentPlans = document.querySelector('.section__price-switch');
const currentPaymentPlan = document.querySelector('.section__switch');
const labelMonthly = document.querySelector('.p--offer-label--monthly');
const labelYearly = document.querySelector('.p--offer-label--yearly');
const toggleMenu = () => {
    if (navClassList.classList[1] == 'nav--desktop') {
        navClassList.classList.remove('nav--desktop');
        mobileNavBg.classList.remove('mobile-nav-background--invisible');
        mobileNavBg.classList.add('mobile-nav-background--visible');
        navClassList.classList.add('nav--mobile');
        btnToggleNav.classList.remove('toggle-nav--show-nav');
        btnToggleNav.classList.add('toggle-nav--hide-nav');
    }
    else {
        navClassList.classList.remove('nav--mobile');
        navClassList.classList.add('nav--desktop');
        mobileNavBg.classList.remove('mobile-nav-background--visible');
        mobileNavBg.classList.add('mobile-nav-background--invisible');
        btnToggleNav.classList.remove('toggle-nav--hide-nav');
        btnToggleNav.classList.add('toggle-nav--show-nav');
        mobileNavBg.classList.remove('mobile-nav-background--visible');
        mobileNavBg.classList.add('mobile-nav-background--invisible');
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
const switchPlans = () => {
    if (currentPaymentPlan.classList[1] === 'section__switch--monthly-plan') {
        currentPaymentPlan.classList.remove('section__switch--monthly-plan');
        currentPaymentPlan.classList.add('section__switch--yearly-plan');
        labelMonthly.classList.remove('section__p--selected-payplan');
        labelMonthly.classList.add('section__p--disabled-payplan');
        labelYearly.classList.remove('section__p--disabled-payplan');
        labelYearly.classList.add('section__p--selected-payplan');
    }
    else {
        currentPaymentPlan.classList.add('section__switch--monthly-plan');
        currentPaymentPlan.classList.remove('section__switch--yearly-plan');
        labelMonthly.classList.remove('section__p--disabled-payplan');
        labelYearly.classList.remove('section__p--selected-payplan');
        labelYearly.classList.add('section__p--disabled-payplan');
        labelMonthly.classList.add('section__p--selected-payplan');
    }
};
btnToggleNav.addEventListener('click', (event) => toggleMenu());
switchPaymentPlans.addEventListener('click', (event) => switchPlans());
