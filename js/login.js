const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('submit',function(event){
    event.preventDefault();
    //let users = {
      //  usuario: username.value,
    //};
    localStorage.setItem('user',username.value);
    location.href="index.html"
});

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
// document.addEventListener("DOMContentLoaded", function(e){
//
//});
