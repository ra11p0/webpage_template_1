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
