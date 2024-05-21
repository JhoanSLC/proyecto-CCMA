// animacion-secciones.js
import { SECTIONS as sect, BUTTONS as b } from './constantes';
import { deleteConfig } from './main'; // Importa la función deleteConfig desde main.js

export let animacionSecciones = (sec1, sec2) => {
    setTimeout(() => {
        sec1.style.display = "none";
        sec1.style.opacity = "0";
        sec2.style.display = "flex";
    }, 200);
    setTimeout(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        sec2.style.opacity = "0.2";
    }, 230);
    setTimeout(() => {
        sec2.style.opacity = "0.5";
    }, 270);
    setTimeout(() => {
        sec2.style.opacity = "1";
    }, 310);
};

// Define una función para agregar el event listener a los botones de regreso
const addRegListener = (button, sectionToShow, sectionToHide) => {
    button.addEventListener('click', () => {
        animacionSecciones(sectionToShow, sectionToHide);
        deleteConfig(); // Llama a la función deleteConfig cuando se hace clic en el botón
    });
};

// Agrega event listeners a los botones de regreso con la función deleteConfig
addRegListener(b.reg2, sect.section2, sect.section1);
addRegListener(b.reg3, sect.section3, sect.section2);
addRegListener(b.reg4, sect.section4, sect.section3);
addRegListener(b.reg5, sect.section5, sect.section4);
addRegListener(b.reg6, sect.section6, sect.section5);
addRegListener(b.reg7, sect.section7, sect.section6);
addRegListener(b.reg8, sect.section8, sect.section7);
addRegListener(b.reg9, sect.section9, sect.section8);
addRegListener(b.reg10, sect.section10, sect.section9);
