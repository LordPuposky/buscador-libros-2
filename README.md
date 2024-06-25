**Buscador de Libros**

Este proyecto es un CRUD (Create, Read, Update, Delete) de comentarios implementado con HTML, CSS y JavaScript. La aplicación permite realizar operaciones básicas de gestión de comentarios utilizando una API de ejemplo.

**Contenido**

Descripción
Tecnologías Utilizadas
Instalación
Uso
Funciones CRUD
Estructura del Proyecto
API de Ejemplo

**Descripción**

La aplicación permite gestionar comentarios a través de una interfaz web simple. Los usuarios pueden buscar comentarios por ID, crear nuevos comentarios, actualizar comentarios existentes y eliminar comentarios.

**Tecnologías Utilizadas**

HTML
CSS
JavaScript
Fetch API

**Instalación**

Clona este repositorio en tu máquina local:

git clone https://github.com/LordPuposky/buscador-libros-2.git

Navega hasta el directorio del proyecto:

cd buscador-de-libros

Abre el archivo index.html en tu navegador web.

**Uso**
Consultar un comentario (Read): Ingresa el ID del comentario que deseas buscar y haz clic en el botón "Consultar". Los datos del comentario se mostrarán en los campos del formulario.

Crear un comentario (Create): Llena los campos del formulario con los datos del nuevo comentario y haz clic en el botón "Crear". El comentario será creado y se mostrará un mensaje de confirmación.

Actualizar un comentario (Update): Ingresa el ID del comentario que deseas actualizar, modifica los campos del formulario con los nuevos datos y haz clic en el botón "Actualizar". El comentario será actualizado y se mostrará un mensaje de confirmación.

Eliminar un comentario (Delete): Ingresa el ID del comentario que deseas eliminar y haz clic en el botón "Eliminar". El comentario será eliminado y se mostrará un mensaje de confirmación.

**Funciones CRUD**

Consultar (Read): Realiza una solicitud GET a la API para obtener un comentario específico y llenar los campos del formulario con los datos recibidos.
Crear (Create): Envía una solicitud POST a la API para crear un nuevo comentario con los datos del formulario.
Actualizar (Update): Envía una solicitud PUT a la API para actualizar un comentario existente con los datos del formulario.
Eliminar (Delete): Envía una solicitud DELETE a la API para eliminar un comentario específico y limpia los campos del formulario.

**Estructura del Proyecto**

buscador-de-libros/
├── index.html
├── styles.css
└── script.js

index.html: Contiene la estructura HTML de la aplicación.
styles.css: Contiene los estilos CSS para la apariencia de la aplicación.
script.js: Contiene el código JavaScript para las funciones CRUD y la interacción con la API.

**API de Ejemplo**

Este proyecto utiliza la API de ejemplo de JSONPlaceholder para realizar las operaciones CRUD sobre los comentarios. Puedes encontrar más información sobre esta API en JSONPlaceholder.

**Book Finder**

This project is a CRUD (Create, Read, Update, Delete) for comments implemented with HTML, CSS, and JavaScript. The application allows performing basic comment management operations using a sample API.

**Contents**

Description
Technologies Used
Installation
Usage
CRUD Functions
Project Structure
Sample API

**Description**

The application allows managing comments through a simple web interface. Users can search for comments by ID, create new comments, update existing comments, and delete comments.

**Technologies Used**

HTML
CSS
JavaScript
Fetch API

**Installation**

Clone this repository to your local machine:

git clone https://github.com/LordPuposky/buscador-libros-2.git

Navigate to the project directory:

cd book-finder

Open the index.html file in your web browser.

**Usage**

Read a comment: Enter the ID of the comment you want to search for and click the "Consultar" button. The comment data will be displayed in the form fields.

Create a comment: Fill in the form fields with the new comment data and click the "Crear" button. The comment will be created, and a confirmation message will be displayed.

Update a comment: Enter the ID of the comment you want to update, modify the form fields with the new data, and click the "Actualizar" button. The comment will be updated, and a confirmation message will be displayed.

Delete a comment: Enter the ID of the comment you want to delete and click the "Eliminar" button. The comment will be deleted, and a confirmation message will be displayed.

**CRUD Functions**

Read: Sends a GET request to the API to fetch a specific comment and populate the form fields with the received data.
Create: Sends a POST request to the API to create a new comment with the form data.
Update: Sends a PUT request to the API to update an existing comment with the form data.
Delete: Sends a DELETE request to the API to remove a specific comment and clears the form fields.

**Project Structure**

buscador-libros/
├── index.html
├── styles.css
└── script.js

index.html: Contains the HTML structure of the application.
styles.css: Contains the CSS styles for the application's appearance.
script.js: Contains the JavaScript code for CRUD functions and API interaction.

**Sample API**

This project uses the JSONPlaceholder sample API to perform CRUD operations on comments. You can find more information about this API at JSONPlaceholder.

