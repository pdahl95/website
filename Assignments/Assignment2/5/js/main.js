// JavaScript File
function printObject(object){
    for(var key in object){
            document.write("<p>" + key + ":" + object[key] + "</p>");
    }
}