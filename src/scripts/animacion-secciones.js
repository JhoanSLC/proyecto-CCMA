const EMPEZAR = document.getElementById('empezar');
const mainSection = document.getElementById('main-section');
const section1 = document.getElementById('section-1');

export let animacionSecciones = EMPEZAR.addEventListener('click', () => {
    setTimeout(() => {
        mainSection.style.display="none"
        section1.style.display="flex"
    }, 170)
    setTimeout(() => {
        section1.style.opacity="0.5"
    }, 240)
    setTimeout(() => {
        section1.style.opacity="1"
    }, 380)
})