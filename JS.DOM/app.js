window.onload = function() {
  var lista = document.querySelector('ul');
  var hijosLista = lista.children;

  for (hola of hijosLista){
    console.log(hola);
  }

  var titulo = document.querySelector('h1');
  titulo.innerHTML = '<em>Javascript is the best my friends!</em>';

  var todosLosP = document.querySelectorAll('p');
  var numero = 0;
  for (parrafos of todosLosP) {
    numero++;
    if (numero%2 === 0) {
      parrafos.innerText = 'Parrafo par ' + '(' + numero + ')';
    } else if (numero%2 === 1) {
      parrafos.innerText = 'Parrafo impar ' + '(' + numero + ')';
    }
  }

  var boton = document.getElementbyId('agregar');
  var formulario = document.querySelector('#agregarAlumnos')
  boton.onclick = function(){
    formulario.innerHTML = '';
  }


}
