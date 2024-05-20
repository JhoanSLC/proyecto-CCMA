import { SECTIONS as sect, BUTTONS as b} from './constantes'
export let animacionSecciones = (sec1, sec2) => {
    setTimeout(() => {
        sec1.style.display="none"
        sec1.style.opacity="0"
        sec2.style.display="flex"
    }, 200)
    setTimeout(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });
        sec2.style.opacity="0.2"
    }, 230)
    setTimeout(() => {
        sec2.style.opacity="0.5"
    }, 270)
    setTimeout(() => {
        sec2.style.opacity="1"
    }, 310)
}

b.reg2.addEventListener('click', () => animacionSecciones(sect.section2, sect.section1))

b.reg4.addEventListener('click', () => animacionSecciones(sect.section4, sect.section3))
b.reg5.addEventListener('click', () => animacionSecciones(sect.section5, sect.section4))
b.reg6.addEventListener('click', () => animacionSecciones(sect.section6, sect.section5))
b.reg7.addEventListener('click', () => animacionSecciones(sect.section7, sect.section6))
b.reg8.addEventListener('click', () => animacionSecciones(sect.section8, sect.section7))
b.reg9.addEventListener('click', () => animacionSecciones(sect.section9, sect.section8))
b.reg10.addEventListener('click', () => animacionSecciones(sect.section10, sect.section9))