const hamburger_icon = document.querySelector('#nav .nav-bar .navlist .hamburger');
const nav_list = document.querySelector('#nav .nav-bar .navlist');

hamburger_icon.addEventListener('click',() =>{
    nav_list.classList.toggle('open');
    hamburger_icon.classList.toggle('active');
});