var canvas = document.getElementById("myCanvas")
var ctx = canvas.getContext("2d")

ctx.lineWidth = 4;
ctx.strokeStyle = "blue";


ctx.beginPath();
ctx.arc(50, 50, 20, 0, Math.PI / 2, false);
//(x,y, radius atarting angle, stoppimg angle, direction)
ctx.stroke();

ctx.beginPath();
ctx.arc(100, 50, 20, 0, Math.PI, false);
ctx.stroke();

ctx.beginPath();
ctx.arc(150, 50, 20, 0, Math.PI * 2, false);
ctx.stroke();
