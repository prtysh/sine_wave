var a = 0;
var amplitude = 50;
var x = 0;
function setup() {
  createCanvas(400,400);
  background(32);
  }

function draw() {
  //background(0);
  noStroke();

  var gap = TWO_PI / 50;
  ellipse(x,(height/2) + amplitude* sin(a),5,5);
  a = a + gap;
  x = x + 2;
  if(x>width){reset()}
}

function reset(){
  background(32);
  x = 0;
}
