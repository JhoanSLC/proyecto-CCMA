import { SECTIONS as sect, BUTTONS as b } from './constantes';

export let user = {
    "name":"",
    "last-name":"",
    "numero": 0,
    "correo":"",
    "pais":"",
    "valor": 0,
    "configuraciones": []
};
let op =0

b.loginButton.addEventListener("click", () => {
    user["name"] = b.userName.value;
    user["last-name"] = b.userLastName.value;
    user["numero"] = parseInt(b.userNumber.value, 10); 
    user["correo"] = b.userCorreo.value;
    user["pais"] = b.userPais.value;
});

const response = await fetch('https://664e7c36fafad45dfae02f85.mockapi.io/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
})
const result = await response.json();
console.log('Datos enviados correctamente:', result);


