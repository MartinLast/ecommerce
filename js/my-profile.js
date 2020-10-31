let userInfo={};
document.addEventListener("DOMContentLoaded", function (e) {
    var usernameFetch = JSON.parse(localStorage.getItem('user'));
    document.getElementById('cardUsername').innerHTML = `${usernameFetch.login_user}`;
    showUserdata();

});

function showUserdata(){
    var userData=JSON.parse(localStorage.getItem('userInfo'));
    document.getElementById("userName").innerHTML=`${userData.userName}`;
    document.getElementById("userLastName").innerHTML=`${userData.userLastName}`;
    document.getElementById("userAge").innerHTML=`${userData.userAge}`;
    document.getElementById("userCountry").innerHTML=`${userData.userCountry}`;
    document.getElementById("userAddress").innerHTML=`${userData.userAddress}. ${userData.userCountry}`;
    document.getElementById("userPhone").innerHTML=`${userData.userPhone}`;
    document.getElementById("userMail").innerHTML=`${userData.userMail}`;
    document.getElementById("userPhoneCard").innerHTML=`${userData.userPhone}`;
    let profPic=userData.profilePic;
    if (profPic.trim().length!=0){
        document.getElementById("profileImage").innerHTML=`<img src="${profPic}" alt="Admin" class="rounded-circle" width="150">`
    }

}

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