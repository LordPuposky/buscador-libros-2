async function consultar() {
    let idBusqueda = document.getElementById('idBusqueda').value;

    try {
        const respuesta = await fetch(`https://jsonplaceholder.typicode.com/comments/${idBusqueda}`);
        
        if (!respuesta.ok) {
            throw new Error('Error de red: ' + respuesta.status);
        }
        
        const datos = await respuesta.json();
        console.log('Datos recibidos:', datos);

        document.getElementById('campo1').value = datos.postId;
        document.getElementById('campo2').value = datos.id;
        document.getElementById('campo3').value = datos.name;
        document.getElementById('campo4').value = datos.email;

    } catch (error) {
        console.log('Error:', error);
        alert('ID no encontrado');
    }
}

async function crear() {
    let nuevoComentario = {
        postId: document.getElementById('campo1').value,
        name: document.getElementById('campo3').value,
        email: document.getElementById('campo4').value,
        body: 'Este es un comentario de prueba'
    };

    try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuevoComentario)
        });
        
        if (!respuesta.ok) {
            throw new Error('Error de red: ' + respuesta.status);
        }
        
        const datos = await respuesta.json();
        console.log('Comentario creado:', datos);
        alert('Libro creado con ID: ' + datos.id);

    } catch (error) {
        console.log('Error:', error);
        alert('No se pudo crear el libro');
    }
}

async function actualizar() {
    let idBusqueda = document.getElementById('idBusqueda').value;
    let comentarioActualizado = {
        postId: document.getElementById('campo1').value,
        id: document.getElementById('campo2').value,
        name: document.getElementById('campo3').value,
        email: document.getElementById('campo4').value,
        body: 'Este libro se ha actualizado'
    };

    try {
        const respuesta = await fetch(`https://jsonplaceholder.typicode.com/comments/${idBusqueda}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(comentarioActualizado)
        });
        
        if (!respuesta.ok) {
            throw new Error('Error de red: ' + respuesta.status);
        }
        
        const datos = await respuesta.json();
        console.log('Comentario actualizado:', datos);
        alert('Libro actualizado');

    } catch (error) {
        console.log('Error:', error);
        alert('No se pudo actualizar el libro');
    }
}

async function eliminar() {
    let idBusqueda = document.getElementById('idBusqueda').value;

    try {
        const respuesta = await fetch(`https://jsonplaceholder.typicode.com/comments/${idBusqueda}`, {
            method: 'DELETE'
        });
        
        if (!respuesta.ok) {
            throw new Error('Error de red: ' + respuesta.status);
        }
        
        console.log('Libro eliminado');
        alert('Libro eliminado');
        document.getElementById('campo1').value = '';
        document.getElementById('campo2').value = '';
        document.getElementById('campo3').value = '';
        document.getElementById('campo4').value = '';

    } catch (error) {
        console.log('Error:', error);
        alert('No se pudo eliminar el libro');
    }
}
