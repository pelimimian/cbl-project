function assignPicture(){
    var breakerValue = document.getElementById("17A").id;
   // var pictureDisplayed = false;
   
   // if(pictureDisplayed == false){
        displayPicture(breakerValue);
       // pictureDisplayed = true;
   // }

}

function displayPicture(breakerValue) {
    var src, src2, src3, src4, src5, src6  = "";
    var compareResult = breakerValue.localeCompare("17A");
        if (compareResult == 0 ){
        src = "https://live.staticflickr.com/65535/49667651786_eaf87c6e0b_b.jpg";
        src2 = "https://live.staticflickr.com/65535/49667651751_60cf38e2ae.jpg";
        src3 = "https://live.staticflickr.com/65535/49667651776_44c46ac95e_b.jpg";
        src4 = "https://live.staticflickr.com/65535/49667935067_7dbc48bd46_b.jpg";
        src5 = "https://live.staticflickr.com/65535/49667935052_0a0c888258_b.jpg";
        src6 = "https://live.staticflickr.com/65535/49667935092_cc4f2aa137_b.jpg";
        show_image(src, 400,400, "Breaker Value");
        show_image(src2, 400,400, "Breaker Value");
        show_image(src3, 400,400, "Breaker Value");
        show_image(src4, 400,400, "Breaker Value");
        show_image(src5, 400,400, "Breaker Value");
        show_image(src6, 400,400, "Breaker Value");
    }
}


function show_image(src, width, height, alt) {
    var img = document.createElement("img"); //Creates an new image on the pate
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;
    document.body.appendChild(img); //Adds the img element after the very last element in the body of the html
}