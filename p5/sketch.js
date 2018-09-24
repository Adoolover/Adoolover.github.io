// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let x = 0;
let y = 0;
let state = 1;
let boxSize = 25;
let sped = 5;


function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(255);
  determineState();
  moveRect();
  rect(x,y,boxSize,boxSize);
}
function determineState(){
  if (state === 1 && x >= width - boxSize){
    x = width - boxSize;
    state = 2;
  }
  else if (state === 2 && y >= height - boxSize){
    y = height - boxSize;
    state = 3;
  }
  else if (state === 3 && x <= 0){
    x = 0;
    state = 4;
  }
  else if (state === 4 && y <= 0){
    y = 0;
    state = 1;
  }
}

function moveRect(){
  if (state === 1){
    x+= sped;
  }
  if (state === 2){
    y+= sped;

  }if (state === 3){
    x-= sped;
  }
  if (state === 4){
    y-= sped;
  }
}
