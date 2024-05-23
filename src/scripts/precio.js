import { BUTTONS as b } from './constantes';
let PRECIO = document.getElementById('precio')
import { user } from './mockapi'

let precioFinal = Number;
let thisPrecio = Number;

function formatCurrency(number) {
    let formattedNumber = number.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
    return formattedNumber;
}

const restarPrecio = (precio) => {
    precioFinal -= precio
    thisPrecio = 0;
    PRECIO.textContent = formatCurrency(precioFinal);
    
}

const addValor = (precio) => {
    thisPrecio = precio;
    precioFinal += precio
    PRECIO.textContent = formatCurrency(precioFinal)
}

let op;

const addConfig = (newLlave, valor) => {
    user.configuraciones.newllave = valor
}

op = b.sec1CalidadOptima.addEventListener("click", () => {
    precioFinal = 0;
    thisPrecio = 0;
    console.log(thisPrecio);
    console.log(precioFinal)
    PRECIO.textContent = formatCurrency(precioFinal)
    addConfig("calidad", "óptima")
    op = 1
    
});

b.sec1CalidadPrecio.addEventListener("click", () => {
    op=2
    addConfig("calidad", "calidad/precio")
    sections();
});

b.sec1NoImporta.addEventListener("click", () => {
    op=3
    addConfig("calidad", "no importa")
    sections();
});

