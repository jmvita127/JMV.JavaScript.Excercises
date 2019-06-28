var estudiante = {
  nombre : 'Juan Manuel',
  curso : 'FullStack',
  dni : 38067211,
  email : 'jmvita127@gmail.com',
};

function fromObjectToArray(valores){
  var array = [];
  for (var prop in valores){
    console.log(valores[prop]);
    array.push(valores[prop]);
  }
}

fromObjectToArray(estudiante);





window.onload = function(){
      function cambioDeColor(color){
        if (color != 'green') {
          document.body.style.backgroundColor = color;
          console.log('Se puede cambiar genio');
          return true;
      } else {
        console.log('Lamentablemente no se pudo cambiar');
        return false;
      }
   }
cambioDeColor('blue');
}
