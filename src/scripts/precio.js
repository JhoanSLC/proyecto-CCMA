
import { BUTTONS as b} from './constantes';
let PRECIO = document.getElementById('precio')
import { user } from './mockapi'
const CalidaOptima = b.sections.sec1CalidadOptima;
const calidadPrecio = b.sections.sec1CalidadPrecio;
const noImporta = b.sections.sec1NoImporta;
const buttonsList = [b.sections.sec1CalidadOptima,
    b.sections.sec1CalidadPrecio,
    b.sections.sec1NoImporta,
    b.sections.sec2Android,
    b.sections.sec2AndroidIOS,
    b.sections.sec2Escritorio,
    b.sections.sec2iOS,
    b.sections.sec2Windows,
    b.sections.sec3NoNecesita,
    b.sections.sec3Personalizada,
    b.sections.sec3RepWeb,
    b.sections.sec3Sencilla,
    b.sections.sec4Gratis,
    b.sections.sec4InApp,
    b.sections.sec4Otros,
    b.sections.sec4Pago,
    b.sections.sec5Email,
    b.sections.sec5No,
    b.sections.sec5NoSe,
    b.sections.sec5Redes,
    b.sections.sec6No,
    b.sections.sec6NoSe,
    b.sections.sec6Si,
    b.sections.sec7No,
    b.sections.sec7NoSe,
    b.sections.sec7Si,
    b.sections.sec8No,
    b.sections.sec8NoSe,
    b.sections.sec8Si,
    b.sections.sec9Bilingue,
    b.sections.sec9Multilingue,
    b.sections.sec9UnIdioma,
    b.sections.sec10Boceto,
    b.sections.sec10Desarrollada,
    b.sections.sec10EnDesarrollo,
    b.sections.sec10Idea,
    b.sections.secEscNativa,
    b.sections.secEscPwa,
    b.sections.secEscSpa]

const DATA1 = "data-value";
const DATA2 = "data-value2";
const DATA3 = "data-value3";

let precioTotal = 0;
let option = 0;
let isThisRunning = false;


const addConfig = () => {}

const actualizarTotal=()=>{
    PRECIO.textContent=pasarAMoneda()
}
const pasarAMoneda=()=>{
    return number.toLocaleString('es-CO', { style: 'currency', currency: 'COP'}).replace(/COP\s/,'')
}
const sumarValor =(valor)=>{
    precioTotal+=valor
    actualizarTotal()
    
}

const sacarValor = (botonASacar, valorASacar) => {
    return botonASacar.getAttribute(valorASacar)
}

const proceso = (valorASacar, boton2, boton3) => {
    if (isThisRunning) return;

    isThisRunning = true;
   
    for (let boton of buttonsList){ 
            boton.addEventListener('click', () => {
            let botonValor = sacarValor(boton, valorASacar)
            console.log(botonValor)
        })
    }

    boton2.addEventListener('click', () => {
        isThisRunning = false;
    })

    // Botón para detener el proceso actual
    boton3.addEventListener('click', () => {
        isThisRunning = false;
    })

}

b.sections.sec1CalidadOptima.addEventListener('click', () => {
   proceso(DATA1, calidadPrecio, noImporta)  
})
b.sections.sec1CalidadPrecio.addEventListener('click', () => {
    proceso(DATA2)
})
b.sections.sec1NoImporta.addEventListener('click', () => {
    proceso(DATA3)
   
})






    










