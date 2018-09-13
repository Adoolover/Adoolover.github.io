// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

function setup() {
    createCanvas(400, 400);
    background(0);
}

function draw(){


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
