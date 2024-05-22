import { actualizarUser,user } from "./main";
export function enviarDatosAMokapi(data) {
  const url = 'https://664a68e3a300e8795d41e736.mockapi.io/api/v1/users';
  fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify(data) 
  })
  // Verificar si la respuesta del servidor es exitosa
  .then(response => {
    if (!response.ok) {
      throw new Error('Hubo un problema al enviar los datos al Mokapi.');
    }
    return response.json();
  })

  .then(data => {
    console.log('Datos enviados al Mokapi:', data);
  })
  .catch(error => {
    //manejo de errores 
    console.error('Error:', error);
  });
}

function enviarDatosLogin(event) {
  event.preventDefault(); 
  const nombre = (document.getElementById('nombre-usuario')).value;
  const apellidos = (document.getElementById('apellidos-usuario')).value;
  const pais = (document.getElementById('pais-usuario')).value;
  const telefono = (document.getElementById('telefono-usuario')).value;
  const correo = user.correo

  // Construir el objeto de datos
  const data = {
      nombre,
      apellidos,
      pais,
      telefono,
      correo
  };
  actualizarUser(data);
  enviarDatosAMokapi(data);

  const form = document.getElementById('loginForm');
  form.reset();
  }

  // Agregar un listener al botón de login para llamar a la función enviarDatosLogin
  document.addEventListener('DOMContentLoaded', (event) => {
  const loginButton = document.getElementById('loginButton');
  if (loginButton) {
      loginButton.addEventListener('click', enviarDatosLogin);
  }
  });
// FIN DE MOKAPI---------


