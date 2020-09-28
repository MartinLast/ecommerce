var arrayCart;
const cartURL="https://japdevdep.github.io/ecommerce-api/cart/654.json";
let i=0;

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(cartURL).then(function(resultObj){
        if (resultObj.status === "ok"){
            arrayCart=resultObj.data;
            showCart(arrayCart);
        }
    })});

function showCart(arrayC)
{
    for (let prod of arrayC.articles){

        document.getElementById("cartList").innerHTML+=`
        <tr>
        <th scope="row"><img class="w-25 border" src="${prod.src}" alt=""></th>
        <td class="pt-5">${prod.name}</td>
        <td class="pt-5" id="price${i}">${(prod.currency=="USD")? (prod.unitCost*40):(prod.unitCost)}</td>
        <td class="pt-5"> <input type="number" id="count${i}" value="${prod.count}" min="0" oninput="calculatePrice(${i})"> </td>
        <td class="pt-5" id="subtotal${i}">${(prod.currency=="USD")? (prod.unitCost*40):(prod.unitCost)*prod.count}</td>
      </tr>`
      i++;
    }
    document.getElementById("cartList").innerHTML+=`<tr>
      <th scope="row"><img class="w-25 border" src="" alt=""></th>
      <td class="pt-5"></td>
      <td class="pt-5"></td>
      <th class="pt-5">TOTAL:</th>
      <td class="pt-5" id="total"></td>
    </tr>`;
    calculatePrice(i-1);
}

function calculatePrice(a)
{
    let precio=document.getElementById(`price${a}`).innerHTML;
    let cantidad=document.getElementById(`count${a}`).value;
    document.getElementById(`subtotal${a}`).innerHTML=`${parseInt(precio)*parseInt(cantidad)}`;
    let sum=0;
    for(j=0;j<i;j++){
        sum +=parseInt((document.getElementById(`subtotal${j}`).innerHTML));
    }
    document.getElementById("total").innerHTML=sum;
}