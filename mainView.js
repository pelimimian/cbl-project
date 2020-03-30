function assignPicture(){
    var breakerValue = "";
    document.getElementById("BreakerSelection").innerHTML.value = breakerValue;

    displayPicture(breakerValue);
}

function displayPicture(breakerValue) {
    if (breakerValue.localeCompare("17A")){
        var src = "https://live.staticflickr.com/65535/49667651786_eaf87c6e0b_b.jpg";
        show_image(src, 400,400, "Breaker Value");
    }
}


function show_image(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;
    document.body.appendChild(img);
}