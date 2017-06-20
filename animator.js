//canvas setup
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
//constants
var width = 32;
var height = 32;
var frames = [];
//giving the colors a number
var colorIndex = ["white","red","green","yellow","blue"];
//loops through the array to make a 32 by 32 matrix
function newFrame( width, height){
frames[frames.length] = [];
 for (var i; i<height; i++){
  frames[frames.length-1][i] = [];
  for(var j; j<width; j++){
    frames[frames.length-1][i][j] = 0;
  }
}
}
function render(currentFrame) {
  for (var i = 0; i < height; i++) {
    for (var j = 0; j < width; j++) {
      context.fillStyle = colorIndex[frames[currentFrame][i][j]];  
      context.fillRect(j*12.5,i*12.5, 12.5,12.5);
    }
  }
}

newFrame(width, height);
