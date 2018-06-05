// we can use this function also for printing the properties of an object
function printObject(object){
    for(var key in object){
            document.write("<p>" + key + ":" + object[key] + "</p>");
    }
}



