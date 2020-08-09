function logeado(){
    if(localStorage.getItem('user') === null){
        location.href="login.html"
    }
    else{
        document.getElementById('nombreUsuario').innerHTML = `Bienvenido ${localStorage.getItem('user')}`;
    }
}
function deslogeado(){
    localStorage.removeItem('user');
    location.href="login.html"   
}
document.addEventListener("DOMContentLoaded",logeado);
document.getElementById('deslogear').addEventListener("click",deslogeado);
