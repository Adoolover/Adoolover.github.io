// Project Title
// Your Name
// Date
//

let dvd;
let x,y;
let dx, dy;


function preload(){
  dvd = loadImage("assets/dvd logo.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2 - dvd.width / 2;
  y = height/2 - dvd.height / 2;
  dx = 3;
  dy = 3;
}

function draw() {
  moveDVD();
  displayDVD();



}

function displayDVD() {
  background(80);
  image(dvd, x, y);
}
function moveDVD() {
  if (x <= 0 || x + dvd.width >= windowWidth){
    dx = (-dx);
  }
if (y <= 0 || y + dvd.height >= windowHeight){
  dy = (-dy);
}
x+=dx;
y+=dy;

}
