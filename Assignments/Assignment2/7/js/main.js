// JavaScript File
var changeTime = function(time){
    var d = new Date(time);
    var hour = d.getHours(time);
    if(hour < 12 ){
        return "#ff0000";
    }else if(hour < 20 ){
        return "#00ff00";
    }else{
        return "#ffff00";
    }
}