let Lightbulb; 
function setup() {
  createCanvas(400, 400);
}

function preload() {
  Lightbulb = loadImage('Lightbulb.jpg');
}

function draw() {
  angleMode(DEGREES);
  frameRate(10);
  background(130, 135, 255, 150);
  //image(Lightbulb, 0, 0, 400, 400);
  //print(mouseX, mouseY);

  //Light on/off
  
 if(mouseIsPressed) { 
  strokeWeight(15);
  stroke(random(220, 255), random(200, 255), random(50, 150), random(50, 200))
   
   //Refers to segment function, code for shining light
   
var value=0
  while(value<5) {
    value=value+1
    segment(random(90, 360), random(100, 130));
  }
 }else{}
  
  //Light on/off
  
  strokeWeight(20);
  if(mouseIsPressed) {
    fill(255, 234, 144);
    stroke(255, 233, 74, 150);}else{
    fill(200);
    stroke(160, 150);
    }
  
  //Light bulb
  
  beginShape();
    curveVertex(167, 286);
    curveVertex(167, 286);
    curveVertex(156, 246);
    curveVertex(131, 199);
    curveVertex(125, 171);
    curveVertex(130, 139);
    curveVertex(161, 106);
    curveVertex(200, 95);
    curveVertex(239, 106);
    curveVertex(270, 139);
    curveVertex(275, 171);
    curveVertex(269, 199);
    curveVertex(244, 246);
    curveVertex(233, 286);
    curveVertex(233, 286);
    curveVertex(167, 286);
    curveVertex(167, 286);
  endShape();
  
  //Patches
  
  stroke(130, 135, 255);
  strokeWeight(12);
  line(156, 294, 244, 294);
  line(247, 296, 251, 278);
  
  //Metal base
  
  fill(80);
  noStroke();
  rect(173, 290, 54, 31);
  stroke(50);
  strokeWeight(7);
  line(172, 296, 228, 296);
  line(172, 308, 228, 308);
  line(172, 320, 228, 320);
  strokeWeight(12);
  line(183, 326, 217, 326);
}

//Function for shining light

function segment(a, l) {
  angleMode(DEGREES);
  translate(200, 200);
  rotate(a);
  line(0, 0, l, l);
  rotate(-a);
  translate(-200, -200);
  }