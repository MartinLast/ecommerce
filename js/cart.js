let validPayment=0;
var arrayCart;
const cartURL="https://japdevdep.github.io/ecommerce-api/cart/654.json";
let i=0;

document.addEventListener("DOMContentLoaded", function(e){
    alertPayment(validPayment);
    payData(1);
    getJSONData(cartURL).then(function(resultObj){
        if (resultObj.status === "ok"){
            arrayCart=resultObj.data;
            showCart(arrayCart);
        }
    })});

function showCart(arrayC)
{
    i=0;
    for (let prod of arrayC.articles){

        document.getElementById("cartList").innerHTML+=`
        <tr>
        <th scope="row"><img class="w-25" src="${prod.src}" alt=""></th>
        <td class="pt-5">${prod.name}</td>
        <td class="pt-5" id="price${i}" style="display: none;">${(prod.currency=="USD")? (prod.unitCost*40):(prod.unitCost)}</td><td class="pt-5">${prod.currency} ${prod.unitCost}</td>
        <td class="pt-5"> <input type="number" id="count${i}" value="${prod.count}" min="0" oninput="calculatePartial(${i})" style="width:50px"> </td>
        <td class="pt-5" id="subtotal${i}">${(prod.currency=="USD")? (prod.unitCost*40):(prod.unitCost)*prod.count}</td>
        <td class="pt-5 hovermouse"> <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg" onclick="eliminate(${i})">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg></td>
      </tr>`
      i++;
    }
    document.getElementById("cartList").innerHTML+=`<tr>
    <th scope="row"><img class="w-25 border" src="" alt=""></th>
    <td class="pt-5"></td>
    <td class="pt-5"></td>
    <th class="pt-5">IMPORTE:</th>
    <td class="pt-5" id="importe"></td>
  </tr>
  <tr>
      <th scope="row"><img class="w-25 border" src="" alt=""></th>
      <td class="pt-5"></td>
      <td class="pt-5"><select id="envio" onchange="calculateTotal()">
        <option value="0">Sin envio (+0%) </option>
        <option value="5">Envio Standard (+5%)</option>
        <option value="7">Envio Express (+7%)</option>
        <option value="15">Envio Premium (+15%)</option>
      </select></td>
      <th class="pt-5">Costo Envío:</th>
      <td class="pt-5" id="totalEnvio"></td>
    </tr>
    <tr>
      <th scope="row"><img class="w-25 border" src="" alt=""></th>
      <td class="pt-5"></td>
      <td class="pt-5"></td>
      <th class="pt-5">TOTAL:</th>
      <td class="pt-5" id="total"></td>
    </tr>
    
    `;
    calculateTotal();
}

function calculatePartial(a)
{
    let precio=document.getElementById(`price${a}`).innerHTML;
    let cantidad=document.getElementById(`count${a}`).value;
    document.getElementById(`subtotal${a}`).innerHTML=`${parseInt(precio)*parseInt(cantidad)}`;
    calculateTotal();
}
function calculateTotal(){
    let sum=0;
    for(j=0;j<i;j++){
        sum +=parseInt((document.getElementById(`subtotal${j}`).innerHTML));
    }
    let costoEnvio=(document.getElementById("envio").value);
    document.getElementById("importe").innerHTML=`$${sum}`;
    document.getElementById("totalEnvio").innerHTML=`$${Math.round(costoEnvio/100.0*sum)}`;
    document.getElementById("total").innerHTML=`$${Math.round(sum*(1+costoEnvio/100))}`;
};
function eliminate(a){
  cartQuantity=parseInt(document.getElementById('cartQTYDisplay').innerHTML);
  if (arrayCart.articles.length>1){
    arrayCart.articles.splice(a,1);
    document.getElementById("cartList").innerHTML=``
    showCart(arrayCart);
    document.getElementById('cartQTYDisplay').innerHTML=`${cartQuantity-1}`;
  }
  else{
    document.getElementById("cartList").innerHTML=``;
    document.getElementById('cartQTYDisplay').innerHTML=`0`;
  }
}
function payData(){
  let a=document.getElementById("metodoPago").value;
  if (a==1){
    document.getElementById("paymentInfo").innerHTML=`<div><input type="number" class="form-control" placeholder="Numero de tarjeta" required>
    <div class="invalid-feedback">Ingrese su número de tarjeta.</div></div><br><div><input type="text" class="form-control" placeholder="Nombre del titular" required>
    <div class="invalid-feedback">Ingrese el nombre.</div></div><br><div>Fecha de expiración:<input type="date" class="form-control" placeholder="Fecha de expiracion" required>
    <div class="invalid-feedback">Ingrese fecha.</div></div><br><div>Código de seguridad:<input type="number" class="form-control" placeholder="" required>
    <div class="invalid-feedback">Ingrese su código.</div></div>`
  }
  else {document.getElementById("paymentInfo").innerHTML=`Banco:<select id="bankName" class="form-control">
  <option value="0">Itaú</option>
  <option value="1" selected>BROU</option>
  <option value="2">Scotia</option>
  <option value="3">Santander</option>
</select><br><div><input type="number" class="form-control" placeholder="Numero de cuenta" required>
  <div class="invalid-feedback">Ingrese su cuenta bancaria.</div></div>`}
}
    document.addEventListener("DOMContentLoaded",function(){
      let form=document.getElementById("needs-validation1");
      form.addEventListener("submit",function(event){
        if (form.checkValidity()===false || validPayment!=2){
          event.preventDefault();
          event.stopPropagation();
        }
        else {localStorage.setItem('compra',1)}
          form.classList.add("was-validated");
         
      });
    });
   document.addEventListener("DOMContentLoaded",function(){
      let form2=document.getElementById("needs-validation2");
      form2.addEventListener("submit",function(event){
        validPayment=0;
        alertPayment(validPayment);
        if (form2.checkValidity()===false){
          event.preventDefault();
          event.stopPropagation();
        }
        else { 
          event.preventDefault();
          $("#modalPagar").modal("hide")
         validPayment=2;
         alertPayment(validPayment);
        }
         form2.classList.add("was-validated");

      });
    });
    function alertPayment(v){
      switch (v){
        case 0: {document.getElementById("paymentAlerts").innerHTML=`<div style="color:red;"> Método de pago inválido</div>`; break;}
        case 2: {document.getElementById("paymentAlerts").innerHTML=`<div style="color:green;">Método de pago válido</div>`;break}
        case 1: {document.getElementById("paymentAlerts").innerHTML=`<div style="color:Orange;">Confirme el Método de pago</div>`;break}
        }
      };