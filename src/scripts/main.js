
import './animacion-secciones';
import { SECTIONS as sect, BUTTONS as b } from './constantes';
import './regresar'
export let user = {
    "nombre": "",
    "apellidos":"",
    "telefono": 0,
    "correo":"",
    "pais":"",
    "valor": 0,
    "configuraciones": []
};
export function actualizarUser(data) {
    user.valor++;
    user.nombre = data.nombre;
    user.apellidos = data.apellidos;
    user.telefono = data.telefono;
    user.correo = data.correo;
    user.pais = data.pais;
    user.configuraciones.push(data);
    console.log('User updated:', user);
}
const addValor = (valor) => {
    user["valor"] += valor;
    console.log(user);
};

const addConfig = (config) => {
    user["configuraciones"].push(config);
    console.log(user["configuraciones"]);
};

b.sec1CalidadOptima.addEventListener("click", () => {
    op=1
    sections();
});

b.sec1CalidadPrecio.addEventListener("click", () => {
    op=2
    sections();
});

b.sec1NoImporta.addEventListener("click", () => {
    op=3
    sections();
});

const sections = () => {
    if (op==1) {
        b.sec2Android.addEventListener("click", () => {
            addValor(9000000);
            addConfig("Android");
        });
        b.sec2AndroidIOS.addEventListener("click", () => {
            addValor(15000000);
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
        b.sec3NoNecesita.addEventListener("click", () => {
            addValor(0);
            addConfig("No necesita");
        });
        b.sec3Sencilla.addEventListener("click", () => {
            addValor(6000000);
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
        b.sec10Boceto.addEventListener("click" ,()=>{
            addConfig("Boceto");
        })
        b.sec10Desarrollada.addEventListener("click" ,()=>{
            addConfig("Desarrollada");
        })
        b.sec10EnDesarrollo.addEventListener("click" ,()=>{
            addConfig("En Desarrollo");
        })
        b.sec10Idea.addEventListener("click" ,()=>{
            addConfig("Idea");
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
            addConfig("Un Idioma")
        })
        b.sec9Multilingue.addEventListener("click",()=>{
            addValor(4000000)
            addConfig("Un Idioma")
        })
        
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
            addConfig("Un Idioma")
        })
        b.sec9Multilingue.addEventListener("click",()=>{
            addValor(4000000)
            addConfig("Un Idioma")
        })
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
};

console.log(user);

