// JavaScript File
var canvas;
var ctx;
var WIDTH = 750;
var HEIGHT = 600;
var delayTime;
var x = WIDTH / 2;
var y = HEIGHT / 3;
var x2 = WIDTH / 2;
var y2 = (HEIGHT / 3) * 2;
var d;
var d2;
var speed = 70;
var isTaken = {};
var scoreA = 0;
var scoreB = 0;
init();
function init() { // this function initializes content to be drawn
    
    isTaken = {};
    x = WIDTH / 2;
    y = HEIGHT / 3;
    x2 = WIDTH / 2;
    y2 = (HEIGHT / 3) * 2;
    d = undefined;
    d2 = undefined;
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d"); // allows basic methods for drawing on canvas
    ctx.fillStyle = "#111111"; // fills the canvas box with black
    ctx.fillRect(0, 0, WIDTH, HEIGHT); // 0,0 is position; WIDTH, HEIGHT is 600 x 600

    circle(x, y, 6);
    circle2(x2, y2, 6);
    delayTime = setInterval(draw, speed);
}

function circle(x, y, r) {
    if(!hasTakenByOther(x, y, "A") && !hasHitWall(x, y, "A")){
        ctx.beginPath();
        ctx.fillStyle = "#6f0016";
        ctx.arc(x, y, r, 0, Math.PI * 2, true);
        ctx.fill();
    }
}

function circle2(x, y, r) {
    if(!hasTakenByOther(x, y, "B") && !hasHitWall(x, y, "B")){
        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.arc(x, y, r, 0, Math.PI * 2, true);
        ctx.fill();
    }
}

function draw() {
    console.log(d);
    if (d == "right") {
        // x = x + speed;
        circle(++x, y, 6);
    }
    else if (d == "left") {
        // x = x - speed;
        circle(--x, y, 6);
    }
    else if (d == "down") {
        // y = y + speed;
        circle(x, ++y, 6);
    }
    else if (d == "up") {
        // y = y - speed;
        circle(x, --y, 6);
    }

    if (d2 == "right") {
        // x2 = x2 + speed;
        circle2(++x2, y2, 6);
    }
    else if (d2 == "left") {
        // x2 = x2 - speed;
        circle2(--x2, y2, 6);
    }
    else if (d2 == "down") {
        // y2 = y2 + speed;
        circle2(x2, ++y2, 6);
    }
    else if (d2 == "up") {
        // y2 = y2 - speed;
        circle2(x2, --y2, 6);
    }

}

function stopInterval() {
    clearInterval(delayTime);
}

function hasHitWall(x, y, player) {
    if (x <= 0 || y <= 0 || x >= 750 || y >= 600) {
        if(player == "A"){
            increasePointsForA();
        }else{
            increasePointsForB();
        }
        stopInterval();
        return true;
    }
    return false;
}

function hasTakenByOther(x, y, player) {
    var position = x+":"+y;
    if (player == "A") {
        if (isTaken[position] == true) {
            increasePointsForA();
            stopInterval();
            return true;
        }
        isTaken[position] = true;
        return false;
    }
    else {
        if (isTaken[position] == true) {
            increasePointsForB();
            stopInterval();
            return true;
        }
        isTaken[position] = true;
        return false;
    }
}

function increasePointsForA(){
    alert("Game Over, A WINS");
    $("#playerA").html(++scoreA);
    init();
}

function increasePointsForB(){
    alert("Game Over, A WINS");
    $("#playerB").html(++scoreB);
    init();
}

$(document).keydown(function(e) {
    var key = e.which
    if (key == 37) {
        d = "left"
    }
    else if (key == 38) {
        d = "up"
    }
    else if (key == 39) {
        d = "right"
    }
    else if (key == 40) {
        d = "down"
    }

    if (key == 65) {
        d2 = "left"
    }
    else if (key == 87) {
        d2 = "up"
    }
    else if (key == 68) {
        d2 = "right"
    }
    else if (key == 83) {
        d2 = "down"
    }
});


$(document).ready(function() {
    $("#speed").slider({
        value: 70,
        min: 5,
        max: 150,
        step: 10,
        slide: function(event, ui) {
            speed = 160 - ui.value;
            stopInterval();
            delayTime = setInterval(draw, speed);
        }
    });
    $("#speed .ui-slider-handle").unbind('keydown');
});
