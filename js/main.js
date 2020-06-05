const menuButton = document.querySelector('.m-menu');

menuButton.addEventListener('click', () => {
    document.querySelector('.menu-sidebar').classList.toggle('active');
})