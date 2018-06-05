// // JavaScript File
$(document).ready(function() {
    $.ajax({
        url: "https://anydata.hensys.com/data/peerni95/favorites.json",
        method: "GET",
        dataType: "json"
    }).done(function(data) {
        console.log(data)
        items = data
        for (var i in data) { //for loop to loop through the items urlImage, why the like it, make and model
            var div = $("<div id='fav'></div>")
            div.append("<img src='" + data[i].urlImage + "'>")
            div.append("<p>" + data[i].description + "'</p>")
            div.append("<a href='" + data[i].make + "'>Link</a>")
            div.append("<a href='" + data[i].model + "'>Link</a><br>")

            $("#items").append(div)
        }
    }).fail(function(xhr, status) {
        if (xhr.status != 404) {
            // Do something to show there was an error
            console.log("Real error found")
        }
        else {
            console.log("Just haven't added anything yet")
        }
    }).always(function() {

    })
    $("#search").click(function() {
        var query = $("#btnSearch").val()
        search(query)
    })

})

var items = []

function search(query) {
    console.log(query)
    $("#items").html('')
    for (var i in items) {
        if (items[i].urlImage.includes(query)) {
            console.log(true)
            var div = $("<div id='fav'></div>")
            div.append("<img src='" + data[i].urlImage + "'>")
            div.append("<p>" + data[i].description + "'</p>")
            div.append("<a href='" + data[i].make + "'>Link</a>")
            div.append("<a href='" + data[i].model + "'>Link</a><br>")
            
            $("#items").append(div);
        };
    };
};


// $(document).ready(function() {
//     $.ajax({
//         url: "https://anydata.hensys.com/data/peerni95/favorites.json",
//         method: "GET",
//         dataType: "json"
//     }).done(function(data) {
//         console.log(data);
//         items = data;
//         for (var i in data) {
//             var div = $("<div id='fav'></div>")
//             div.append("<img src='" + data[i].urlImage + "'>")
//             div.append("<p>" + data[i].description + "'</p>")
//             div.append("<a href='" + data[i].make + "'>Link</a>")
//             div.append("<a href='" + data[i].model + "'>Link</a><br>")


//             $("#data").append(div);
//         }
//     }).fail(function(xhr, status) {
//         if (xhr.status != 404) {
//             // Do something to show there was an error
//             console.log("Real error found")
//         }
//         else {
//             console.log("You have not added a bookmark, please add one!");
//         }
//     }).always(function() {

//     });
//     $("#search").click(function() {
//         var query = $("#btnSearch").val();
//         search(query)
//     });

// });

// var items = []

// function search(query) {
//     console.log(query)
//     $("#items").html('');
//     for (var i in itmes) {
//         if (data[i].description.includes(query)) {
//             console.log(true)
//             var div = $("<div id='fav'></div>")
//             div.append("<img src='" + items[i].urlImage + "'>")
//             div.append("<p>" + items[i].description + "'</p>")
//             div.append("<a href='" + items[i].make + "'>Link</a>")
//             div.append("<a href='" + items[i].model + "'>Link</a><br>")


//             $("#items").append(div)
//         };
//     };
// };