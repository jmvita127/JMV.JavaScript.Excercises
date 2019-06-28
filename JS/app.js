// CREACION DE VARIABLES
var nombre = 'Juan Manuel';

var direccion = [];
direccion.push('NombreCalle','Altura');
console.log(direccion[0]);

var persona = true;


//CREACION DEL OBJETO  //METODO EN UN OBJETO //this llama al atributo del objeto.
var usuario = {
  name : 'Martina',
  pass : '123456m',
  email : 'martu@martu.martu',
  saludar : function(profe){     
    return 'Hola, yo soy ' + this.name + ' y mi profesor es ' + profe + '.';
  }
};

//traigo los atributos del objeto con el FORin
for (var key in usuario) {
   console.log(usuario[key]); //de esta forma accedo a la info de los atributos
}


// ejemplo de hola mi nombre es Martina y mi profesor es Diego
// console.log(usuario);
// console.log(usuario.saludar('Diego'));
