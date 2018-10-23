// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let grid = [];
let cols = 10;
let rows = 10;
function setup() {

  createCanvas(windowWidth, windowHeight);
  background(255);

}
function draw() {
  stroke(0);


}

function mousePressed(){
  for (let i = 0; i < cols; i++){
    grid[i] = [];
    for (let j = 0; j < rows; j++){
      grid[i][j] = int(random(2));
    }
  }
  for (let i = 0; i < cols; i++){
    for (let j = 0; j < rows; j++){
      let h = height/cols;
      let w = width/rows;
      if (grid[i][j] === 0){
        fill(125);
      }
      else {
        fill(255);
      }
      rect(j*w, i*h, w, h);

    }
  }
}
