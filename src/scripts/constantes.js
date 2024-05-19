// // // // // // // // //  SECCIONES  // // // // // // // // // // // /


const mainSection = document.getElementById('main-section'); // Guardo la sección principal
const section1 = document.getElementById('section-1'); // Guardo la primera sección
const section2 = document.getElementById('section-2'); // Guardo la segunda sección

///////////////////////////////////////////////////////////////////////////////////


// // // // // // // // // BOTONES // // // // // // // // // // // // // //

const EMPEZAR = document.getElementById('empezar'); // Guardo el boton de empezar

// Sección 1 

const sec1CalidadOptima = document.getElementById('calidad-optima'); // Sección uno calidad optima
const sec1CalidadPrecio = document.getElementById('calidad-precio'); // Sección uno calidad / precio
const sec1NoImporta = document.getElementById('no-importa-calidad'); // Sección uno 'No importa la calidad'

//Sección 2


/////////////////////////////////////////////////////////////////////////////



/////////////////// EXPORTACIÓN ////////////////

export const SECTIONS = {
    mainSection,
    section1,
    section2,
}

export const BUTTONS = {
    EMPEZAR,
    sec1CalidadOptima,
    sec1CalidadPrecio,
    sec1NoImporta,
}

