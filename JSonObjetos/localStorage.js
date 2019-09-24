'use strict'

// comprobar disponibilidad del local localStorage
if (typeof(Storage)!= 'undefined'){
  console.log('LocalStorage dsponible');
} else {
  console.log('LocalStorage no disponible');
}

// Guardar datos
localStorage.setItem('titulo', 'Curso de Symfony de Juan Manuel');

//Recuperar elementos y meterlos en mi pagina web
document.querySelector('#peliculas').innerHTML = localStorage.getItem('titulo');

//Guardar Objetos
var usuario = {
  nombre: 'Juan Manuel',
  email: 'juan@juan.com',
  web: 'juan.com.ar'
};

localStorage.setItem('usuario', JSON.stringify(usuario)); // convierto mi objeto a un JSONstring.

//recuperar Objeto del local Storage
var userjs = JSON.parse(localStorage.getItem('usuario'));
console.log(userjs);
document.querySelector('#peliculas').append(' '+userjs.web+' '+userjs.nombre);

localStorage.removeItem("usuario");
