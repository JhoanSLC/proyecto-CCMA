
export let animacionSecciones = (sec1, sec2) => {
    setTimeout(() => {
        sec1.style.display="none"
        sec2.style.display="flex"
    }, 200)
    setTimeout(() => {
        sec2.style.opacity="0.2"
    }, 230)
    setTimeout(() => {
        sec2.style.opacity="0.5"
    }, 270)
    setTimeout(() => {
        sec2.style.opacity="1"
    }, 310)
}