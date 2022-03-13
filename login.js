const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const UsernameID = urlParams.get('username');
const passwordID = urlParams.get('password');

window.onload = loginLoad;

function loginLoad(){
    var form = document.getElementById("myLogin");
    form.onsubmit = checkLogin;
}

function checkLogin(){
    var username = document.forms["myLogin"]["username"];
    var password = document.forms["myLogin"]["password"];

    if(username.value != UsameIernD || password.value != passwordID)
    {
        alert("Invalid username or password,please try again.");

        return false;
    }
    else
    {
        alert("Successful login.");
    }
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
}