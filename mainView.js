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

var urlsOf1BPics = ["1B","https://live.staticflickr.com/65535/49843307456_7bcdbcc3d3_b.jpg","https://live.staticflickr.com/65535/49843610407_21dd23ec32_b.jpg",
"https://live.staticflickr.com/65535/49843610417_f88efc7624_b.jpg","https://live.staticflickr.com/65535/49843307466_669cff5191_b.jpg",
"https://live.staticflickr.com/65535/49843307536_9271f0c4ab_b.jpg","https://live.staticflickr.com/65535/49842763368_992951e4c6_b.jpg"];

var urlsOf1Apics = ["1A","https://live.staticflickr.com/65535/49843411446_699065dd2a_b.jpg"];

var urlsOf5Apics = ["5A", "https://live.staticflickr.com/65535/49843741592_8376a48a97_b.jpg", "https://live.staticflickr.com/65535/49843438406_cdfa2bb212_b.jpg",
"https://live.staticflickr.com/65535/49843741647_29e8a4101a_b.jpg", "https://live.staticflickr.com/65535/49842894238_f168fb5d8e_b.jpg"];

var urlsOf9B_11Apics = ["9B/11A", "https://live.staticflickr.com/65535/49842990483_d326d4d226_b.jpg"];

var urlsOf3Bpics = ["3B", "https://live.staticflickr.com/65535/49843027488_e6389b057d_b.jpg"];

var urlsOf4Apics = ["4A", "https://live.staticflickr.com/65535/49847350922_8d42f4be64_b.jpg", "https://live.staticflickr.com/65535/49847350932_5ecc06a78e_b.jpg",
"https://live.staticflickr.com/65535/49846514888_511f623fa3_b.jpg", "https://live.staticflickr.com/65535/49847350962_654f9e0972_b.jpg",
"https://live.staticflickr.com/65535/49847047716_ec805c4e0e_b.jpg", "https://live.staticflickr.com/65535/49847047686_5c16b1a3d7_b.jpg",
"https://live.staticflickr.com/65535/49846514878_2ca916f0e3_b.jpg"];

var urlsOf18Apics = ["18A", "https://live.staticflickr.com/65535/49847117601_69a74d8df4_b.jpg","https://live.staticflickr.com/65535/49846584723_042a596124_b.jpg",
"https://live.staticflickr.com/65535/49846584753_e676d1833c_b.jpg", "https://live.staticflickr.com/65535/49846584748_1150ed09e1_b.jpg",
"https://live.staticflickr.com/65535/49847117621_4edc48b235_b.jpg", "https://live.staticflickr.com/65535/49846584703_4609d5077d_b.jpg"];

var urlsOf19Apics = ["19A","https://live.staticflickr.com/65535/49860204992_f237542250_b.jpg", "https://live.staticflickr.com/65535/49860204967_99aa625171_b.jpg",
"https://live.staticflickr.com/65535/49859894496_213501173a_b.jpg"];

var urlsOf13Apics = ["13A","https://live.staticflickr.com/65535/49860287147_fbef33e61d_b.jpg", "https://live.staticflickr.com/65535/49860287137_d89c3950d5_b.jpg",
"https://live.staticflickr.com/65535/49860287087_8c07961108_z.jpg", "https://live.staticflickr.com/65535/49859976036_e8f6661d87_b.jpg", 
"https://live.staticflickr.com/65535/49860287132_fc8641ed42_b.jpg", "https://live.staticflickr.com/65535/49859976086_7f9876dd56_b.jpg",
"https://live.staticflickr.com/65535/49860287072_f2dbd468a1_b.jpg", "https://live.staticflickr.com/65535/49859976071_3f7371e7f1_b.jpg",
"https://live.staticflickr.com/65535/49859976006_872ce7df1d_b.jpg", "https://live.staticflickr.com/65535/49860287117_7c84056a9d_b.jpg",
"https://live.staticflickr.com/65535/49859976001_ca0ce0fe02_b.jpg"];

