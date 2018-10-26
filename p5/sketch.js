// sudoko
// Cody
// Oct 26th
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let grid;
let rows = 9;
let cols = 9;
let cellSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  cellSize = height/cols;

}

function draw() {
  translate(width*0.25,0);
  grid = create2dArray();
  displayGrid();
  drawlines();
}
function drawlines(){
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (y%3 === 0 && x%3 === 0){
        strokeWeight(5);
        line(x*cellSize, y*cellSize, x*cellSize ,height);
        strokeWeight(1);
      }
      if (y%3 === 0 && x%3 === 0){
        strokeWeight(5);
        line(x*cellSize, y*cellSize, cols*cellSize ,y*cellSize);
        strokeWeight(1);
      }
    }
  }
}

function displayGrid() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      fill(255);

      rect(x*cellSize, y*cellSize, cellSize, cellSize);

    }
  }
}
function create2dArray(){
  let arr = [];
  for(let y = 0; y < rows; y++ ) {
    arr.push([]);
    for(let x = 0; x < cols; x++){
      arr[y].push([x+1]);
    }
  }
  return arr;
}
