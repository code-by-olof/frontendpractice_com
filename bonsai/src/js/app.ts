const btnToggleNav = document.getElementById('toggle-nav') as HTMLElement;
const navClassList = document.querySelector('.nav') as HTMLElement;


const toggleMenu = (): void => {
    if(navClassList.classList[1] == 'nav--desktop') {
        navClassList.classList.remove('nav--desktop');
        navClassList.classList.add('nav--mobile');
    }
    else {
        navClassList.classList.remove('nav--mobile');
        navClassList.classList.add('nav--desktop');
    }
}

btnToggleNav.addEventListener('click', (event: MouseEvent) => toggleMenu());

