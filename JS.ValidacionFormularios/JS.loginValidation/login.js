var regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,8}$/;

window.onload = function()
{
  var form = document.querySelector('.form');
  var email = document.querySelector('#email');
  var password = document.querySelector('#password');

  email.onblur = function()
  {
    if (regexEmail.test(this.value)) //si cumple regexEmail, remueve is invalid. Else lo mantiene/agrega
    {
      this.classList.remove('is-invalid');
    }

    else

    {
      this.classList.add('is-invalid');
    }

    email.value = email.value.toUpperCase();
  }


  form.onsubmit = function(event)
  {
    //alert('El email esta vacio');
    //email.setAttribute('class', 'is-invalid'); //setea atributo a la clase de email
    if (!regexEmail.test(email.value))
    {
      email.classList.add('is-invalid'); //agrega clase bootstrap al input email
      var error = document.createElement('span');
      error.innerText = 'Invalid Email';
      var div = email.parentElement;

      if (div.children[1])
      {
        div.removeChild(div.children[2]); //esto es para que el error no se repita
      }

      div.append(error); //apendeo el div al error span
      event.preventDefault(); //el evento no lo voy a hacer de inmediato
      // return false; //este return hace referencia a la funcion y no al IF
    }

    if (password.value.trim() == '' || password.value.length < 8) //.trim poda el password erroneo
    {
      password.classList.add('is-invalid'); //agrega clase bootstrap al input email
      var error = document.createElement('span');
      error.innerText = 'The password needs a min of 8 characters';
      var div = password.parentElement;

      if (div.children[1])
      {
        div.removeChild(div.children[2]); //esto es para que el error no se repita
      }

      div.append(error); //apendeo el div al error span
      event.preventDefault(); //el evento no lo voy a hacer de inmediato
      // return false; //este return hace referencia a la funcion y no al IF
      password.value = "";

    }

    console.log('se esta enviando');

  }
}
