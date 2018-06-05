$(document).ready(function() {
    $(".contact").mouseover(function() {
        // animate to zoom in text for contact us page 
        $(".contact").animate({
            zoom: '150%'
        }, "slow");
    });
    // to change the color from red to white and change font size
    $(".contact1").mouseover(function() {
        $(".contact1").css('font-size', '32px');
        $(".contact1").animate({
            color: 'white'
        })
    });
    // to change the font family for the label tag 
    $("label").mouseover(function() {
        $("label").css('font-family', "impact");
    });
    // to change the input text area when I click 
    $("input").click(function() {
        $("input")
            .css('font-family', 'arial');
        $("input").animate({
            color: '#7f0000'
        });
    });
    // I downloaded a jquery validate plugin that I linked to my contact.html
    $("#form").validate();
});
