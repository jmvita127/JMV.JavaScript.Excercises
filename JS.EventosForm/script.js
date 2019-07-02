window.addEventListener('load', function(){

  var input = document.querySelector('input');
  // var button = document.querySelector('button'); // este captura el boton HOLA
  var addTask = document.querySelector('form button');
  //console.log(input.getAttribute('value'));
  var ul = document.querySelector('ul');


  addTask.onclick = function(){
  var crearLi = document.createElement('li');
  //console.log(input.getAttribute('value'));
  crearLi.innerText = input.value;
  ul.append(crearLi);
  input.value = ''; //luego de darle al boton agregar, el value queda vacio
  }

})
