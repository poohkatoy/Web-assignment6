window.onload = pageLoad;
var Input_regis = [];

function pageLoad(){
    var form = document.getElementById("myForm");
    form.onsubmit = validateForm;
}
function validateForm() {
    var pass = document.forms["myForm"]["password"];
    var repass = document.forms["myForm"]["Retypepassword"];

    var errorMSG = document.getElementById("errormsg");
    errorMSG.innerHTML = "";

    if(pass.value == repass.value)
    {
        alert("Successful registration.");
    }
    else if(pass.value != repass.value)
    {
        errorMSG.innerHTML += "Invalid password,please try again.";
        return false;
    }
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
}