// JavaScript File
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }
}

//jquery effect to make h1 shake!   
$("h1").effect( "shake", { direction: "up", times: 4, distance: 10}, 1000 );


// jquery effect to make panel class explode when clicked
$(".panel").hover(function(){
    $(".panel").fadeOut("slow", function(){
        
    });
});