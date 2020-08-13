const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');

document.getElementById('submit_login').addEventListener("click",function(event){
    event.preventDefault();
    document.getElementById("advertencia-user").innerHTML =''
    document.getElementById("advertencia-pass").innerHTML =''
    if (username.value.trim().length === 0){
      document.getElementById("advertencia-user").innerHTML = 'Por favor ingrese un usuario válido.'
    }
    else { 
        if (password.value.trim().length===0){
          document.getElementById("advertencia-pass").innerHTML = 'Por favor ingrese una contraseña válida.'
        }
        else {
      localStorage.setItem('user',username.value);
      location.href="index.html"}
    }
    //let users = {
      //  usuario: username.value,
    //};
    
});

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
// document.addEventListener("DOMContentLoaded", function(e){
//
//});
