// For class schedules I found a workout API : https://wger.de/en/software/api
// I have used two of their free API calls to just get week days and mucslse names
// they have more cool APIs which can be used later



// hard coded sample class schedule
var classes = [{
    "day": "Monday",
    "muscle": "Anterior deltoid",
    "workout": "BodyBalance",
    "teacher": "JACKIE MILLS",
}, {
    "day": "Tuesday",
    "muscle": "Biceps brachii",
    "workout": "BodyPump",
    "teacher": "GLEN OSTERGAARD",
}, {
    "day": "Wednesday",
    "muscle": "Biceps femoris",
    "workout": "BodyStep",
    "teacher": "MARK NU’U",
}, {
    "day": "Thursday",
    "muscle": "Brachialis",
    "workout": "CXworx",
    "teacher": "DAN COHEN ",
}, {
    "day": "Friday",
    "muscle": "Gastrocnemius",
    "workout": "BodyStep",
    "teacher": "MARK NU’U",
}, {
    "day": "Saturday",
    "muscle": "Gluteus maximus",
    "workout": "BodyPump",
    "teacher": "GLEN OSTERGAARD",
}, {
    "day": "Sunday",
    "muscle": "Latissimus dorsi",
    "workout": "BodyPump",
    "teacher": "GLEN OSTERGAARD",
}, {
    "day": "Monday",
    "muscle": "Obliquus externus abdominis",
    "workout": "CXworx",
    "teacher": "DAN COHEN ",
}, {
    "day": "Wednesday",
    "muscle": "Pectoralis major",
    "workout": "BodyPump",
    "teacher": "GLEN OSTERGAARD",
}, {
    "day": "Thursday",
    "muscle": "Quadriceps femoris",
    "workout": "BodyBalance",
    "teacher": "JACKIE MILLS",
}, {
    "day": "Tuesday",
    "muscle": "Rectus abdominis",
    "workout": "BodyAttack",
    "teacher": "LISA OSBORNE ",
}, {
    "day": "Friday",
    "muscle": "Serratus anterior",
    "workout": "BodyVive",
    "teacher": "SUSAN TRAINOR",
}, {
    "day": "Monday",
    "muscle": "Soleus",
    "workout": "BodyPump",
    "teacher": "GLEN OSTERGAARD",
}, {
    "day": "Sunday",
    "muscle": "Trapezius",
    "workout": "BodyVive",
    "teacher": "SUSAN TRAINOR",
}, {
    "day": "Saturday",
    "muscle": "Triceps brachii",
    "workout": "BodyBalance",
    "teacher": "JACKIE MILLS",
}];


$(document).ready(function() {
    makeDropDownFordays();
    makeDropDownFormuscle();
    $("<button id='search'>Search</button>")
        .prependTo($('.schedule'))
        .click(searchForClasses);
});

/**
 * This funtion makes a API call to get the list week days
 * and shows them in a dropdown
 */
function makeDropDownFordays() {
    $.ajax({
        url: "https://wger.de/api/v2/daysofweek",
        dataType: "json",
        type: "GET"
    }).done(function(response) {
        var daysText = $("<p>").html("Choose day:").css('color', 'white');
        $(".schedule").prepend(daysText);
        var select = $("<select id='days'>");
        // the API response has a property called results which has the days in an array
        var result = response.results;
        $.each(result, function(index, value) {
            // results array has object, and one property of the object is day_of_week
            var optionString = "<option value=" + value.day_of_week + ">" + value.day_of_week + "</options>";
            $(optionString).appendTo(select);
        });
        select.prependTo($(".schedule"));
    });
}

/**
 * This funtion makes a API call to get the list of muscles
 * and shows them in a dropdown
 */
function makeDropDownFormuscle() {
    var muscles = [];
    $.ajax({
        url: "https://wger.de/api/v2/muscle",
        dataType: "json",
        type: "GET"
    }).done(function(response) {
        var musclesText = $("<p>").html("Choose muscle:").css('color', 'white');
        $(".schedule").prepend(musclesText);
        var select = $("<select id='muscles'>");
        var result = response.results;
        $.each(result, function(index, value) {
            var optionString = "<option value=" + value.name + ">" + value.name + "</options>";
            $(optionString).appendTo(select);
        });
        select.prependTo($(".schedule"));
    });
}

/**
 * this funtions looks for classes using the selected day and muscle
 */
var searchForClasses = function() {
    // gets what is chosen for days dropdown
    var day = $('#days').find(":selected").text();
    // gets what is chosen for muscles dropdown
    var muscle = $('#muscles').find(":selected").text();
    var result = [];
    // I loop through all my classes--hard coded-- and look for days and mucsles
    $.each(classes, function(index, classObj) {
        if (classObj.day == day && classObj.muscle == muscle) {
            result.push(classObj);
        }
    })
    showResult(result);
}

/**
 * this funtion is used for showing the results of the search
 */
function showResult(result){
    // gets the programs class from html
    var programs = $('.programs');
    // if already has results empty it
    programs.empty();
    // goes through classes to show them using p tags and attaches them to the programs div
    // one advantage of this piece of code is that no matter how many feilds the class have it will show all of them.
    $.each(result, function(index, program) {
        $.each(program, function(index, value) {
            var text = $('<p>').html(index+" : "+value).css('color','#7f0000');
            text.appendTo(programs);
        });
    });
}
