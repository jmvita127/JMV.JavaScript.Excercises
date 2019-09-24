'use strict'
// 1. seis numeros por pantalla y lo guarde en un array
// 2. mostrar el array entero todos sus elementos en el body y consola.
// 3. ordenarlo y mostrarlo
// 4. invertir su orden y mostrarlo
// 5. mostrar cuantos elementos tiene el array
// 6. busqueda de un valor introducido por el usuario y que nos diga su indice

function mostrarArray(elementos, textoCustom = '')
{
  //mostrar en el body
  document.write('<h1>Contenido del Array'+textoCustom+'</h1>');
  document.write('<ul>');
  elementos.forEach((elemento,index)=>{
    document.write('<li>'+elemento+'</li>')
  });
  document.write('</ul>');
}

var numeros = [];

for (var i = 0; i <= 5; i++)
{
  numeros.push(parseInt(prompt('INTRODUCE UN NUMERO', 0)));
}

//mostrar en el body
mostrarArray(numeros);

//muestro array en consola
console.log(numeros);

//ordenar y mostrarlo
numeros.sort(function(a, b){return a-b}); //ordenar de forma numerica
mostrarArray(numeros, ' ordenado:');

//invertir y mostrar Array
numeros.reverse();
mostrarArray(numeros, ' invertido:');

//contar elementos del Array
document.write('<h1> El array tiene: '+numeros.length+' elementos</h1>');

//Busqueda de la posicion de un numero 
var  busqueda = parseInt(prompt('BUSCA UN NUMERO',0));

var posicion = numeros.findIndex(numero => numero == busqueda);

if (posicion && posicion != -1)
{
  document.write('<h1>Posicion de la busqueda: '+posicion+'</h1>');
}
else
{
  document.write('<h1>El numero no fue encontrado</h1>');
}
