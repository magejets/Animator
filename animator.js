//canvas setup
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
//constants
var width = 32;
var height = 32;
var frames = [];
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
newFrame(width, height);
