// JavaScript File
// 1.['saeid','pernille', 'angel'] => ['saeid','angel'];
function returnEvens(strings){
    var output = [];
    for (i =0;i<strings.length;i++){
        if(i%2==0){
            output.push(strings[i]);
        }
    }
    return output;
}

//2
function printTitleAndArray(title,arrayOfStrings){
    document.write("<p>"+title+"</p>");
    for(i=0;i<arrayOfStrings.length;i++){
        document.write(arrayOfStrings[i]);
    }
}


