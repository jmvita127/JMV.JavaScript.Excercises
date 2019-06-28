var multiplo = 3;
var i = 1;


for (var i = 1; i <= 45; i++) {
  console.log(multiplo * i);
}

var dado = Math.random() * 6;
dado = Math.ceil(dado);
switch (dado) {
  case 1: console.log('El numero 1 es impar');
  break;
  case 2: console.log('El numero 2 es par');
  break;
  case 3: console.log('El numero 3 es impar');
  break;
  case 4: console.log('El numero 4 es par');
  break;
  case 5: console.log('El numero 5 es impar');
  break;
  case 6: console.log('El numero 6 es par');
  break;
  default: console.log('Un dado no tiene mas de 6 numeros');

}
