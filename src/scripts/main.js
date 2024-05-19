import { animacionSecciones } from './animacion-secciones'
import { SECTIONS as sect, BUTTONS as b} from './constantes'

b.EMPEZAR.addEventListener('click', () => animacionSecciones(sect.mainSection, sect.section1))

b.sec1CalidadOptima.addEventListener('click', () => animacionSecciones(sect.section1, sect.section2))
b.sec1CalidadPrecio.addEventListener('click', () => animacionSecciones(sect.section1, sect.section2))
b.sec1NoImporta.addEventListener('click', () => animacionSecciones(sect.section1, sect.section2))



