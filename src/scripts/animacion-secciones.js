
import { SECTIONS as sect, BUTTONS as b, userButtons as ub, SECTION_BUTTONS as sb} from './constantes'
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

let sec1Botones = [ub.sec1CalidadOptima, ub.sec1CalidadPrecio, ub.sec1NoImporta];

sec1Botones.forEach(boton => {
    boton.addEventListener('click', () => animacionSecciones(sect.section1, sect.section2));
})

// 2 - 3

let sec2Botones = [ub.sec2Android, ub.sec2AndroidIOS, ub.sec2Escritorio, ub.sec2Windows, ub.sec2iOS];
let isDesktop = false

sec2Botones.forEach(boton => {
    if (boton === ub.sec2Escritorio) {
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
let secEscBotones = [ub.secEscNativa, ub.secEscPwa, ub.secEscSpa];
secEscBotones.forEach(boton => {
    boton.addEventListener('click', () => animacionSecciones(sect.sectionEscritorio, sect.section3))
})

b.reg3

// 3 - 4
let sec3Botones = [ub.sec3NoNecesita, ub.sec3Personalizada, ub.sec3RepWeb, ub.sec3Sencilla]
sec3Botones.forEach(boton => {
    boton.addEventListener('click', () => animacionSecciones(sect.section3, sect.section4))
})

// 4 - 5

let sec4Botones = [ub.sec4Gratis, ub.sec4InApp, ub.sec4Otros, ub.sec4Pago]
sec4Botones.forEach(boton => {
    boton.addEventListener('click', () => animacionSecciones(sect.section4, sect.section5))
})

// 5 - 6 

let sec5Botones = [ub.sec5Email, ub.sec5No, ub.sec5NoSe, ub.sec5Redes]
sec5Botones.forEach(boton => {
    boton.addEventListener('click', () => animacionSecciones(sect.section5, sect.section6))
})

// 6 - 7

let sec6Botones = [ub.sec6No, ub.sec6NoSe, ub.sec6Si]
sec6Botones.forEach(boton => {
    boton.addEventListener('click', () => animacionSecciones(sect.section6, sect.section7))
})

// 7 - 8 

let sec7Botones = [ub.sec7No, ub.sec7NoSe, ub.sec7Si]
sec7Botones.forEach(boton => {
    boton.addEventListener('click', () => animacionSecciones(sect.section7, sect.section8))
})

// 8 - 9 

let sec8Botones = [ub.sec8No, ub.sec8NoSe, ub.sec8Si]
sec8Botones.forEach(boton => {
    boton.addEventListener('click', () => animacionSecciones(sect.section8, sect.section9))
})

// 9 - 10

let sec9Botones = [ub.sec9Bilingue, ub.sec9Multilingue, ub.sec9UnIdioma]
sec9Botones.forEach(boton => {
    boton.addEventListener('click', () => animacionSecciones(sect.section9, sect.section10))
})

let sec10Botones = [ub.sec10Boceto, ub.sec10Desarrollada, ub.sec10EnDesarrollo, ub.sec10Idea];
sec10Botones.forEach(boton => {
    boton.addEventListener('click', () => animacionSecciones(sect.section10, sect.loginSec))
})

 



