// JavaScript File
console.log("inside the script");

var images = [];

var image1 = {
    src : "https://cst221-spring2017-peerni95.c9users.io/Labs/Lab1/images/sad-child.jpg",
    alt : "sad child"
};

var image2 = {
    src : "http://www.baeyesite.com/wp-content/uploads/2014/07/kids-glasses-children-eyeglasses-381.jpg",
    alt : "child1"
};

var image3 = {
    src : "http://www.optiwow.com/blog/wp-content/uploads/2015/02/boy-in-glasses-21.png",
    alt : "child2"
};

var image4 = {
    src : "http://www.smallfryblog.com/wp-content/uploads/2014/04/jonaspaul1-225x225.jpg",
    alt : "child3"
};

var image5 = {
    src : "https://cdn.shopify.com/s/files/1/0879/4406/products/Ruth-Tortoise-Round-Girls-Glasses-by-Jonas-Paul-Eyewear_grande.jpg?v=1470231710",
    alt : "child4"
};

images.push(image1);
images.push(image2);
images.push(image3);
images.push(image4);
images.push(image5);

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function genrateRandomPicture(){
    var randomlySelecteImage = images[randomInt(0,4)];
    document.write("<img class = 'clearfix' src = " + randomlySelecteImage.src + " alt = " + randomlySelecteImage.alt + ">" );
}


genrateRandomPicture();