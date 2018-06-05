function loadHeader(){
    var nav = $("<div id='navigation-bar'>");
    var list = $("<ul id='menuList'>");
    var link = $("<a>").attr("href","https://cst221-spring2017-peerni95.c9users.io/FinalProject/index.html").html("Home");
    var home = $("<li class='colorEffect'id='home'>").append(link).appendTo(list);
    link = $("<a>").attr("href","https://cst221-spring2017-peerni95.c9users.io/FinalProject/exercise.html").html("Excercise");
    var excercise = $("<li class='colorEffect' id='excercise'>").append(link).appendTo(list);
    link = $("<a>").attr("href","https://cst221-spring2017-peerni95.c9users.io/FinalProject/schedule.html").html("Schedule");
    var schedule = $("<li class='colorEffect' id='Schedule'>").append(link).appendTo(list);
    link = $("<a>").attr("href","https://cst221-spring2017-peerni95.c9users.io/FinalProject/gallery.html").html("Gallery");
    var gallery = $("<li class='colorEffect' id='gallery'>").append(link).appendTo(list);
    link = $("<a>").attr("href","https://cst221-spring2017-peerni95.c9users.io/FinalProject/contact.html").html("Contact Us");
    var contact = $("<li class='colorEffect' id='contact'>").append(link).appendTo(list);
    list.appendTo(nav);
    var header = $(".header");
    nav.appendTo(header);
}

$(document).ready(function() {
    shakeNavigation();
    $('.colorEffect').mouseover(function() {
        $(this).css("color", "#7f0000");
    });
    $('.colorEffect').mouseout(function() {
        $(this).css("color", "white");
    });
});

function shakeNavigation() {
    $("#navigation-bar").effect("shake", {
        direction: "up",
        times: 2,
        distance: 10
    }, 1000);
}