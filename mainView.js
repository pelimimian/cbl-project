//API Flickr Info
//Key caa57ad8874db3c27dd35f3a812b70f4
//Secret ae4f050c5fdf3b28

//List of strings urls
var urlsOf17APics = ["17A","https://live.staticflickr.com/65535/49667651786_eaf87c6e0b_b.jpg","https://live.staticflickr.com/65535/49667651751_60cf38e2ae.jpg", 
"https://live.staticflickr.com/65535/49667651776_44c46ac95e_b.jpg", "https://live.staticflickr.com/65535/49667935067_7dbc48bd46_b.jpg",
"https://live.staticflickr.com/65535/49667935052_0a0c888258_b.jpg", "https://live.staticflickr.com/65535/49667935092_cc4f2aa137_b.jpg" ];

var urlsOf12BPics = ["12B", "https://live.staticflickr.com/65535/49838364831_f2df50cba9_b.jpg", "https://live.staticflickr.com/65535/49838364901_34cd8f18b9_b.jpg",
"https://live.staticflickr.com/65535/49837819848_a3351a8b9d_b.jpg", "https://live.staticflickr.com/65535/49837819873_e636a079dc_b.jpg",
"https://live.staticflickr.com/65535/49837819888_3772c3b42c_b.jpg", "https://live.staticflickr.com/65535/49837819838_64337c8f90_b.jpg"];

var listofBreakerValuePics = [urlsOf12BPics, urlsOf17APics];

function displayPicture(nameOfId) {
  //Go through the list of urls for each Ids. If the ID clicked on is equal to the name of the id in the list of urls, display all pictures
  //From that particular list
    for(var i = 0; listofBreakerValuePics.length; i++){
        var a = listofBreakerValuePics[i];
        if(a.includes(nameOfId)){
            for(var j = 1; j < a.length; j++){//Starting at 1 because the the first element in the list is not a link to a picture.
                show_image(a[j], 400,400, "Breaker Value_" + j);
            }
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