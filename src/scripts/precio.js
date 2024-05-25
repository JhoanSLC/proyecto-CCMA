
import { BUTTONS as b} from './constantes';
let PRECIO = document.getElementById('precio')
let precioh1=document.getElementById('precioh1')
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
const DATA4="data-config"
const DATA1 = "data-value";
const DATA2 = "data-value2";
const DATA3 = "data-value3";
export let botonValor=""
export let botonConfig=[]
let precioTotal = 0;
let option = 0;
let isThisRunning = false;


const addConfig = () => {
    user.configuraciones['calidad']=botonConfig[0]
    user.configuraciones['tipo de app']=botonConfig[1]
    user.configuraciones['tipo de diseño']=botonConfig[2]
    user.configuraciones['como sacaras beneficio']=botonConfig[3]
    user.configuraciones['¿sistema de login?']=botonConfig[4]
    user.configuraciones['¿integrada a web?']=botonConfig[5]
    user.configuraciones['¿perfiles propios?']=botonConfig[6]
    user.configuraciones['¿panel de admin?']=botonConfig[7]
    user.configuraciones['idioma']=botonConfig[8]
    user.configuraciones['nivel de app']=botonConfig[9]
    console.log(user)
}

const actualizarTotal=(precioTotal)=>{
    PRECIO.textContent=pasarAMoneda(precioTotal)
    precioh1.textContent=pasarAMoneda(precioTotal)
}
const pasarAMoneda=(number)=>{
    return number.toLocaleString('es-CO', { style: 'currency', currency: 'COP'}).replace(/COP\s/,'')
}
const sumarValor =(valor)=>{
    precioTotal+=Number(valor)
    actualizarTotal(precioTotal)
    addValor(precioTotal)
    
}
export const restarValor = (valor) => {
    precioTotal -= Number(valor);
    actualizarTotal(precioTotal);
    botonConfig.pop()
    addValor(precioTotal);
    console.log(precioTotal);
    console.log(botonValor)
};


const sacarValor = (botonASacar, valorASacar) => {
    return botonASacar.getAttribute(valorASacar)
}
const addValor = (valor)  =>{
    user["precioFinal"]=valor
}

const proceso = (valorASacar, boton2, boton3, valor2Asacar) => {
    if (isThisRunning) return;

    isThisRunning = true;
   
    for (let boton of buttonsList){ 
            boton.addEventListener('click', () => {
            botonValor = sacarValor(boton, valorASacar)
            botonConfig.push(sacarValor(boton,valor2Asacar)) 
            console.log(botonConfig)
            sumarValor(botonValor)
            console.log(precioTotal)
            console.log(botonValor)
            addConfig()
            
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
   proceso(DATA1, calidadPrecio, noImporta,DATA4)
   botonConfig.push(sacarValor(b.sections.sec1CalidadOptima,DATA4))
   console.log(botonConfig);
   addConfig()
  
})
b.sections.sec1CalidadPrecio.addEventListener('click', () => {
    proceso(DATA2, CalidaOptima,noImporta,DATA4)
    botonConfig.push(sacarValor(b.sections.sec1CalidadPrecio,DATA4))
    console.log(botonConfig);

    addConfig()
})
b.sections.sec1NoImporta.addEventListener('click', () => {
    botonConfig.push(sacarValor(b.sections.sec1NoImporta,DATA4))
    proceso(DATA3,calidadPrecio,CalidaOptima,DATA4)
    console.log(botonConfig);

    addConfig()
   
})






    










