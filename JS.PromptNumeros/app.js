'use strict'
// Programa que pieda dos numeros y que nos diga cual es el mayor, menor y si son iguales.

var numero1 = parseInt(prompt('introduce el primero numero',0));
var numero2 = parseInt(prompt('introduce el segundo numero',0));

console.log(numero1, numero2);

if (numero1 == numero2)
  {
    alert('LOS NUMEROS SON IGUALES');
  }
  else if (numero1 > numero2)
  {
    alert('EL NUMERO MAYOR ES: ' + numero1);
    alert('EL NUMERO MENOR ES: ' + numero2);
  }
  else if (numero1 < numero2)
  {
    alert('EL NUMERO MAYOR ES: ' + numero2);
    alert('EL NUMERO MENOR ES: ' + numero1);
  }
  else
  {
    alert('INTRODUCE NUMEROS VALIDOS');
  }
