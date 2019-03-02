document.getElementsByClassName('menu-toggle')[0].addEventListener('click', function() {
    document.getElementsByClassName('site-nav-ul')[0].classList.toggle('site-nav-ul-open');
    this.classList.toggle('open');
});