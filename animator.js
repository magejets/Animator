var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var width = 32;
var height = 32;
var frames = [];
function newFrame(){
frames[frames.length] = [];
 for (var i; i<height; i++){
  frames[frames.length-1][i] = [];
  for(var j; j<width; j++){
    frames[frames.length-1][i][j] = 0;
  }
}
}
