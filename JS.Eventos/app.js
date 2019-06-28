window.onload = function() {

  //Muestro en consola el SUBTITULO H3
  var h3 = document.querySelector('h3');
  console.log(h3);

  //Muestra un mensaje cuando se hace click en el TITULO h1
  var h1 = document.querySelector('h1');
  h1.onclick = function(){
    alert('Hiciste click en el H1');
  }
  //Cuenta las veces que paso el mouse por encima del H1
  h1.onmouseover = function(){
    console.log('Has PASADO por H1');
  }
  //Cuenta las veces que el mouse salio por encima del H1
  h1.onmouseout = function() {
    console.log('Has SALIDO de H1');
  }
  //ClientX/Y es la ubicacion del cursor dentro de H1
  h1.onmousemove = function(evento){
    console.log('Pos X: ' + evento.clientX);
    console.log('Pos Y: ' + evento.clientY);
  }

}
