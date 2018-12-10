// Top down raceing, game Major Project
// Cody Flynn
// Fri Dec 7th
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let grid;
let cols;
let rows;
let cellsize;
function setup() {
  createCanvas(windowWidth, windowHeight);
  cellsize = (width + height)*0.0075;
  rows = height/100*cellsize;
  cols = width/100*cellsize;
  grid = creating2DGrid();
}

function draw() {
  for (let i = 0; i < rows; i++){
    for (let j = 0; j < cols; j++){
      rect(i*cellsize, j*cellsize, cellsize, cellsize);
    }
  }
  noLoop();
}

function creating2DGrid() {
  let arr = [];
  for (let y = 0; y < rows; y++) {
    arr.push([]);
    for (let x = 0; x < cols; x++) {
      arr[y].push(0);
    }
  }
  return arr;
}
