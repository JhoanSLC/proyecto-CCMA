import { SECTIONS as sect, BUTTONS as b } from './constantes';

export let user = {
    "name":"",
    "last-name":"",
    "numero": 0,
    "correo":"",
    "pais":"",
    "valor": 0,
    "configuraciones": {}
};
let op =0


const url = 'https://664e7c36fafad45dfae02f85.mockapi.io/users'; // Reemplaza con tu URL de MockAPI

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
    user["name"] = b.userName.value;
    user["last-name"] = b.userLastName.textContent;
    user["numero"] = b.userLastName.textContent; 
    user["correo"] = b.userCorreo.textContent;
    user["pais"] = b.userPais.textContent;
    // Llama a la función para enviar los datos
    enviarDatos(url, user);
    
});




