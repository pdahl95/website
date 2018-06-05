// JavaScript File
$(document).ready(function() {
    $.ajax({
        url: "https://anydata.hensys.com/data/peerni95/steampunks.json",
        type: "GET",
        dataType: "json",
    }).done(function(data) {
        console.log('succeeded download');
        console.log(data);
        savedObjects = data
        for (var i in data) {
            var div = $("<div id='steam'></div>")
            div.append("<p>" + data[i].description + "</p>")
            div.append("<a href='" + data[i].description + "'>Link</a><br>")
            div.append("<img src='" + data[i].imageURL + "'>")

            $("#bookmark").append(div);
        };

        // loop through JSON object using jquery predfined .each(array,function(){})
        // make a dive per each object and attatch that div to a predifined dive using append or prepend function
        // you can show each object feild using a p tag
        // $.each(data,function(key, bookmark){
        //     var div = $("<div>");
        //     // extract url

        //     $.each(bookmark,function(property,value){
        //         div.append($("<p>").html(property));
        //         div.append($("<p>").html(value));
        //     });
        //     $("#bookmarks").append(div);
        // });

    }).fail(function(xhr) {
        console.log('failed download');
        console.log(xhr);
    }).always(function() {
        console.log('done processing download');
    });

    $('.searchBtn').css('cursor', 'pointer');
});
