'use strict'

window.addEventListener('load', function(){
  console.log('DOM CARGADO');

  var formulario = document.querySelector('#formulario');
  var datos = document.querySelector('.datos');
  datos.style.display = 'none';

  formulario.addEventListener('submit', function(){
    console.log('Evento Capturado');

    var nombre = document.querySelector('#nombre').value;
    var apellidos = document.querySelector('#apellidos').value;
    var edad = parseInt(document.querySelector('#edad').value);

    if (nombre.trim() == null || nombre.trim().length == 0 ) {
      alert('El nombre no es valido');
      return false;
    }

    if (apellidos.trim() == null || apellidos.trim().length == 0 ) {
      alert('El apellido no es valido');
      return false;
    }

    if (edad == null || nombre <= 0  || isNaN(edad)) {
      alert('La edad no es valida');
      return false;
    }

    datos.style.display = "block";

    var p_nombre = document.querySelector('#p_nombre span');
    var p_apellidos = document.querySelector('#p_apellidos span');
    var p_edad = document.querySelector('#p_edad span');

    p_nombre.innerHTML = nombre;
    p_apellidos.innerHTML = apellidos;
    p_edad.innerHTML = edad;

    // var usuario = [nombre, apellidos, edad];
    // var indice;
    // for (var indice in usuario)
    // {
    //   var parrafo = document.createElement('p');
    //   parrafo.append(usuario[indice]);
    //   datos.append(parrafo);
    // }

  });
});
