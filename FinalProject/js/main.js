// Main Javascript file
$(document).ready(function() {
    // added a plugin to get a shadox box
    $(".whatIsLesMills").addClass('shadow');

    $(".inspire").mouseover(function() {
        $(".inspire").animate({
            color: '#7f0000'
        });
        $(".inspire").css('font-family', 'impact').css('font-size','32px');
    });
    $(".inspire").mouseout(function(){
        $(".inspire").animate({
            color: 'white'
        });
        $(".inspire").css('font-family', 'arial').css('font-size','16px');
    });


    $(".readyToJoin").mouseover(function() { // animate to zoom in text for contact us page 
        $(".readyToJoin").animate({
            zoom: '150%'
        }, "slow");
    });
});

