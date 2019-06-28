var startBTN = document.querySelector('.start');
var stopBTN = document.querySelector('.stop');
var h1 = document.querySelector('.timer');
var seg = 1;


var contador = setInterval(function (){
  h1.innerText = seg; //aumenta en 1 el contador en h1
  console.log(seg); //muestra en consola como va aumentando de a 1
  seg++;
}, 1000)

//DETIENE EL CONTADOR
stopBTN.onclick = function(){
  clearInterval(contador);
  console.log('STOP: Se detuvo el contador!');
}

//VUELVE A INICIAR EL CONTADOR EN DONDE SE FRENO
startBTN.onclick = function(){
  console.log('START: Se inicia el contador nuevamente!');
  contador = setInterval(function (){
   h1.innerText = seg; //aumenta en 1 el contador en h1
   console.log(seg); //muestra en consola como va aumentando de a 1
   seg++;
 }, 1000)
}
