const username = document.getElementById('username');
const password = document.getElementById('password');

document.getElementById('submit_login').addEventListener("click",function(event){
    event.preventDefault();
    document.getElementById("advertencia-user").innerHTML ='';
    document.getElementById("advertencia-pass").innerHTML ='';
    var usuario = {
      'login_user':username.value,
      'login_pass':password.value
    }
    if (usuario.login_user.trim().length === 0){
      document.getElementById("advertencia-user").innerHTML = 'Por favor ingrese un usuario válido.'
    }
    else { 
        if (usuario.login_pass.trim().length===0){
          document.getElementById("advertencia-pass").innerHTML = 'Por favor ingrese una contraseña válida.'
        }
        else {

      localStorage.setItem('user',JSON.stringify(usuario));
      location.href="index.html"}
    }
});
