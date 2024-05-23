import { BUTTONS as b, SECTIONS_BUTTONS as sb} from './constantes';
let PRECIO = document.getElementById('precio')
import { user } from './mockapi'



let total = 0;
valoresPresionados = [];

function actualizarTotal() {
    PRECIO.textContent = total.toLocaleString('es-CO', { minimumFractionDigits: 0 });
}

const sumarValor = (valor, boton) => {
    const valores = boton.getAttribute('data-value').split(',').map(Number);
    const valor = valores[valor]; 
    total += valor;
    valoresPresionados.push(valor);
    actualizarTotal();
}

retrocederBtn.addEventListener('click', () => {
    if (valoresPresionados.length > 0) {
        const ultimoValor = valoresPresionados.pop();
        total -= ultimoValor;
        actualizarTotal();
    }
});

const pasarAMoneda = (number) => {
    return number.toLocaleString('es-CO', { style: 'currency', currency: 'COP' }).replace(/COP\s/, '');
}


retrocederBtn.addEventListener('click', () => {
    if (valoresPresionados.length > 0) {
        const ultimoValor = valoresPresionados.pop();
        total -= ultimoValor;
        actualizarTotal();
    }
});


const addConfig = (llave, valor) => {
    user.configuraciones.llave = valor
};



for (const clave in sb) {
    if (Object.hasOwnProperty.call(sb, clave)) {
      const boton = sb[clave];
      boton.addEventListener('click', () => {
        if (boton === sb.sec1CalidadOptima )

        console.log('Se hizo clic en el botón:', clave);
      });
    }
  }