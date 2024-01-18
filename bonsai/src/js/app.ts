const btnToggleNav = document.querySelector('.toggle-nav') as HTMLElement;
const navClassList = document.querySelector('.nav') as HTMLElement;
const btnClassList = document.querySelector('.action-btn') as HTMLElement;
const mobileNavBg = document.querySelector('.mobile-nav-background') as HTMLElement;

const switchPaymentPlans = document.querySelector('.section__price-switch') as HTMLElement;
const currentPaymentPlan = document.querySelector('.section__switch') as HTMLElement;
const labelMonthly = document.querySelector('.p--offer-label--monthly') as HTMLElement;
const labelYearly = document.querySelector('.p--offer-label--yearly') as HTMLElement;

const toggleMenu = (): void => {

    if(navClassList.classList[1] == 'nav--desktop') {      
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

    if(btnClassList.classList[1] == 'action-btn--desktop') {
        btnClassList.classList.remove('action-btn--desktop');
        btnClassList.classList.add('action-btn--mobile');
    }
    else {
        btnClassList.classList.remove('action-btn--mobile');
        btnClassList.classList.add('action-btn--desktop');
    }
}


const switchPlans = (): void  => {
    if(currentPaymentPlan.classList[1] === 'section__switch--monthly-plan') {
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
}


btnToggleNav.addEventListener('click', (event: MouseEvent) => toggleMenu());
switchPaymentPlans.addEventListener('click', (event: MouseEvent) => switchPlans());

