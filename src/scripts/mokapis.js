export function enviarDatosAMokapi(data) {
  const url = 'https://664a68e3a300e8795d41e736.mockapi.io/api/v1/';
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify(data) 
  })
  .then(response => {
    // Verificar si la respuesta del servidor es exitosa
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



