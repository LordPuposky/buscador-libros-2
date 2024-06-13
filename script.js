// Función asíncrona para consultar los datos del servidor
async function consultar() {
    // Obtén el valor del campo de búsqueda por ID
    let idBusqueda = document.getElementById('idBusqueda').value;

    try {
        // Realiza una solicitud fetch a la API
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
        
        // Verifica si la respuesta es correcta (status 200)
        if (!respuesta.ok) {
            throw new Error('Error de red: ' + respuesta.status); // Lanza un error si la respuesta no es correcta
        }
        
        // Convierte la respuesta en formato JSON
        const datos = await respuesta.json();
        console.log('Datos recibidos:', datos); // Muestra los datos recibidos en la consola

        // Busca el comentario cuyo ID coincide con el ID de búsqueda
        let resultado = datos.find(comentario => comentario.id == idBusqueda);

        // Si se encuentra un resultado, llena los campos con la información correspondiente
        if (resultado) {
            document.getElementById('campo1').value = resultado.postId;
            document.getElementById('campo2').value = resultado.id;
            document.getElementById('campo3').value = resultado.name;
            document.getElementById('campo4').value = resultado.email;
        } else {
            // Si no se encuentra un resultado, muestra una alerta y limpia los campos
            alert('ID no encontrado');
            document.getElementById('campo1').value = '';
            document.getElementById('campo2').value = '';
            document.getElementById('campo3').value = '';
            document.getElementById('campo4').value = '';
        }
    } catch (error) {
        // Muestra el error en la consola
        console.log('Error:', error);
    }
}
