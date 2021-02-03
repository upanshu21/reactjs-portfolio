const navSlide = () => {

    const drop = document.querySelector('.drop');
    const nav = document.querySelector('.navbar__right');

    drop.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });

}

const slide = () => {
    navSlide();
}

export default slide