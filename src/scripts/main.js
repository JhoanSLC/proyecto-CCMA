import { animacionSecciones } from './animacion-secciones'

const EMPEZAR = document.getElementById('empezar'); // Guardo el boton de empezar
const mainSection = document.getElementById('main-section'); // Guardo la sección principal
const section1 = document.getElementById('section-1'); // Guardo la primera

EMPEZAR.addEventListener('click', () => animacionSecciones(mainSection, section1))