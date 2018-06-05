 var newElement = document.createElement("img");
 newElement.setAttribute("id", "best_image");
 newElement.setAttribute("style", "width:500px; height:500px;");
 newElement.setAttribute("onclick", "toggleImage(this);");

 var myDiv = document.getElementById("images");
 myDiv.appendChild(newElement);

 var imageAUrl = "https://s-media-cache-ak0.pinimg.com/236x/81/f0/48/81f048feb698b61dbbff50077a96a5a4.jpg";
 var imageBUrl = "https://s-media-cache-ak0.pinimg.com/originals/8a/e6/87/8ae687cb64f29debe618bca5dadd4084.jpg";
 var currentImage;


 toggleImage();

 function toggleImage(imageElement) {


   if (currentImage === imageAUrl) {
     currentImage = imageBUrl;
   }
   else {
     currentImage = imageAUrl;
   }
   newElement.setAttribute("src", currentImage);
 }
 