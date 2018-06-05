// // JavaScript File
// $(document).ready(function() {
//     $(".button").css("background-color", "ADD8E6");
//     $(".button").click(function() {
//         var textinput = $(".location").val();
//         getWeather(textinput);
        
//     });
// });

// var getWeather = function(city) {
//     $.ajax({
//         url: getUrl,
//         dataType: "json",
//         type: "GET"
//     }).done(function(response) {
//         $("<div class='name'>").html(response.name + "," + response.sys.country).appendTo(".results");
//         $("<div class='weather'>").html(response.weather[0].description).appendTo(".results");
//         $("<div class='temp'>").html(response.main.temp - 273.15 + "&deg;").appendTo(".results");
//         $("<div class='speed'>").html("Wind:" + response.wind.speed + ' ' + ' mph ' + ' ' + degToDirection(response.wind.deg)).appendTo(".results");

//     });

// }

// // var date = new Date;
// // var getUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=b3a5c1bf5ad0742cc280712552b1a4c6";
// // var imageUrl = 'http://openweather.org/img/w/' + response.weather[0].icon + 'png';
// // var image = '<img src="' + imageUrl + '"alt="weather icon" title="' + data.weather[0].description + '"/>"';
// // var googleMaps = '<a href="https:www.google.com/maps/preview/@' + data.coord.lat + ',' + data.coord.lon + ',12z' + '">open in maps</a>';
// // date.setTime(response.dt * 1000);

// // code to made degree Farenheit ? 
// var degToDirection = function(deg) {
//     if (deg > 11.25 && deg < 33.75) {
//         return "NNE";
//     }
//     else if (deg > 33.75 && deg < 56.25) {
//         return "ENE";
//     }
//     else if (deg > 56.25 && deg < 78.75) {
//         return "E";
//     }
//     else if (deg > 78.75 && deg < 101.25) {
//         return "ESE";
//     }
//     else if (deg > 101.25 && deg < 123.75) {
//         return "ESE";
//     }
//     else if (deg > 123.75 && deg < 146.25) {
//         return "SE";
//     }
//     else if (deg > 146.25 && deg < 168.75) {
//         return "SSE";
//     }
//     else if (deg > 168.75 && deg < 191.25) {
//         return "S";
//     }
//     else if (deg > 191.25 && deg < 213.75) {
//         return "SSW";
//     }
//     else if (deg > 213.75 && deg < 236.25) {
//         return "SW";
//     }
//     else if (deg > 236.25 && deg < 258.75) {
//         return "WSW";
//     }
//     else if (deg > 258.75 && deg < 281.25) {
//         return "W";
//     }
//     else if (deg > 281.25 && deg < 303.75) {
//         return "WNW";
//     }
//     else if (deg > 303.75 && deg < 326.25) {
//         return "NW";
//     }
//     else if (deg > 326.25 && deg < 348.75) {
//         return "NNW";
//     }
//     else {
//         return "N";
//     }
// };


$(document).ready(function() {
    $('.results').hide();
    $('.button').button().click(function() {
        var location = $('.location').val();
        var api = 'b3a5c1bf5ad0742cc280712552b1a4c6';
        var url = "http://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=" + api;


        $('.results').show();

        var date = new Date();

        if (location === '') {
            $('.results').append('Error: Please fill in your city');
        }
        else(
            $.ajax({
                url: url,
                type: 'GET',
                dataTyoe: 'jsonp',

                success: function(data) {
                    var degToDirection = function(deg) {
                        if (deg > 11.25 && deg < 33.75) {
                            return "NNE";
                        }
                        else if (deg > 33.75 && deg < 56.25) {
                            return "ENE";
                        }
                        else if (deg > 56.25 && deg < 78.75) {
                            return "E";
                        }
                        else if (deg > 78.75 && deg < 101.25) {
                            return "ESE";
                        }
                        else if (deg > 101.25 && deg < 123.75) {
                            return "ESE";
                        }
                        else if (deg > 123.75 && deg < 146.25) {
                            return "SE";
                        }
                        else if (deg > 146.25 && deg < 168.75) {
                            return "SSE";
                        }
                        else if (deg > 168.75 && deg < 191.25) {
                            return "S";
                        }
                        else if (deg > 191.25 && deg < 213.75) {
                            return "SSW";
                        }
                        else if (deg > 213.75 && deg < 236.25) {
                            return "SW";
                        }
                        else if (deg > 236.25 && deg < 258.75) {
                            return "WSW";
                        }
                        else if (deg > 258.75 && deg < 281.25) {
                            return "W";
                        }
                        else if (deg > 281.25 && deg < 303.75) {
                            return "WNW";
                        }
                        else if (deg > 303.75 && deg < 326.25) {
                            return "NW";
                        }
                        else if (deg > 326.25 && deg < 348.75) {
                            return "NNW";
                        }
                        else {
                            return "N";
                        }
                    };

                    date.setTime(data.dt * 1000);

                    var imageUrl = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
                    var image = '<img src="' + imageUrl + '"alt="weather icon" title="' + data.weather[0].description + '"/>"';
                    var googleMaps = '<a href="https:www.google.com/maps/preview/@' + data.coord.lat + ',' + data.coord.lon + ',12z' + '">open in maps</a>';
                    var windToDirection = degToDirection(data.wind.deg);

                    $('#output').append('<h1>' + data.name + ',' + data.sys.country + '</h1>' + '</br>' +
                        googleMaps + '</br>' +
                        '<h2>' + image + '' + data.weather[0].description + '</h2>' + '</br>' +
                        '<h3>' + (data.main.temp - 273.15) + '&#8451' + ' at ' + date.toLocaleString() + '</br>' +
                        'Wind: ' + data.wind.speed + ' mph ' + windToDirection + '</h3>' + '</br></br>');
                }
            }));
    });
});
