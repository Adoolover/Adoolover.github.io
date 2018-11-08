// sudoko
// Cody
// Oct 26th
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let interactingGrid;
let grid;
let gridSolved;
let rows = 9;
let cols = 9;
let cellSize;
// loading sudoku files
function preload() {
  grid = loadStrings("assets/sudoku1.txt");
  gridSolved = loadStrings("assets/sudoku1Solved.txt");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  cellSize = height / cols;
  textAlign(CENTER, CENTER);
  textSize(25);
  interactingGrid = createEmptyArray();
  cleanUpTheGrid(grid);
  cleanUpTheGrid(gridSolved);
}
// Displaying gris and checking win as well as drawing
function draw() {
  translate(width * 0.25, 0);
  displayGrid();
  drawlines();
  checkWin();
}
// displaying the win
function displayWin() {
  text("you win", width * 0.50 / 2, height / 2);
}
// checking for win
function checkWin() {
  let numberOfcorrect = 0;
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] !== gridSolved[y][x]) {
        break;
      }
      else if (grid[y][x] === gridSolved[y][x]) {
        numberOfcorrect++;
      }
    }
  }
  if (numberOfcorrect === cols*rows){
    displayWin();
  }

}
// putting the grid in order
function cleanUpTheGrid(someGrid) {
  for (let i = 0; i < grid.length; i++) {
    someGrid[i] = someGrid[i].split("");
  }
}
// checking for what number is pushed
function keyPressed() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (interactingGrid[y][x] === 1) {
        grid[y][x] = key;
      }
      interactingGrid[y][x] = 0;
    }
  }
}
// determaning where it is clicked
function mousePressed() {
  let x = floor((mouseX - width * 0.25) / cellSize);
  let y = floor(mouseY / cellSize);


  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      interactingGrid[y][x] = 0;
    }

  }
  if (interactingGrid[y][x] === 0) {
    interactingGrid[y][x] = 1;
  }
  else if (interactingGrid[y][x] === 1) {
    interactingGrid[y][x] = 0;
  }


}
// Makeing the game look pretty
function drawlines() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (y % 3 === 0 && x % 3 === 0) {
        strokeWeight(5);
        line(x * cellSize, y * cellSize, x * cellSize, height);
        strokeWeight(1);
      }
      if (y % 3 === 0 && x % 3 === 0) {
        strokeWeight(5);
        line(x * cellSize, y * cellSize, cols * cellSize, y * cellSize);
        strokeWeight(1);
      }
      strokeWeight(5);
      line(9 * cellSize, 0, 9 * cellSize, height);
      strokeWeight(1);
    }
  }
}
// displaying the numbers on the grid and the grid itself
function displayGrid() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (interactingGrid[y][x] === 1) {
        fill(125);
        rect(x * cellSize, y * cellSize, cellSize, cellSize);
      }
      else {
        fill(255);
        rect(x * cellSize, y * cellSize, cellSize, cellSize);
      }
      for (let i = 0; i < rows + 1; i++) {
        let string = str(i);
        if (grid[y][x] === "0") {
          fill("black");
          text(" ", x * cellSize + cellSize / 2, y * cellSize + cellSize / 2);
          fill("black");
        }
        else if (grid[y][x] === string) {
          fill("black");
          text(i, x * cellSize + cellSize / 2, y * cellSize + cellSize / 2);
          fill("black");
        }
      }

    }
  }
}
// creating an array of zero to interact with.
function createEmptyArray() {
  let arr = [];
  for (let y = 0; y < rows; y++) {
    arr.push([]);
    for (let x = 0; x < cols; x++) {
      arr[y].push(0);
    }
  }
  return arr;
}
