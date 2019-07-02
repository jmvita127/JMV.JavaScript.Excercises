window.onload = function () {

 var button = document.querySelector('form button');
 var ul = document.querySelector('ul');


button.addEventListener('click', function() {
 console.log("se agrega");
 var input = document.querySelector('input');
 var li = document.createElement('li');
 li.innerHTML = input.value + " " + "<a href='#'>" + "Eliminar" + "</a>";
 ul.append(li);

li.children[0].onclick = function () {
 ul.removeChild(this.parentElement);
// console.log(ul.children.length);
 if (ul.children.length === 0) {
   alert('Has cumplido tus tareas!');
 }
}


});




}
