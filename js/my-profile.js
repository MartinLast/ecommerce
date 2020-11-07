let userInfo={};

document.addEventListener("DOMContentLoaded", function (e) {
    var usernameFetch = JSON.parse(localStorage.getItem('user'));
    document.getElementById('cardUsername').innerHTML = `${usernameFetch.login_user}`;
    if (localStorage.getItem("userInfo") != null){
      showUserdata();
    };
    

});

function showUserdata(){
    var userData=JSON.parse(localStorage.getItem('userInfo'));
    document.getElementById("userName").innerHTML=`${userData.userName}`;
    document.getElementById("userLastName").innerHTML=`${userData.userLastName}`;
    document.getElementById("userAge").innerHTML=`${userData.userAge}`;
    document.getElementById("userCountry").innerHTML=`${userData.userCountry}`;
    document.getElementById("userAddress").innerHTML=`${userData.userAddress}`;
    document.getElementById("userPhone").innerHTML=`${userData.userPhone}`;
    document.getElementById("userMail").innerHTML=`${userData.userMail}`;
    document.getElementById("userPhoneCard").innerHTML=`${userData.userPhone}`;
    let profPic=userData.profilePic;
    if (profPic.trim().length!=0){
        document.getElementById("profileImage").innerHTML=`<img src="${profPic}" alt="Admin" class="rounded-circle" width="150">`
    }

}

function updateData(){
  document.getElementById("modalName").value=document.getElementById("userName").innerHTML.trim();
  document.getElementById("modalLastName").value=document.getElementById("userLastName").innerHTML.trim();
  document.getElementById("modalAge").value=document.getElementById("userAge").innerHTML.trim();
  document.getElementById("modalCountry").value=document.getElementById("userCountry").innerHTML.trim();
  document.getElementById("modalAddress").value=document.getElementById("userAddress").innerHTML.trim();
  document.getElementById("modalPhone").value=document.getElementById("userPhone").innerHTML.trim();
  document.getElementById("modalMail").value=document.getElementById("userMail").innerHTML.trim();
  if (localStorage.getItem("userInfo") != null && JSON.parse(localStorage.getItem("userInfo")).profilePic.trim().length>0){
    document.getElementById("modalpp").value=JSON.parse(localStorage.getItem("userInfo")).profilePic;
  }};
 


document.addEventListener("DOMContentLoaded",function(){
    let form=document.getElementById("needs-validation");
    form.addEventListener("submit",function(event){
      if (form.checkValidity()===false){
        event.preventDefault();
        event.stopPropagation();
      }
      else {
         userInfo={
            'userName':modalName.value,
            'userLastName':modalLastName.value,
            'userAge':modalAge.value,
            'userCountry':modalCountry.value,
            'userAddress':modalAddress.value,
            'userPhone':modalPhone.value,
            'userMail':modalMail.value,
            'profilePic':modalpp.value,
        }
        $("#modalData").modal("hide");
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
        showUserdata();
      }
        form.classList.add("was-validated");
       
    });
  });