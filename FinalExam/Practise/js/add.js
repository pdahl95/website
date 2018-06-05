// JavaScript File
var savedObjects = [];
$(document).ready(function() {
    $.ajax({
        url: "https://anydata.hensys.com/data/peerni95/steampunks.json",
        type: "GET",
        dataType: "json",
    }).done(function(data) {
        savedObjects = data;
        console.log(savedObjects);
    }).fail(function(xhr) {
        console.log('failed download');
        console.log(xhr);
    }).always(function() {
        console.log('done processing download');
    });
    
    
$(".saveLink").click(function() {
    $('.saveLink').css('cursor', 'pointer');
    //make the object
    var urlObjects = {};
    urlObjects["url"] = $("#url").val()
    urlObjects["urlImage"] = $("#urlImage").val();
    urlObjects["description"] = $("#description").val();
    //add the object to array
    savedObjects.push(urlObjects);

    $.ajax({
        url: "https://anydata.hensys.com/data/peerni95/steampunks.json",
        type: "POST",
        data: JSON.stringify(savedObjects),
        dataType: "text",
        contentType: "application/json",
    }).done(function(data) {
        console.log('successful upload');
        console.log(data);
    }).fail(function(xhr) {
        console.log('failed upload');
        console.log(xhr);
    }).always(function() {
        console.log('done processing upload');
    });
});
    
});
