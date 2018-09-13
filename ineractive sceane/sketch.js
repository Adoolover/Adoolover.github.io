// Ineractive_scene
// Cody Flynn
// sept 13th
// Falling Blocks game.
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let squareX = 
let squareY

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
}

function draw(){
rect(width/2, 0, 50, 50);

}
function mousePressed(){
  if  (keyIsPressed){
     	if (key === "r"){
      		rect(mouseX, mouseY, 50, 50)
      	}
    	if (key === "e"){
      		ellipse(mouseX, mouseY, 50, 50)
  		}
  }
}
function keyTyped() {
    if (key === "w") {
      background(255);
    }
    else if (key === "b") {
      background(0);
    }
  }
