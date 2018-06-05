// JavaScript File

// [3,56,7,7,7,7,7,445,34243,5]

function addUpArrayElements(numbers){
    var sum = 0;
    var readableMath = "";
    for(i=0; i<numbers.length; i++){
        if(i == numbers.length-1){
            readableMath += numbers[i] + "=";
        }else{
            readableMath += numbers[i] + "+";
        }
        sum += numbers[i];
    }
    document.write("<p>" + readableMath + sum + "</p>");
}