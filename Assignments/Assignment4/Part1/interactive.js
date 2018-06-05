var shoppingCart = [];
var manufacturerList;
// products
$.ajax({
    url: "https://meyecare.herokuapp.com/api/v1/manufacturers",
    dataType: "json",
    type: "GET",
}).done(function(response) {
    manufacturerList = response;
    $.ajax({
        url: "https://meyecare.herokuapp.com/api/v1/products",
        dataType: "json",
        type: "GET",
    }).done(function(glasses) {
        //  Loop through the data, calling my function that does the 
        for (var i in glasses) {
            var pair = glasses[i];
            addGlassesToProductList(i, pair);
        }
    })
});
    // $(".addItem ").button(function(){
    //     var index = $(this).val();

// });

// $('.addItem').click(function() {//     var index = $(this).val();
//     shoppingCart.push(glasses[index]);
//     addGlassesToShoppingList(index, glasses[index]);
// });



// adds glasses to product list
function addGlassesToProductList(index, pair) {

    var resultDiv = document.getElementById("results");

    var content = document.createElement("div");
    content.setAttribute("class", "tile");
    resultDiv.appendChild(content);

    var nameDiv = document.createElement("div");
    nameDiv.innerHTML = pair.name;
    content.appendChild(nameDiv);
    nameDiv.setAttribute('class','nameDiv');
    
      var factureDiv = document.createElement("div");
    factureDiv.innerHTML = manufacturerList[pair.manufacturerId].name;
    content.appendChild(factureDiv);
    factureDiv.setAttribute('class','factureProd');


    if (pair.description) { // if description exists
        var descriptionDiv = document.createElement("div");
        descriptionDiv.innerHTML = pair.description;
        content.appendChild(descriptionDiv);
        descriptionDiv.setAttribute('class','descriptionDiv');
        descriptionDiv.style.fontStyle = "italic";
        descriptionDiv.style.fontSize = "18px";
    }
    var priceDiv = document.createElement("div");
    priceDiv.innerHTML = pair.price;
    content.appendChild(priceDiv);
    priceDiv.setAttribute('class','priceDiv');


    var imgDiv = document.createElement("img");
    imgDiv.setAttribute('src', pair.imageUrl);
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
