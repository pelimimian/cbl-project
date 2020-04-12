//API Flickr Info
//Key caa57ad8874db3c27dd35f3a812b70f4
//Secret ae4f050c5fdf3b28

function assignPicture(){
    var breakerValue = document.getElementById("17A").id;
   // var pictureDisplayed = false;
   
   // if(pictureDisplayed == false){
        displayPicture(breakerValue);
       // pictureDisplayed = true;
   // }

}

function displayPicture(breakerValue) {
    var compareResult = breakerValue.localeCompare("17A");
        if (compareResult == 0 ){
            //List of strings urls
            var urlsOfPics = ["https://live.staticflickr.com/65535/49667651786_eaf87c6e0b_b.jpg","https://live.staticflickr.com/65535/49667651751_60cf38e2ae.jpg", 
            "https://live.staticflickr.com/65535/49667651776_44c46ac95e_b.jpg", "https://live.staticflickr.com/65535/49667935067_7dbc48bd46_b.jpg",
            "https://live.staticflickr.com/65535/49667935052_0a0c888258_b.jpg", "https://live.staticflickr.com/65535/49667935092_cc4f2aa137_b.jpg" ];
            //Loop through the urlOfPics array 
            for(var i = 0; i < urlsOfPics.length; i++){
                show_image(urlsOfPics[i], 400,400, "Breaker Value_" + i);
            }
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