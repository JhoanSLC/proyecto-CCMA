import { SECTIONS as sect, BUTTONS as b} from './constantes'


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

b.EMPEZAR.addEventListener('click', () => animacionSecciones(sect.mainSection, sect.loginSec));
loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita el envío del formulario por defecto

    if (loginForm.checkValidity()) {
        // El formulario es válido
        animacionSecciones(sect.loginSec, sect.section1);
    } else {
        // El formulario no es válido, muestra mensajes de validación
        loginForm.reportValidity();
    }
});

// 1 - 2

let sec1Botones = [b.sec1CalidadOptima, b.sec1CalidadPrecio, b.sec1NoImporta];

sec1Botones.forEach(boton => {
    boton.addEventListener('click', () => animacionSecciones(sect.section1, sect.section2));
})

// 2 - 3

let sec2Botones = [b.sec2Android, b.sec2AndroidIOS, b.sec2Escritorio, b.sec2Windows, b.sec2iOS];

sec2Botones.forEach(boton => {
    if (boton === b.sec2Escritorio) {
        boton.addEventListener('click', () => animacionSecciones(sect.section2, sect.sectionEscritorio));
    }
    boton.addEventListener('click', () => animacionSecciones(sect.section2, sect.section3));
})

// 2.5 - 3 
let secEscBotones = [b.secEscNativa, b.secEscPwa, b.secEscSpa];
secEscBotones.forEach(boton => {
    boton.addEventListener('click', () => animacionSecciones())
})

// 3 - 4
let sec3Botones = [b.sec3NoNecesita, b.sec3Personalizada, b.sec3RepWeb, b.sec3Sencilla]
sec3Botones.forEach(boton => {
    boton.addEventListener('click', () => animacionSecciones(sect.section3, sect.section4))
})

// 4 - 5

let sec4Botones = [b.sec4Gratis, b.sec4InApp, b.sec4Otros, b.sec4Pago]
sec4Botones.forEach(boton => {
    boton.addEventListener('click', () => animacionSecciones(sect.section4, sect.section5))
})

// 5 - 6 

let sec5Botones = [b.sec5Email, b.sec5No, b.sec5NoSe, b.sec5Redes]
sec5Botones.forEach(boton => {
    boton.addEventListener('click', () => animacionSecciones(sect.section5, sect.section6))
})

// 6 - 7

let sec6Botones = [b.sec6No, b.sec6NoSe, b.sec6Si]
sec6Botones.forEach(boton => {
    boton.addEventListener('click', () => animacionSecciones(sect.section6, sect.section7))
})

// 7 - 8 

let sec7Botones = [b.sec7No, b.sec7NoSe, b.sec7Si]
sec7Botones.forEach(boton => {
    boton.addEventListener('click', () => animacionSecciones(sect.section7, sect.section8))
})

// 8 - 9 

let sec8Botones = [b.sec8No, b.sec8NoSe, b.sec8Si]
sec8Botones.forEach(boton => {
    boton.addEventListener('click', () => animacionSecciones(sect.section8, sect.section9))
})

// 9 - 10

let sec9Botones = [b.sec9Bilingue, b.sec9Multilingue, b.sec9UnIdioma]
sec9Botones.forEach(boton => {
    boton.addEventListener('click', () => animacionSecciones(sect.section9, sect.section10))
})


 



