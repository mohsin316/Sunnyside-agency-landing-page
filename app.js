const button = document.querySelector('.ham');
const menu = document.querySelector('.header-nav');
const links = document.querySelectorAll('.header-links')

button.addEventListener('click', ()=>{
    menu.classList.toggle('hide')
    links.forEach(link => {
        link.classList.toggle('transition')
    })
})