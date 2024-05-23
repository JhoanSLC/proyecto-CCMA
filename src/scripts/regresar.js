// animacion-secciones.js
import { SECTIONS as sect, BUTTONS as b } from './constantes';

import { animacionSecciones } from './animacion-secciones';


b.reg2.addEventListener('click', () => animacionSecciones(sect.section2, sect.section1))
// Agrega event listeners a los botones de regreso con la función deleteConfig
b.reg4.addEventListener('click', () => animacionSecciones(sect.section4, sect.section3))
b.reg5.addEventListener('click', () => animacionSecciones(sect.section5, sect.section4))
b.reg6.addEventListener('click', () => animacionSecciones(sect.section6, sect.section5))
b.reg7.addEventListener('click', () => animacionSecciones(sect.section7, sect.section6))
b.reg8.addEventListener('click', () => animacionSecciones(sect.section8, sect.section7))
b.reg9.addEventListener('click', () => animacionSecciones(sect.section9, sect.section8))
b.reg10.addEventListener('click', () => animacionSecciones(sect.section10, sect.section9))
b.regFinal.addEventListener('click', () => animacionSecciones(sect.sectFinal, sect.mainSection))
b.loginReg.addEventListener('click', () => animacionSecciones(sect.loginSec, sect.section10))
b.loginButton.addEventListener('click', () => animacionSecciones(sect.loginSec, sect.sectFinal))