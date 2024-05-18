
export let animacionSecciones = (sec1, sec2) => {
    setTimeout(() => {
        sec1.style.display="none"
        sec2.style.display="flex"
    }, 170)
    setTimeout(() => {
        sec2.style.opacity="0.5"
    }, 240)
    setTimeout(() => {
        sec2.style.opacity="1"
    }, 380)
}