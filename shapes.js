//In this program we will be drawing basic shapes

//first make a variable for the canvas
var can = document.getElementById('myCanvas');
//then use the variable to get the "context";
var ctx = can.getContext('2d');

//Now we are ready to start drawing
//Lets start with rectangles
//This makes a filled rectangle
ctx.fillRect(25, 25, 100, 100);