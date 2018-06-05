$(document).ready(function() {
    $.ajax({
        url: "https://anydata.hensys.com/data/peerni95/steampunks.json",
        method: "GET",
        dataType: "json"
    }).done(function(data) {
        items = data
        console.log(data)
        console.log(items)
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

    console.log("ready!")
    $("#submit").button().slideUp().slideDown()

    $("#submit").click(function() {
        var description = $("#desc").val()
        var url = $("#url").val()
        var imageURL = $("#imageURL").val()

        // var description = document.getElementById("desc").innerHTML

        console.log(description)
        console.log(url)
        console.log(imageURL)

        add(description, url, imageURL)
    })
})
var items = []


function add(description, url, imageURL) {
    items.push({
        "description": description, //description
        "url": url, //url where found
        "imageURL": imageURL //src attribute
    })

    $.ajax({
        url: "https://anydata.hensys.com/data/peerni95/steampunks.json",
        method: "POST",
        // dataType: "json",
        contentType: "application/json",
        data: JSON.stringify(items)

    }).done(function(data) {

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
}
