function logeado(){
    if(localStorage.getItem('user') === null){
        location.href="login.html"
    }
    else{
        var retrieved_user = JSON.parse(localStorage.getItem('user'));
        document.getElementById('nombreUsuario').innerHTML = `Bienvenido ${retrieved_user.login_user}`;
    }
}
function deslogeado(){
    localStorage.removeItem('user');
    location.href="login.html"   
}
document.addEventListener("DOMContentLoaded",logeado);
document.getElementById('deslogear').addEventListener("click",deslogeado);
