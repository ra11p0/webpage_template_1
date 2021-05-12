function init(){
    document.getElementById("sendMailButton").addEventListener("click", sendMail);

    document.getElementById("loginButton").addEventListener("click", login);
    
    document.getElementById("registerButton").addEventListener("click", register);
}

function sendMail(){
    if (document.getElementById('sendMailEMail').value != document.getElementById('sendMailEMailConfirm').value){
        alert("Adresy e-mail nie są identyczne!");
        document.getElementById('sendMailEMail').style.background = "rgba(255, 0, 0, 0.2)";
        document.getElementById('sendMailEMailConfirm').style.background = "rgba(255, 0, 0, 0.2)";
    }
    else if (!document.getElementById('sendMailEMail').value.includes('@') || !document.getElementById('sendMailEMail').value.includes('.')){
        alert("Adres e-mail nie jest poprawny!");
        document.getElementById('sendMailEMail').style.background = "rgba(255, 0, 0, 0.2)";
    }
    else{
        document.getElementById('sendMailEMail').style.background = "rgba(0, 0, 0, 0.2)";
        document.getElementById('sendMailEMailConfirm').style.background = "rgba(0, 0, 0, 0.2)";
        alert("Wysłano!");
    }
}

function login(){
    alert("Zalogowano!");
}

function register(){
    let isAllOkay = 1;
    if (document.getElementById('registerEmail').value != document.getElementById('registerEmailConfirm').value){
        alert("Adresy e-mail nie są identyczne!");
        isAllOkay = 0;
        document.getElementById('registerEmail').style.background = "rgba(255, 0, 0, 0.2)";
        document.getElementById('registerEmailConfirm').style.background = "rgba(255, 0, 0, 0.2)";
    }
    else if (!document.getElementById('registerEmail').value.includes('@') || !document.getElementById('registerEmail').value.includes('.')){
        alert("Adres e-mail nie jest poprawny!");
        isAllOkay = 0;
        document.getElementById('registerEmail').style.background = "rgba(255, 0, 0, 0.2)";
    }
    else {
        document.getElementById('registerEmail').style.background = "rgba(0, 0, 0, 0.2)";
        document.getElementById('registerEmailConfirm').style.background = "rgba(0, 0, 0, 0.2)";
    }
    if (document.getElementById('registerPassWd').value != document.getElementById('registerPassWdConfirm').value){
        alert("Hasła nie są identyczne!");
        isAllOkay = 0;
        document.getElementById('registerPassWd').style.background = "rgba(255, 0, 0, 0.2)";
        document.getElementById('registerPassWdConfirm').style.background = "rgba(255, 0, 0, 0.2)";
    }
    else if (document.getElementById('registerPassWd').value.length < 8){
        alert("Hasło powinno zawierać przynajmniej 8 znaków!");
        isAllOkay = 0;
        document.getElementById('registerPassWd').style.background = "rgba(255, 0, 0, 0.2)";
    }
    else{
        document.getElementById('registerPassWd').style.background = "rgba(0, 0, 0, 0.2)";
        document.getElementById('registerPassWdConfirm').style.background = "rgba(0, 0, 0, 0.2)";
    }
    if(!document.getElementById('registerCheckBox').checked)
    {
        alert("Musisz zaakceptować regulamin!");
        isAllOkay = 0;
    }
    if (isAllOkay)
    {
        alert("Zarejestrowano!");
    }
    
}

window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) <= 2000) {
        document.getElementById('quote').innerHTML = 
        "<h3 style = 'margin-bottom: 0px;'>Quisque dui lorem,</h3>"+
        "<h3>commodo elit aliquet.</h3>";
        document.getElementById('quote').style.bottom = "400px";
    }
    if ((window.innerHeight + window.scrollY) >= 2000) {
        document.getElementById('quote').innerHTML = 
        "<h3 style = 'margin-top: 0px;'>Skontaktuj się z nami!</h3>";
        document.getElementById('quote').style.bottom = "550px";
    }
};

function hidePhotoRoll(){
    document.getElementById("photoRoll").style.visibility = "hidden";
}

function showPhotoRoll(e){
    var backgroundImage = window.getComputedStyle(e).backgroundImage.substring(5);
    document.getElementById("photoRoll").style.visibility = "visible";
    document.getElementById("photoField").src = backgroundImage.substring(0, backgroundImage.length-2);
    hideRegister();
    hideLogin();
}

function nextPhoto(){
    var currentImage = document.getElementById("photoField").src;
    var currentImageNumber = currentImage.substring(currentImage.length - 5, currentImage.length-4);
    if (currentImageNumber >= 6) return;
    currentImageNumber++;
    document.getElementById("photoField").src = "media/"+currentImageNumber+".jpg";
}

function prevPhoto(){
    var currentImage = document.getElementById("photoField").src;
    var currentImageNumber = currentImage.substring(currentImage.length - 5, currentImage.length-4);
    if (currentImageNumber <= 1) return;
    currentImageNumber--;
    document.getElementById("photoField").src = "media/"+currentImageNumber+".jpg";
}

function showLogin(){
    document.getElementById("logIn").style.visibility = "visible";
    hideRegister();
}

function hideLogin(){
    document.getElementById("logIn").style.visibility = "hidden";
}

function showRegister(){
    document.getElementById("signUp").style.visibility = "visible";
    hideLogin();
}

function hideRegister(){
    document.getElementById("signUp").style.visibility = "hidden";
}
