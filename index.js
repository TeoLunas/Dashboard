const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const themeToggler = document.querySelector('.theme-toggler')


//Mostrar barralateral(menu)
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block'
})

//Cerrar barralateral(menu)
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none'
})

//Cambiar tema
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})