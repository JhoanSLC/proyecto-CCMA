
import { SECTIONS as sect, BUTTONS as b} from './constantes'
const precioContainer = document.getElementById('precio-container')

const loginForm = document.getElementById('loginForm');


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

b.EMPEZAR.addEventListener('click', () => animacionSecciones(sect.mainSection, sect.section1));
loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita el envío del formulario por defecto

    if (loginForm.checkValidity()) {
        // El formulario es válido
        animacionSecciones(sect.loginSec, sect.sectFinal);
    } else {
        // El formulario no es válido, muestra mensajes de validación
        loginForm.reportValidity();
    }
});

// 1 - 2

let sec1Botones = [b.sections.sec1CalidadOptima, b.sections.sec1CalidadPrecio, b.sections.sec1NoImporta];

sec1Botones.forEach(boton => {
    boton.addEventListener('click', () => animacionSecciones(sect.section1, sect.section2));
})

// 2 - 3

let sec2Botones = [b.sections.sec2Android, b.sections.sec2AndroidIOS, b.sections.sec2Escritorio, b.sections.sec2Windows, b.sections.sec2iOS];
let isDesktop = false

sec2Botones.forEach(boton => {
    if (boton === b.sections.sec2Escritorio) {
        boton.addEventListener('click', () => {
            isDesktop = true
            animacionSecciones(sect.section2, sect.sectionEscritorio)
        });
    } else {
        
        boton.addEventListener('click', () => {
            isDesktop = false
            precioContainer.style.display = "flex"
            setTimeout(() => {
                precioContainer.style.opacity="0.2"
            }, 230)
            setTimeout(() => {
                precioContainer.style.opacity="0.5"
            }, 270)
            setTimeout(() => {
                precioContainer.style.opacity="1"
            }, 310)
            animacionSecciones(sect.section2, sect.section3)
        })
    }
})
b.reg3.addEventListener('click', () => {
    if (isDesktop == true) {
        animacionSecciones(sect.section3, sect.sectionEscritorio);
    } else {
        animacionSecciones(sect.section3, sect.section2)
    }
})
b.regEscritorio.addEventListener('click', () => animacionSecciones(sect.sectionEscritorio, sect.section2))
// 2.5 - 3 
let secEscBotones = [b.sections.secEscNativa, b.sections.secEscPwa, b.sections.secEscSpa];
secEscBotones.forEach(boton => {
    boton.addEventListener('click', () => animacionSecciones(sect.sectionEscritorio, sect.section3))
})


// 3 - 4
let sec3Botones = [b.sections.sec3NoNecesita, b.sections.sec3Personalizada, b.sections.sec3RepWeb, b.sections.sec3Sencilla]
sec3Botones.forEach(boton => {
    boton.addEventListener('click', () => animacionSecciones(sect.section3, sect.section4))
})

// 4 - 5

let sec4Botones = [b.sections.sec4Gratis, b.sections.sec4InApp, b.sections.sec4Otros, b.sections.sec4Pago]
sec4Botones.forEach(boton => {
    boton.addEventListener('click', () => animacionSecciones(sect.section4, sect.section5))
})

// 5 - 6 

let sec5Botones = [b.sections.sec5Email, b.sections.sec5No, b.sections.sec5NoSe, b.sections.sec5Redes]
sec5Botones.forEach(boton => {
    boton.addEventListener('click', () => animacionSecciones(sect.section5, sect.section6))
})

// 6 - 7

let sec6Botones = [b.sections.sec6No, b.sections.sec6NoSe, b.sections.sec6Si]
sec6Botones.forEach(boton => {
    boton.addEventListener('click', () => animacionSecciones(sect.section6, sect.section7))
})

// 7 - 8 

let sec7Botones = [b.sections.sec7No, b.sections.sec7NoSe, b.sections.sec7Si]
sec7Botones.forEach(boton => {
    boton.addEventListener('click', () => animacionSecciones(sect.section7, sect.section8))
})

// 8 - 9 

let sec8Botones = [b.sections.sec8No, b.sections.sec8NoSe, b.sections.sec8Si]
sec8Botones.forEach(boton => {
    boton.addEventListener('click', () => animacionSecciones(sect.section8, sect.section9))
})

// 9 - 10

let sec9Botones = [b.sections.sec9Bilingue, b.sections.sec9Multilingue, b.sections.sec9UnIdioma]
sec9Botones.forEach(boton => {
    boton.addEventListener('click', () => animacionSecciones(sect.section9, sect.section10))
})

let sec10Botones = [b.sections.sec10Boceto, b.sections.sec10Desarrollada, b.sections.sec10EnDesarrollo, b.sections.sec10Idea];
sec10Botones.forEach(boton => {
    boton.addEventListener('click', () => animacionSecciones(sect.section10, sect.loginSec))
})

 