const ultimasConfig=()=>{

    b.sec10Boceto.addEventListener("click" ,()=>{
        addConfig("Boceto");
    });
    b.sec10Desarrollada.addEventListener("click" ,()=>{
        addConfig("Desarrollada");
    });
    b.sec10EnDesarrollo.addEventListener("click" ,()=>{
        addConfig("En Desarrollo");
    });
    b.sec10Idea.addEventListener("click" ,()=>{
        addConfig("Idea");
    });
}


    if (op==1) {
        

        b.sec2Android.addEventListener("click", () => {
            addValor(9000000);
            console.log(thisPrecio);
            console.log(precioFinal)
            addConfig("Android");
        });
        
        b.sec2AndroidIOS.addEventListener("click", () => {
            addValor(15000000)
            addConfig("Android & IOS");
        });
        b.sec2Escritorio.addEventListener("click", () => {
            addValor(9000000);
            addConfig("Escritorio");
        });
        b.sec2Windows.addEventListener("click", () => {
            addValor(9000000);
            addConfig("Windows");
        });
        b.sec2iOS.addEventListener("click", () => {
            addValor(9000000);
            addConfig("IOS");
        });

        b.reg3.addEventListener('click', () => { 
            restarPrecio(thisPrecio)
            console.log(thisPrecio);
            console.log(precioFinal)
        });
        b.sec3NoNecesita.addEventListener("click", () => {
            addValor(0);
            addConfig("No necesita");
        });
        b.sec3Sencilla.addEventListener("click", () => {
            addValor(6000000)
            addConfig("Sencilla");
        });
        b.sec3Personalizada.addEventListener("click", () => {
            addValor(18000000);
            addConfig("Personalizada");
        });
        b.sec3RepWeb.addEventListener("click", () => {
            addValor(12000000);
            addConfig("Replica Web");
        });
        b.sec4Gratis.addEventListener("click", () => {
            addValor(750000);
            addConfig("Gratis");
        });
        b.sec4Pago.addEventListener("click", () => {
            addValor(750000);
            addConfig("Pago");
        });
        b.sec4InApp.addEventListener("click", () => {
            addValor(6000000);
            addConfig("In-App");
        });
        b.sec4Otros.addEventListener("click", () => {
            addValor(1500000);
            addConfig("Otros");
        });
        b.sec5Redes.addEventListener("click", () => {
            addValor(6000000);
            addConfig("Redes Sociales");
        });
        b.sec5Email.addEventListener("click", () => {
            addValor(3750000);
            addConfig("Email");
        });
        b.sec5No.addEventListener("click", () => {
            addValor(0);
            addConfig("No");
        });
        b.sec5NoSe.addEventListener("click", () => {
            addValor(3000000);
            addConfig("No Sé");
        });
        b.sec6Si.addEventListener("click", () => {
            addValor(6000000);
            addConfig("Si");
        });
        b.sec6No.addEventListener("click", () => {
            addValor(0);
            addConfig("No");
        });
        b.sec6NoSe.addEventListener("click", () => {
            addValor(3000000);
            addConfig("Nose");
        });
        b.sec7Si.addEventListener("click", () => {
            addValor(6000000);
            addConfig("Si");
        });
        b.sec7No.addEventListener("click", () => {
            addValor(0);
            addConfig("No");
        });
        b.sec7NoSe.addEventListener("click", () => {
            addValor(3000000);
            addConfig("Nose");
        });
        b.sec8Si.addEventListener("click", () => {
            addValor(6000000);
            addConfig("Si");
        });
        b.sec8No.addEventListener("click", () => {
            addValor(0);
            addConfig("No");
        });
        b.sec8NoSe.addEventListener("click", () => {
            addValor(3000000);
            addConfig("Nose");
        });
        b.sec9UnIdioma.addEventListener("click",()=>{
            addValor(0)
            addConfig("Un Idioma")
        })
        b.sec9Bilingue.addEventListener("click",()=>{
            addValor(3000000)
            addConfig("Un Idioma")
        })
        b.sec9Multilingue.addEventListener("click",()=>{
            addValor(6000000)
            addConfig("Un Idioma")
        })
        ultimasConfig()
        } else if (op==2) {
        b.sec2Android.addEventListener("click", () => {
            addValor(6000000);
            addConfig("Android");
        });
        b.sec2AndroidIOS.addEventListener("click", () => {
            addValor(10000000);
            addConfig("Android & IOS");
        });
        b.sec2Escritorio.addEventListener("click", () => {
            addValor(6000000);
            addConfig("Escritorio");
        });
        b.sec2Windows.addEventListener("click", () => {
            addValor(6000000);
            addConfig("Windows");
        });
        b.sec2iOS.addEventListener("click", () => {
            addValor(6000000);
            addConfig("IOS");
        });
        b.sec3NoNecesita.addEventListener("click", () => {
            addValor(0);
            addConfig("No necesita");
        });
        b.sec3Sencilla.addEventListener("click", () => {
            addValor(4000000);
            addConfig("Sencilla");
        });
        b.sec3Personalizada.addEventListener("click", () => {
            addValor(12000000);
            addConfig("Personalizada");
        });
        b.sec3RepWeb.addEventListener("click", () => {
            addValor(8000000);
            addConfig("Replica Web");
        });
        b.sec4Gratis.addEventListener("click", () => {
            addValor(500000);
            addConfig("Gratis");
        });
        b.sec4Pago.addEventListener("click", () => {
            addValor(500000);
            addConfig("Pago");
        });
        b.sec4InApp.addEventListener("click", () => {
            addValor(4000000);
            addConfig("In-App");
        });
        b.sec4Otros.addEventListener("click", () => {
            addValor(1000000);
            addConfig("Otros");
        });
        b.sec5Redes.addEventListener("click", () => {
            addValor(4000000);
            addConfig("Redes Sociales");
        });
        b.sec5Email.addEventListener("click", () => {
            addValor(2500000);
            addConfig("Email");
        });
        b.sec5No.addEventListener("click", () => {
            addValor(0);
            addConfig("No");
        });
        b.sec5NoSe.addEventListener("click", () => {
            addValor(2000000);
            addConfig("No Sé");
        });
        
        b.sec6Si.addEventListener("click", () => {
            addValor(4000000);
            addConfig("Si");
        });
        b.sec6No.addEventListener("click", () => {
            addValor(0);
            addConfig("No");
        });
        b.sec6NoSe.addEventListener("click", () => {
            addValor(2000000);
            addConfig("Nose");
        });
        b.sec7Si.addEventListener("click", () => {
            addValor(4000000);
            addConfig("Si");
        });
        b.sec7No.addEventListener("click", () => {
            addValor(0);
            addConfig("No");
        });
        b.sec7NoSe.addEventListener("click", () => {
            addValor(2000000);
            addConfig("Nose");
        });
        b.sec8Si.addEventListener("click", () => {
            addValor(4000000);
            addConfig("Si");
        });
        b.sec8No.addEventListener("click", () => {
            addValor(0);
            addConfig("No");
        });
        b.sec8NoSe.addEventListener("click", () => {
            addValor(2000000);
            addConfig("Nose");
        });
        b.sec9UnIdioma.addEventListener("click",()=>{
            addValor(0)
            addConfig("Un Idioma")
        })
        b.sec9Bilingue.addEventListener("click",()=>{
            addValor(2000000)
            addConfig("Bilingue")
        })
        b.sec9Multilingue.addEventListener("click",()=>{
            addValor(4000000)
            addConfig("Multibilingue")
        })
        ultimasConfig()
    } else {
        b.sec2Android.addEventListener("click", () => {
            addValor(3000000);
            addConfig("Android");
        });
        b.sec2AndroidIOS.addEventListener("click", () => {
            addValor(5000000);
            addConfig("Android & IOS");
        });
        b.sec2Escritorio.addEventListener("click", () => {
            addValor(3000000);
            addConfig("Escritorio");
        });
        b.sec2Windows.addEventListener("click", () => {
            addValor(3000000);
            addConfig("Windows");
        });
        b.sec2iOS.addEventListener("click", () => {
            addValor(3000000);
            addConfig("IOS");
        });
        b.sec3NoNecesita.addEventListener("click", () => {
            addValor(0);
            addConfig("No necesita");
        });
        b.sec3Sencilla.addEventListener("click", () => {
            addValor(2000000);
            addConfig("Sencilla");
        });
        b.sec3Personalizada.addEventListener("click", () => {
            addValor(6000000);
            addConfig("Personalizada");
        });
        b.sec3RepWeb.addEventListener("click", () => {
            addValor(4000000);
            addConfig("Replica Web");
        });
        b.sec4Gratis.addEventListener("click", () => {
            addValor(250000);
            addConfig("Gratis");
        });
        b.sec4Pago.addEventListener("click", () => {
            addValor(250000);
            addConfig("Pago");
        });
        b.sec4InApp.addEventListener("click", () => {
            addValor(2000000);
            addConfig("In-App");
        });
        b.sec4Otros.addEventListener("click", () => {
            addValor(500000);
            addConfig("Otros");
        });
        b.sec5Redes.addEventListener("click", () => {
            addValor(2000000);
            addConfig("Redes Sociales");
        });
        b.sec5Email.addEventListener("click", () => {
            addValor(1250000);
            addConfig("Email");
        });
        b.sec5No.addEventListener("click", () => {
            addValor(0);
            addConfig("No");
        });
        b.sec5NoSe.addEventListener("click", () => {
            addValor(1000000);
            addConfig("No Sé");
        });
        b.sec6Si.addEventListener("click", () => {
            addValor(2000000);
            addConfig("Si");
        });
        b.sec6No.addEventListener("click", () => {
            addValor(0);
            addConfig("No");
        });
        b.sec6NoSe.addEventListener("click", () => {
            addValor(1000000);
            addConfig("Nose");
        });
        b.sec7Si.addEventListener("click", () => {
            addValor(2000000);
            addConfig("Si");
        });
        b.sec7No.addEventListener("click", () => {
            addValor(0);
            addConfig("No");
        });
        b.sec7NoSe.addEventListener("click", () => {
            addValor(1000000);
            addConfig("Nose");
        });
        b.sec8Si.addEventListener("click", () => {
            addValor(2000000);
            addConfig("Si");
        });
        b.sec8No.addEventListener("click", () => {
            addValor(0);
            addConfig("No");
        });
        b.sec8NoSe.addEventListener("click", () => {
            addValor(1000000);
            addConfig("Nose");
        });
        b.sec9UnIdioma.addEventListener("click",()=>{
            addValor(0)
            addConfig("Un Idioma")
        })
        b.sec9Bilingue.addEventListener("click",()=>{
            addValor(1000000)
            addConfig("Un Idioma")
        })
        b.sec9Multilingue.addEventListener("click",()=>{
            addValor(2000000)
            addConfig("Un Idioma")
        })

    }


