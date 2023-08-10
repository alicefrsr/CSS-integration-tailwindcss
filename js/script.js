const btn = document.getElementById('mobile-menu-btn');
const mobileNav = document.getElementById('mobile-menu');

btn.addEventListener('click', ()=>{
    btn.classList.toggle('open');
    mobileNav.classList.toggle('flex')
    mobileNav.classList.toggle('hidden')
})