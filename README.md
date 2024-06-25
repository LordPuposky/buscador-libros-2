# Buscador de Libros

Este proyecto es una aplicación web simple que permite a los usuarios buscar información sobre libros utilizando un ID de búsqueda. Los datos se obtienen de una API externa y se muestran en la interfaz del usuario.

## Estructura del Proyecto

El proyecto está compuesto por los siguientes archivos:

- index.html: El archivo HTML que define la estructura de la interfaz de usuario.
- styles.css: El archivo CSS que contiene los estilos para la interfaz de usuario.
- script.js: El archivo JavaScript que maneja la funcionalidad del buscador y la interacción con la API.

## Instrucciones

### 1. Clonar el Repositorio

Para comenzar, clona este repositorio en tu máquina local utilizando el siguiente comando:

git clone https://github.com/LordPuposky/buscador-libros-2.git

2. Abrir el Archivo HTML
Navega al directorio del proyecto y abre el archivo index.html en tu navegador web preferido.

3. Usar la Aplicación
Ingresa un ID de búsqueda en el primer campo de entrada.
Haz clic en el botón "Consultar".
Los datos relacionados con el ID ingresado se mostrarán en los cuatro campos de entrada restantes.

Descripción de los Archivos
**index.html**
Este archivo contiene la estructura básica de la página web. Incluye un título, cinco campos de entrada y un botón para realizar la consulta.

**styles.css**
Este archivo contiene los estilos CSS para darle formato a la página web, incluyendo los campos de entrada y el botón.

**script.js**
Este archivo contiene el código JavaScript que maneja la lógica del buscador. Utiliza una función asíncrona para hacer una solicitud a la API y actualizar el DOM con los datos recibidos.

**API Utilizada**
La aplicación utiliza la siguiente API para obtener los datos:
https://jsonplaceholder.typicode.com/posts/1/comments



