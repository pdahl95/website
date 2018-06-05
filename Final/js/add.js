// // JavaScript File
var savedGlasses = [];
$(document).ready(function() {
    $(".saveGlasses").click(function() {
        var urlImgae = $("#url").val(); //get the url for image of glasses
        var make = $("#make").val(); //to dislap the make
        var model = $("#model").val(); //get the model
        var description = $("#description").val(); //get to know why they liked it

        // var description = document.getElementById("desc").innerHTML

        console.log(urlImgae)
        console.log(make)
        console.log(model)
        console.log(description)

        add(urlImgae, make, model, description);
    })
    
     $("#form").validate(); // i added the plugin to validate the fileds 
});

var glasses = []


function add(urlImgae, make, model, description) {
    glasses.push({
        // here I am trying to push it so the html
        "urlImgae": urlImgae,
        "make" : make,
        "model": model,
        "description": description
    });

    $.ajax({
        url: "https://anydata.hensys.com/addToList/peerni95/favorites.json",
        // no matter what I did i kept getting error for this URL, the 500 internal error, 
        // which I have not seen before, I was not able to figure out how to fix it..
        method: "POST",
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify(glasses)

    }).done(function(data) {

    }).fail(function(xhr, status) {
        if (xhr.status != 404) {
            // Do something to show there was an error
            console.log("Real error found")
        }
        else {
            console.log("Please add a bookmark")
        }
    }).always(function() {

    });
};


// JavaScript File
// var savedObjects = [];
// $(document).ready(function() {
//     $.ajax({
//         url: "https://anydata.hensys.com/data/peerni95/favorites.json",
//         type: "GET",
//         dataType: "json",
//     }).done(function(data) {
//         savedObjects = data;
//         console.log(savedObjects);
//     }).fail(function(xhr) {
//         console.log('failed download');
//         console.log(xhr);
//     }).always(function() {
//         console.log('done processing download');
//     });
    
    
// $(".saveGlasses").click(function() {
//     $('.saveLink').css('cursor', 'pointer');
//     //make the object
//     var urlObjects = {};
//     urlObjects["url"] = $("#url").val()
//     urlObjects["urlImage"] = $("#urlImage").val();
//     urlObjects["description"] = $("#description").val();
//     //add the object to array
//     savedObjects.push(urlObjects);

//     $.ajax({
//         url: "https://anydata.hensys.com/addToList/peerni95/favorites.json",
//         type: "POST",
//         data: JSON.stringify(savedObjects),
//         dataType: "JSON",
//     }).done(function(data) {
//         console.log('successful upload');
//         console.log(data);
//     }).fail(function(xhr) {
//         console.log('failed upload');
//         console.log(xhr);
//     }).always(function() {
//         console.log('done processing upload');
//     });
// });
    
// });

// var savedGlasses = [];
// $(document).ready(function() {
//     $(".saveGlasses").click(function() {
//         $('.saveGlasses').css('cursor', 'pointer');
//         //make the object
//         var glassesObj = {};
//         glassesObj["url"] = $("#url").val()
//         glassesObj["make"] = $("#make").val();
//         glassesObj["model"] = $("#model").val();
//         glassesObj["description"] = $("#description").val();
//         //add the object to array
//         savedGlasses.push(glassesObj);

//         $.ajax({
//             url: "https://anydata.hensys.com/addToList/peerni95/favorites.json",
//             type: "POST",
//             data: JSON.stringify(savedGlasses),
//             // dataType: "JSON",
//         }).done(function(data) {
//             console.log('successful upload');
//             console.log(data);
//         }).fail(function(xhr) {
//             console.log('failed upload');
//             console.log(xhr);
//         }).always(function() {
//             console.log('done processing upload');
//         });
//     });
// });
