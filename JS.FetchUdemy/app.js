// fetch(peticiones ajax) y peticiones a servicios / apis rest

var div_usuarios = document.querySelector('#usuarios');
var div_janet = document.querySelector('#janet');

 getUsuarios()
.then(data => data.json())
.then(users => {
  listadoUsuarios(users.data);
  return getUsuario();

})
.then(data => data.json())
.then(user => {
  mostrarJanet(user.data);

  return getInfo();

})
.then(data => {
  console.log(data);
})

.catch(error => {
  console.log(error);
});

function getUsuarios()
{
  return fetch('https://reqres.in/api/users');
}

function getUsuario() //con esta peticion obtengo solo un unico usuario - Janet
{
  return fetch('https://reqres.in/api/users/2');
}

function getInfo() // crear promesa desde cero.
{

    var profesor = {
      nombre: 'Victor',
      apellido: 'Robles',
      url:'https://victorroblesweb.es'
    };

    return new Promise((resolve, reject) =>{
      var profesor_string = JSON.stringify(profesor);

      if (typeof profesor_string != 'string') return reject('ERROR');
      return resolve(profesor_string);

    });

}

function listadoUsuarios(usuarios)
{
usuarios.map((user, i) => {
  let nombre = document.createElement('h2');

  nombre.innerHTML = i + ' ' + user.first_name + ' ' + user.last_name;

  div_usuarios.appendChild(nombre);
 });
}

function mostrarJanet(user)
{
  console.log(user);
  let nombre = document.createElement('h3');
  let avatar = document.createElement('img');

  nombre.innerHTML = 'Usuario encontrado: ' + user.first_name + ' ' + user.last_name;
  avatar.src = user.avatar
  avatar.width = '100';

  div_janet.appendChild(nombre);
  div_janet.appendChild(avatar);
}
