// // // // // // // // //  SECCIONES  // // // // // // // // // // // /


const mainSection = document.getElementById('main-section'); // Guardo la sección principal
const loginSec = document.getElementById('loginsec')
const section1 = document.getElementById('section-1'); // Guardo la primera sección
const section2 = document.getElementById('section-2'); // Guardo la segunda sección
const sectionEscritorio = document.getElementById('section-escritorio'); // Guardar la sección de escritorio
const section3 = document.getElementById('section-3'); // Guardo la tercera sección
const section4 = document.getElementById('section-4'); // Guardo la cuarta sección
const section5 = document.getElementById('section-5'); // Guardo la quinta sección
const section6 = document.getElementById('section-6'); // Guardo la sexta sección
const section7 = document.getElementById('section-7'); // Guardo la septima sección
const section8 = document.getElementById('section-8'); // Guardo la octava sección
const section9 = document.getElementById('section-9'); // Guardo la novena sección
const section10 = document.getElementById('section-10'); // Guardo la decima sección

///////////////////////////////////////////////////////////////////////////////////


// // // // // // // // // BOTONES // // // // // // // // // // // // // //

const EMPEZAR = document.getElementById('empezar'); // Guardo el boton de empezar
const loginButton = document.getElementById('loginButton')
// Sección 1 

const sec1CalidadOptima = document.getElementById('calidad-optima'); // Sección uno calidad optima
const sec1CalidadPrecio = document.getElementById('calidad-precio'); // Sección uno calidad / precio
const sec1NoImporta = document.getElementById('no-importa-calidad'); // Sección uno 'No importa la calidad'

//Sección 2
const reg2 = document.getElementById('reg2')
const sec2Android = document.getElementById('android');
const sec2iOS = document.getElementById('ios');
const sec2Windows = document.getElementById('windowsPhone');
const sec2AndroidIOS = document.getElementById('android-ios');
const sec2Escritorio = document.getElementById('escritorio');

//SEcción 2.5 
const regEscritorio = document.getElementById('regEscritorio');
const secEscPwa = document.getElementById('pwa');
const secEscSpa = document.getElementById('spa');
const secEscNativa = document.getElementById('nativa')

// Sección 3
const reg3 = document.getElementById('reg3')
const sec3Sencilla = document.getElementById('interfaz-sencilla');
const sec3Personalizada = document.getElementById('personalizada');
const sec3RepWeb = document.getElementById('replica-web');
const sec3NoNecesita = document.getElementById('sin-diseño');


// Sección 4 
const reg4 = document.getElementById('reg4')
const sec4Gratis = document.getElementById('app-gratis');
const sec4Pago = document.getElementById('app-pago');
const sec4InApp = document.getElementById('compras-in-app');
const sec4Otros = document.getElementById('otros');

// Sección 5
const reg5 = document.getElementById('reg5')
const sec5Redes = document.getElementById('redes-email');
const sec5Email = document.getElementById('email');
const sec5No = document.getElementById('sec5-no');
const sec5NoSe = document.getElementById('sec5-nose');

// Sección 6 
const reg6 = document.getElementById('reg6')
const sec6Si = document.getElementById('sec6-si');
const sec6No = document.getElementById('sec6-no');
const sec6NoSe = document.getElementById('sec6-nose');

// Sección 7
const reg7 = document.getElementById('reg7')
const sec7Si = document.getElementById('sec7-si');
const sec7No = document.getElementById('sec7-no');
const sec7NoSe = document.getElementById('sec7-nose');

// Sección 8
const reg8 = document.getElementById('reg8')
const sec8Si = document.getElementById('sec8-si');
const sec8No = document.getElementById('sec8-no');
const sec8NoSe = document.getElementById('sec8-nose');

// Sección 9
const reg9 = document.getElementById('reg9')
const sec9UnIdioma = document.getElementById('unico-idioma');
const sec9Bilingue = document.getElementById('bilingue');
const sec9Multilingue = document.getElementById('multilingue');

// Sección 10 
const reg10 = document.getElementById('reg10')
const sec10Idea = document.getElementById('idea');
const sec10Boceto = document.getElementById('boceto');
const sec10EnDesarrollo = document.getElementById('enDesarrollo');
const sec10Desarrollada = document.getElementById('desarrollada');


/////////////////////////////////////////////////////////////////////////////

///////////////////////////// LOGIN /////////////////////////////

export const userName = document.getElementById('nombre-usuario');
export const userLastName = document.getElementById('apellidos-usuario')


/////////////////// EXPORTACIÓN ////////////////

export const SECTIONS = {
    mainSection,
    section1,
    section2,
    section3,
    section4,
    section5,
    section6,
    section7,
    section8,
    section9,
    section10,
    loginSec,
    sectionEscritorio,

}

export const BUTTONS = {
    EMPEZAR,
    sec1CalidadOptima,
    sec1CalidadPrecio,
    sec1NoImporta,
    sec2Android,
    sec2AndroidIOS,
    sec2Escritorio,
    sec2iOS,
    sec2Windows,
    sec3NoNecesita,
    sec3Personalizada,
    sec3RepWeb,
    sec3Sencilla,
    sec4Gratis,
    sec4InApp,
    sec4Otros,
    sec4Pago,
    sec5Email,
    sec5No,
    sec5NoSe,
    sec5Redes,
    sec6No,
    sec6NoSe,
    sec6Si,
    sec7No,
    sec7NoSe,
    sec7Si,
    sec8No,
    sec8NoSe,
    sec8Si,
    sec9Bilingue,
    sec9Multilingue,
    sec9UnIdioma,
    sec10Boceto,
    sec10Desarrollada,
    sec10EnDesarrollo,
    sec10Idea,
    reg2,
    reg3,
    reg4,
    reg5,
    reg6,
    reg7,
    reg8,
    reg9,
    reg10,
    loginButton,
    regEscritorio,
    secEscNativa,
    secEscPwa,
    secEscSpa,
}
