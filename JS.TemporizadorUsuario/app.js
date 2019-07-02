window.onload = function(){
  // var temporizador = setTimeout(function(){
  //   console.log('Te has deslogueado');
  // }, 1000);
  //
  // var btn = document.querySelector('.btn');
  // btn.onclick = function(){
  //   clearTimeout(temporizador);
  // }

  var start = document.querySelector('.btn-start');
  var stop = document.querySelector('.btn-stop');
  var div = document.querySelector('div.mostrar');
  var secs= 0;
  var crono = null;

  start.onclick = function(){
     crono = setInterval(function(){
      secs++;
      div.innerText = secs;
    },1000)
  }

  stop.onclick = function(){
    clearInterval(crono);
  }








}
