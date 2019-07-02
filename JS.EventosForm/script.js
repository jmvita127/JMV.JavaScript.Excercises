window.addEventListener('load', function(){

  var input = document.querySelector('input');
  // var button = document.querySelector('button'); // captura el boton HOLA
  var addTask = document.querySelector('form button'); // captura el boton del form
  //console.log(input.getAttribute('value'));
  var ul = document.querySelector('ul');


  addTask.onclick = function(){
  var createLi = document.createElement('li');
  //console.log(input.getAttribute('value'));
  createLi.innerText = input.value;
  ul.append(createLi);
  input.value = ''; //luego de darle al boton agregar, el value queda vacio
  }

})
