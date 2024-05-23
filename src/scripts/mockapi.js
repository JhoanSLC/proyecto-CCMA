import { userButtons as ub} from './constantes';

export let user = {
    "nombre":"",
    "apellido":"",
    "numero": 0,
    "email":"",
    "pais":"",
    "precioFinal": 0,
    "configuraciones": {}
};
let op =0


const url = 'https://664e7c36fafad45dfae02f85.mockapi.io/users'; 

async function enviarDatos(apiUrl, data) {
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status}`);
        }

        const responseData = await response.json();
        console.log('Datos enviados exitosamente:', responseData);
    } catch (error) {
        console.error('Error al enviar los datos:', error);
    }
}

b.loginButton.addEventListener("click", () => {
    user.nombre = ub.userName.value;
    user.apellido = ub.userLastName.value;
    user.numero = ub.userLastName.value; 
    user.email = ub.userCorreo.value;
    user.pais = ub.userPais.value;
    // Llama a la función para enviar los datos
    enviarDatos(url, user);
    
});




