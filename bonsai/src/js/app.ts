const btnToggleNav = document.querySelector('.toggle-nav') as HTMLElement;
const navClassList = document.querySelector('.nav') as HTMLElement;
const btnClassList = document.querySelector('.action-btn') as HTMLElement;
const mobileNavBg = document.querySelector('.mobile-nav-background') as HTMLElement;


const toggleMenu = (): void => {

    if(navClassList.classList[1] == 'nav--desktop') {      
        navClassList.classList.remove('nav--desktop');
        mobileNavBg.classList.remove('mobile-nav-background--invisible');
        mobileNavBg.classList.remove('mobile-nav-background--visible');
        navClassList.classList.add('nav--mobile');
        btnToggleNav.classList.remove('toggle-nav--show-nav');
        btnToggleNav.classList.add('toggle-nav--hide-nav');

    }
    else {
        navClassList.classList.remove('nav--mobile');
        navClassList.classList.add('nav--desktop');
        mobileNavBg.classList.remove('mobile-nav-background--visible');
        mobileNavBg.classList.remove('mobile-nav-background--invisible');
        btnToggleNav.classList.remove('toggle-nav--hide-nav');  
        btnToggleNav.classList.add('toggle-nav--show-nav');
              
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


btnToggleNav.addEventListener('click', (event: MouseEvent) => toggleMenu());

