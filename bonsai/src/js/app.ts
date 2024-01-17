const btnToggleNav = document.getElementById('toggle-nav') as HTMLElement;

// Toggle Elements
const navClassList = document.querySelector('.nav') as HTMLElement;
const btnClassList = document.querySelector('.action-btn') as HTMLElement;


const toggleMenu = (): void => {

    if(navClassList.classList[1] == 'nav--desktop') {
        navClassList.classList.remove('nav--desktop');
        navClassList.classList.add('nav--mobile');
    }
    else {
        navClassList.classList.remove('nav--mobile');
        navClassList.classList.add('nav--desktop');
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

