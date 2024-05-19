import { SECTIONS as sect, BUTTONS as b} from './constantes'

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

b.EMPEZAR.addEventListener('click', () => animacionSecciones(sect.mainSection, sect.section1))

let botones = [b.sec1CalidadOptima, b.sec1CalidadPrecio, b.sec1NoImporta]

botones.map.addEventListener('click', () => animacionSecciones(sect.section1, sect.section2))




/* // 1 - 2
b.sec1CalidadOptima.addEventListener('click', () => animacionSecciones(sect.section1, sect.section2))
b.sec1CalidadPrecio.addEventListener('click', () => animacionSecciones(sect.section1, sect.section2))
b.sec1NoImporta.addEventListener('click', () => animacionSecciones(sect.section1, sect.section2))

// 2 - 3

b.sec2Android.addEventListener('click', () => animacionSecciones(sect.section2, sect.section3))
b.sec2AndroidIOS.addEventListener('click', () => animacionSecciones(sect.section2, sect.section3))
b.sec2Escritorio.addEventListener('click', () => animacionSecciones(sect.section2, sect.section3))
b.sec2Windows.addEventListener('click', () => animacionSecciones(sect.section2, sect.section3))
b.sec2iOS.addEventListener('click', () => animacionSecciones(sect.section2, sect.section3))

// 3 - 4
b.sec3NoNecesita.addEventListener('click', () => animacionSecciones(sect.section3, sect.section4))
b.sec3Personalizada.addEventListener('click', () => animacionSecciones(sect.section3, sect.section4))
b.sec3RepWeb.addEventListener('click', () => animacionSecciones(sect.section3, sect.section4))
b.sec3Sencilla.addEventListener('click', () => animacionSecciones(sect.section3, sect.section4))

// 3 - 5
b.sec.addEventListener('click', () => animacionSecciones(sect.section, sect.section))
b.sec.addEventListener('click', () => animacionSecciones(sect.section, sect.section))
b.sec.addEventListener('click', () => animacionSecciones(sect.section, sect.section))
b.sec.addEventListener('click', () => animacionSecciones(sect.section, sect.section))
b.sec.addEventListener('click', () => animacionSecciones(sect.section, sect.section))
b.sec.addEventListener('click', () => animacionSecciones(sect.section, sect.section))
b.sec.addEventListener('click', () => animacionSecciones(sect.section, sect.section))
b.sec.addEventListener('click', () => animacionSecciones(sect.section, sect.section))
b.sec.addEventListener('click', () => animacionSecciones(sect.section, sect.section))
b.sec.addEventListener('click', () => animacionSecciones(sect.section, sect.section))
b.sec.addEventListener('click', () => animacionSecciones(sect.section, sect.section))
b.sec.addEventListener('click', () => animacionSecciones(sect.section, sect.section))
b.sec.addEventListener('click', () => animacionSecciones(sect.section, sect.section))
b.sec.addEventListener('click', () => animacionSecciones(sect.section, sect.section))
b.sec.addEventListener('click', () => animacionSecciones(sect.section, sect.section))
b.sec.addEventListener('click', () => animacionSecciones(sect.section, sect.section))
b.sec.addEventListener('click', () => animacionSecciones(sect.section, sect.section))
b.sec.addEventListener('click', () => animacionSecciones(sect.section, sect.section)) */

