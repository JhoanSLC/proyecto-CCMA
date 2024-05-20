export function enviarDatosAMokapi(data) {
    // URL del endpoint del servicio Mokapi
    const url = 'https://664a68e3a300e8795d41e736.mockapi.io/api/v1/';

    // Enviar los datos al Mokapi utilizando fetch()
    fetch(url, {
      method: 'POST', // Método HTTP POST
      headers: {
        'Content-Type': 'application/json' // Tipo de contenido JSON
      },
      body: JSON.stringify(data) // Convertir los datos a formato JSON
    })
    .then(response => {
      // Verificar si la respuesta del servidor es exitosa
      if (!response.ok) {
        throw new Error('Hubo un problema al enviar los datos al Mokapi.');
      }
      // Si la respuesta es exitosa, convertir la respuesta a JSON
      return response.json();
    })
    .then(data => {
      // Aquí puedes manejar la respuesta del servidor si es necesario
      console.log('Datos enviados al Mokapi:', data);
    })
    .catch(error => {
      // Capturar y manejar cualquier error que ocurra durante la solicitud
      console.error('Error:', error);
    });
  }



