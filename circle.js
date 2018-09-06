//
//

//First make a function
//
//and pass it everything we need to make a 
//circle
function drawCircle(x, y, radius, width, color)
{
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d")
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    ctx.stroke();
}

/*now we can make all kinds of circles
drawCircle(50, 50, 20, 5, "blue");
drawCircle(100, 100, 24, 8, "red");*/

//This function will draw rectangles
function drawRectangle(x, y, length, width, color, lineWidth)
{
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.rect(x, y, lineWidth, length);
    ctx.stroke();

}

drawRectangle(150, 150, 50, 100, "green", 1);

//This function will draw a filled circle
function filledCircle(x, y, radius, color)
{
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d")
    ctx.lineWidth = width;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    ctx.fill();
}

//filledCircle(100, 100, 50, "red");