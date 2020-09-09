var array_product;
var array_products;
var array_comments;
var scoreToAppend;



document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            array_product=resultObj.data;
        }
    });
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            array_products=resultObj.data;
        }
    });
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            array_comments=resultObj.data;
            showProduct(array_product,array_products);
            showComments(array_comments);
        }
    });
});


  function showProduct(arrayProduct,arrayProducts){

    document.getElementById("productName").innerHTML=arrayProduct.name;
    document.getElementById("productDescription").innerHTML=arrayProduct.description;
    document.getElementById("productCost").innerHTML=arrayProduct.cost +' USD';
    document.getElementById("productCount").innerHTML=arrayProduct.soldCount;
    document.getElementById("productCategory").innerHTML=arrayProduct.category;
    for (let imagen of arrayProduct.images){
        document.getElementById("productImagesGallery").innerHTML+= `<img class="img m-3" src=${imagen} width="225px">`;
}
    for (let reco of arrayProduct.relatedProducts){
    document.getElementById("relatedGallery").innerHTML+=`<img class="img m-3" src=${arrayProducts[parseInt(reco)].imgSrc} width="150px">`; 
    }
  }

  function showComments(arrayComments){
    document.getElementById("comments").innerHTML='';
    for (let com of arrayComments){
        scoreToAppend='';
        for (let i=1; i<= com.score; i++){
            scoreToAppend+=`<span class="fa fa-star checked"></span>`;
        }
        for (let i= com.score +1; i<=5; i++){
            scoreToAppend+=`<span class="fa fa-star"></span>`
        }
        document.getElementById("comments").innerHTML+=`Calificación: ${scoreToAppend} <br>`
        document.getElementById("comments").innerHTML+=`Por el usuario: <strong>${com.user}</strong>. Fecha: ${com.dateTime} <br> ${com.description} <hr>`
    }}
    // adds date padding - for example january will show as month 1 by default, with date padding it'll show as 01.
    function addDP(a){ return a<10 ? '0'+a : a};


document.getElementById("submit_comment").addEventListener("click",function(e){
    e.preventDefault();
    var now= new Date();
    let dateTime=`${now.getFullYear()}-${addDP(now.getMonth()+1)}-${addDP(now.getDate())} `;
    dateTime+=`${addDP(now.getHours())}:${addDP(now.getMinutes())}:${addDP(now.getSeconds())}`;
    var retrieved_user = JSON.parse(localStorage.getItem('user'));
    var comentario = {
        'score':valoracion.value,
        'description':comentarios.value,
        'user':retrieved_user.login_user,
        'dateTime':dateTime,
    }
    array_comments.push(comentario);
    showComments(array_comments);

})