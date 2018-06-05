$(document).ready(function() {
    $.ajax({
        url: "https://anydata.hensys.com/data/peerni95/steampunks.json",
        method: "GET",
        dataType: "json"
    }).done(function(data) {
        console.log(data)
        items = data
        for (var i in data) {
            var div = $("<div id='steam'></div>")
            div.append("<p>" + data[i].description + "</p>")
            div.append("<a href='" + data[i].description + "'>Link</a><br>")
            div.append("<img src='" + data[i].imageURL + "'>")

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
        var query = $("#q").val()
        search(query)
    })

})

var items = []

function search(query) {
    console.log(query)
    $("#items").html('')
    for (var i in items) {
        if (items[i].description.includes(query)) {
            console.log(true)
            var div = $("<div id='steam'></div>")
            div.append("<p>" + items[i].description + "</p>")
            div.append("<a href='" + items[i].url + "'>Link</a><br>")
            div.append("<img src='" + items[i].imageURL + "'>")

            $("#items").append(div)
        }
    }
}
