//
//

//
//
//
//
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

//now we can make all kinds of circles
drawCircle(50, 50, 20, 5, "blue");
drawCircle(100, 100, 24, 8, "red");