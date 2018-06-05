var shoppingCart = [];
// products

var glasses = [{
    "name": "Hudson",
    "price": "$19.99",
    // "description": "The best thin glasses <br/> you can find!",
    "image": "img/1.png"
}, {
    "name": "Welty",
    "price": "$17.99",
    "description": "The prefect glasses for outdoor <br>activities",
    "image": "img/2.png"
}, {
    "name": "Madison",
    "price": "$21.99",
    "description": "The sassy lady glasses",
    "image": "img/3.png"
}, {
    "name": "Jason",
    "price": "$21.99",
    "description": "For the sexy nerd look-alike",
    "image": "img/4.png"
}, {
    "name": "Eastman",
    "price": "$29.99",
    "description": "The absolute save for your eyes!",
    "image": "img/5.png"
}, {
    "name": "SunValley",
    "price": "$39.99",
    "description": "The Prefect shades",
    "image": "img/6.png"
}, {
    "name": "Sassy",
    "price": "$24.99",
    "description": "Need to play hide and seek! <br>We got you!",
    "image": "img/7.png"
}, {
    "name": "Pilot",
    "price": "$25.99",
    "description": "The perfect solution for the sun",
    "image": "img/8.png"
}];


// adds glasses to product list
function addGlassesToProductList(index, pair) {

    var resultDiv = document.getElementById("results");

    var content = document.createElement("div");
    content.setAttribute("class", "tile");
    resultDiv.appendChild(content);

    var nameDiv = document.createElement("div");
    nameDiv.innerHTML = pair.name;
    content.appendChild(nameDiv);


    if (pair.description) { // if description exists
        var descriptionDiv = document.createElement("div");
        descriptionDiv.innerHTML = pair.description;
        content.appendChild(descriptionDiv);
        descriptionDiv.style.fontStyle = "italic";
        descriptionDiv.style.fontSize = "18px";
    }
    var priceDiv = document.createElement("div");
    priceDiv.innerHTML = pair.price;
    content.appendChild(priceDiv);

    var imgDiv = document.createElement("img");
    imgDiv.setAttribute('src', pair.image);
    content.appendChild(imgDiv);

    var addToCartButton = document.createElement("button");
    addToCartButton.setAttribute('value', index);
    addToCartButton.setAttribute('class', 'addItem');
    addToCartButton.innerHTML = "Add To Cart";
    content.appendChild(addToCartButton);

// styling my HTML through javascript instead of CSS
    priceDiv.style.fontSize = "14px";
    nameDiv.style.color = "#B22222";
    nameDiv.style.fontSize = "22px";
    nameDiv.style.fontWeight = "bold";
    imgDiv.style.width = "260px";
   
}


// remove glasses from shopping cart
function removeFromShoppingCart(divId) {
    $(divId).remove();
    console.log('clicked on remove');
}

//adds glasses to shopping list
function addGlassesToShoppingList(index, pair) {
    var resultDiv = document.getElementById("shoppingCart");

    var content = document.createElement("div");
    content.setAttribute("class", "addprod");
    var id = "pair" + index;
    content.setAttribute("id", id);
    resultDiv.appendChild(content);


    var imgDiv = document.createElement("img");
    imgDiv.setAttribute('src', pair.image);
    content.appendChild(imgDiv);

    var nameDiv = document.createElement("div");
    nameDiv.innerHTML = pair.name;
    content.appendChild(nameDiv);

    var priceDiv = document.createElement("div");
    priceDiv.innerHTML = pair.price;
    content.appendChild(priceDiv);


    if (pair.description) { // if description exists
        var descriptionDiv = document.createElement("div");
        descriptionDiv.innerHTML = pair.description;
        content.appendChild(descriptionDiv);
    }

// button to add/remove glasses to cart 
    var addToCartButton = document.createElement("button");
    addToCartButton.setAttribute('value', index);
    addToCartButton.setAttribute('onClick', 'removeFromShoppingCart(' + id + ')');
    addToCartButton.innerHTML = "Remove";
    content.appendChild(addToCartButton);
}

//  Loop through the data, calling my function that does the 
for (var key in glasses) {
    var pair = glasses[key];
    addGlassesToProductList(key, pair);
}



$(document).ready(function() {
    $('.addItem').click(function() {
        var index = $(this).val();
        shoppingCart.push(glasses[index]);
        addGlassesToShoppingList(index, glasses[index]);
    });
});

