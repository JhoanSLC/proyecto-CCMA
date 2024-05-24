import { BUTTONS as b} from './constantes';
let PRECIO = document.getElementById('precio')
import { user } from './mockapi'

let precioTotal = 0;

let option = 0;

let optima = false;
let calidadPrecio = false;
let noImporta = false;

const activo = (activar, desact, desact2) => {
    activar = true;
    desact = false;
    desact = false;
}

b.sec1CalidadOptima.addEventListener('click', () => {activo(optima, calidadPrecio, noImporta)})
b.sec1CalidadPrecio.addEventListener('click', () => {activo(calidadPrecio, optima, noImporta)})
b.noImporta.addEventListener('click', () => {activo(noImporta, optima, calidadPrecio)})


if 