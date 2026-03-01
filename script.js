function toggleMenu(){
    const menu = document.getElementById('mobile-menu') || document.querySelector('.menu-links');
    const btn = document.querySelector('.humburger-icon');
    if(!menu || !btn) return;

    const isOpen = menu.classList.toggle('open');
    btn.classList.toggle('open', isOpen);
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
}

// Close mobile menu on Escape
document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){
        const menu = document.getElementById('mobile-menu') || document.querySelector('.menu-links');
        const btn = document.querySelector('.humburger-icon');
        if(menu && menu.classList.contains('open')){
            menu.classList.remove('open');
            if(btn){
                btn.classList.remove('open');
                btn.setAttribute('aria-expanded', 'false');
                btn.focus();
            }
        }
    }
});