$(document).ready(function() {
    $.each(glasses, function(ind, val) {
        var prod = $("<div>").css("display", "none");
        $("<div>").html(val.name).appendTo(prod);
        $("<div>").html(val.description).appendTo(prod);
        $("<div>").html(val.price).appendTo(prod);
        $("<img>").attr("src", val.image).appendTo(prod);
        $("<div id='button" + ind + "'>")
            .html("Buy Now")
            .css({
                "width": "70px",
                "border-color": "#B22222",
                "background-color": "#B22222",
                "border-radius": "10px",
                "padding": "8px",
                "color": "white",
                "border-width": "2px",
                "border-style": "solid"
            })
            .appendTo(prod);

        prod.appendTo("#results");
        prod.delay(ind * 400).fadeIn(3000);
        $("#button" + ind).animate({
            "margin-left": '200px'
        }, 700 * (ind + 1));
    })
});



// array for my products
var glasses = [{
    "name": "Hudson",
    "price": "$19.99",
    "description": "The best thin glasses <br/> you can find!",
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
