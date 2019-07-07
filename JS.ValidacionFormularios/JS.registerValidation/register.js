var regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,8}$/;


function validarVacio(input)
{
    if (input.value.trim() == '')
    {
        pintarError(input, 'Needs to be completed');
        input.value = '';
        return true;
    }
    return false;
}

function pintarError(input, mensaje)
{
    input.classList.add('is-invalid');
    var error = document.createElement('span');
    error.setAttribute('class','invalid-feedback');
    var strong = document.createElement('strong');
    strong.innerText = mensaje;
    var div = elemento.parentElement;
    if (div.children[1])
    {
        div.removeChild(div.children[2]);
    }
    error.append(strong);
    div.append(error);
}

window.onload = function()
{


    var form = document.querySelector('.formR');

    form.onsubmit = function(event)
    {
        var elementos = this.elements;
        for (elemento of elementos)
        {
            if (elemento.type == 'submit' || elemento.type == 'hidden')
            {
                continue;
            }
            if (elemento.type != 'file' && validarVacio(elemento))
            {
                event.preventDefault();
            }
            if (elemento.name == 'email' &&  !regexEmail.test(elemento.value))
            {
                pintarError(elemento, 'Invalid Email');
                event.preventDefault();
            }
            if (elemento.name == 'password')
            {
                var confirm = document.querySelector('#confirm-password');
                if (elemento.value.length < 8)
                {
                    pintarError(elemento, 'The password needs a min of 8 characters');
                    event.preventDefault();
                }
                else if (elemento.value != confirm.value)
                {
                    pintarError(elemento, 'The passwords do not match');
                    event.preventDefault();
                }
            }
        }
    }
};
