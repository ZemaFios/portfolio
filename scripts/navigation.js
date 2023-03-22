export const navigation = () => {
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navList.classList.toggle('active');
    });

    navList.addEventListener('click', ()  => {
        hamburger.classList.remove('active');
        navList.classList.remove('active');
    })
};