var urlsOf13Bpics = ["13B", "https://live.staticflickr.com/65535/49860142786_fa2c09cf53_b.jpg"];

var urlsOf15Apics = ["15A", "https://live.staticflickr.com/65535/49860472852_e8f6dc0108_b.jpg"];

var urlsOf15Bpics = ["15B","https://live.staticflickr.com/65535/49860219381_bea96a0a33_b.jpg", "https://live.staticflickr.com/65535/49860530302_b598da355f_b.jpg",
"https://live.staticflickr.com/65535/49860530222_e78389a546_b.jpg", "https://live.staticflickr.com/65535/49860530277_74a55f94b7_b.jpg",
"https://live.staticflickr.com/65535/49860219286_a5a5647940_b.jpg", "https://live.staticflickr.com/65535/49860530267_922560443d_b.jpg",
"https://live.staticflickr.com/65535/49860556957_230c914c06_b.jpg","https://live.staticflickr.com/65535/49860219326_9255b96403_b.jpg",
"https://live.staticflickr.com/65535/49860530197_515abdbabb_b.jpg", "https://live.staticflickr.com/65535/49859682698_f8b49853cc_b.jpg",
"https://live.staticflickr.com/65535/49860530232_a6da702069_b.jpg", "https://live.staticflickr.com/65535/49860219261_6682112089_b.jpg"];

var urlsOf4Bpics = ["4B", "https://live.staticflickr.com/65535/49859866048_87b7cbaedd_b.jpg"];

var urlsOf6Apics = ["6A", "https://live.staticflickr.com/65535/49860442546_4da69a55c2_b.jpg", "https://live.staticflickr.com/65535/49860442471_ac32b12de6_b.jpg",
"https://live.staticflickr.com/65535/49860442531_49400ce384_b.jpg", "https://live.staticflickr.com/65535/49860753022_765a7b6516_b.jpg",
"https://live.staticflickr.com/65535/49860752947_356558e742_b.jpg", "https://live.staticflickr.com/65535/49860753007_fd01e962bd_b.jpg",
"https://live.staticflickr.com/65535/49860752987_f73d4cdf1b_b.jpg","https://live.staticflickr.com/65535/49859906343_53da9e2e94_b.jpg"];

var urlsOf8B_10Apics = ["8B/10A", "https://live.staticflickr.com/65535/49860753007_fd01e962bd_b.jpg", "https://live.staticflickr.com/65535/49859906343_53da9e2e94_b.jpg",
 "https://live.staticflickr.com/65535/49860753007_fd01e962bd_b.jpg"];

var urlOf6B_8Apics = ["6B/8A", "https://live.staticflickr.com/65535/49861184482_cf8028dfc7_b.jpg"];

var listofBreakerValuePics = [urlsOf1BPics, urlsOf12BPics, urlsOf17APics, urlsOf1Apics, urlsOf5Apics, urlsOf9B_11Apics, urlsOf3Bpics, urlsOf4Apics, 
    urlsOf18Apics, urlsOf19Apics, urlsOf13Apics, urlsOf13Bpics, urlsOf15Apics, urlsOf15Bpics, urlsOf4Bpics, urlsOf6Apics, urlsOf8B_10Apics, urlOf6B_8Apics];

function displayPicture(nameOfId) {
  //Go through the list of urls for each Ids. If the ID clicked on is equal to the name of the id in the list of urls, display all pictures
  //From that particular list
    for(var i = 0; listofBreakerValuePics.length; i++){
        var pictureOfLocation = listofBreakerValuePics[i];
        if(pictureOfLocation.includes(nameOfId)){
            for(var j = 1; j < pictureOfLocation.length; j++){//Starting at 1 because the the first element in the list is not a link to a picture.
                show_image(pictureOfLocation[j], 400,400, "Breaker Value_" + j, pictureOfLocation[0]);
            }
        }
    }
}


function show_image(src, width, height, alt, title) {
    var img = document.createElement("img"); //Creates an new image on the pate
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;
    img.title = title;
    document.body.appendChild(img); //Adds the img element after the very last element in the body of the html
}