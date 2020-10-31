const cart_URL="https://japdevdep.github.io/ecommerce-api/cart/654.json";
function logeado(){
    if(localStorage.getItem('user') === null){
        location.href="login.html"
    }
    else{
        var retrieved_user = JSON.parse(localStorage.getItem('user'));
        document.getElementById('nombreUsuario').innerHTML = `${retrieved_user.login_user}`;
    }
}
function deslogeado(){
    localStorage.removeItem('user');
    localStorage.removeItem('userInfo');
    location.href="login.html"   
}
function showCartQTY(arrayC){
    document.getElementById('cartQTYDisplay').innerHTML=`${arrayC.articles.length}`
}
document.getElementById('deslogear').addEventListener("click",deslogeado);
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(cart_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            arrayCart=resultObj.data;
            logeado();
            showCartQTY(arrayCart);
        }
    })});

