$(document).ready(function() {
    // image for NO
    $('<img>')
        .attr('id','no')
        .attr('src', 'https://s2017cst221-jahenderson.c9users.io/Exercises/jQuery/10/no.png')
        .data('val', 'N')
        .mouseover({
            id: 'no'
        }, onMouseOver)
        .mouseout(onMouseOut)
        .click({
            id: 'no'
        }, onClick)
        .appendTo('#images');
    // image for YES
    $('<img>')
        .attr('id','yes')
        .attr('src', 'https://s2017cst221-jahenderson.c9users.io/Exercises/jQuery/10/yes.png')
        .data('val', 'Y')
        .mouseover({
            id: 'yes'
        }, onMouseOver)
        .mouseout(onMouseOut)
        .click({
            id: 'yes'
        }, onClick)
        .appendTo('#images');
});

function onMouseOver(event) {
    var text = $("#"+ event.data.id).data('val');
    $('#messages').html("Thinking about saying " + text);
}

function onMouseOut() {
    $('#messages').empty();
}

function onClick(event) {
    var text = $("#"+ event.data.id).data('val');
    $('#messages').html(text + "!");
}
