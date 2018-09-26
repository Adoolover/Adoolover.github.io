// Traffic Light Starter Code
// Dan Schellenberg
// Sept 25, 2018

// GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at https://p5js.org/reference/

let state = 1;
let lastTimeSwitchColour = 0;

let redLightDaration = 3000;
let greenLightDaration = 4000;
let yellowLightDaration = 5000;


function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  drawOutlineOfLights();
  checkForStateChange();
  displayCorrectLight();

}
function checkForStateChange(){
  let elapasedTime = millis() - lastTimeSwitchColour;

  if (state === 1 && elapasedTime >= redLightDaration) {
    state = 2;
    lastTimeSwitchColour = millis();
  }
  else if (state === 2 && elapasedTime >= greenLightDaration) {
    state = 3;
    lastTimeSwitchColour = millis();
  }
  else if (state === 3 && elapasedTime >= yellowLightDaration) {
    state = 1;
    lastTimeSwitchColour = millis();
  }

}
function displayCorrectLight(){
  if (state === 1){
    displayRedLight();
  }
  else if (state === 2){
    displayGreenLight();
  }
  else if (state === 3){
    displayYellowLight();
  }

}
function displayRedLight(){
  fill(255, 0, 0);
  ellipse(width/2, height/2 - 65, 50, 50); //top
}
function displayYellowLight(){
  fill(255, 255, 0);
  ellipse(width/2, height/2, 50, 50); //middle
}
function displayGreenLight(){
  fill(0, 255, 0);
  ellipse(width/2, height/2 + 65, 50, 50); //bottom
}
function drawOutlineOfLights() {

  //box
  rectMode(CENTER);
  fill(0);
  rect(width/2, height/2, 75, 200, 10);

  //lights
  fill(255);
  ellipse(width/2, height/2 - 65, 50, 50); //top
  ellipse(width/2, height/2, 50, 50); //middle
  ellipse(width/2, height/2 + 65, 50, 50); //bottom
}
