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

function preload(){
  grid = loadStrings("assets/trackOne.txt");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellsize = (width + height)*0.0075;
  rows = 44;//height/100*cellsize;
  cols = 90; //width/100*cellsize;
  noStroke();
  cleanUpTheGrid(grid);
  displayGrid(grid);


}

function draw() {
  noLoop();
}

function cleanUpTheGrid(someGrid) {
  for (let i = 0; i < grid.length; i++) {
    someGrid[i] = someGrid[i].split("");
  }
}

function displayGrid(thisGrid){
  for (let i = 0; i < cols; i++){
    for (let j = 0; j < rows; j++){
      if (thisGrid[j][i] === "w"){
        fill("brown");
        rect(i*cellsize, j*cellsize, cellsize+1, cellsize+1);
      }
      else if (thisGrid[j][i] === "g"){
        fill(0,255,0);
        rect(i*cellsize, j*cellsize, cellsize+1, cellsize+1);
      }
      else if (thisGrid[j][i] === "t"){
        fill(125);
        rect(i*cellsize, j*cellsize, cellsize+1, cellsize+1);
      }

    }
  }
}

// function creating2DGrid() {
//   let arr = [];
//   for (let y = 0; y < rows; y++) {
//     arr.push([]);
//     for (let x = 0; x < cols; x++) {
//       arr[y].push(0);
//     }
//   }
//   return arr;
// }
