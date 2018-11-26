class Button  {
  constructor(){
    // assigning varribiles
    this.x = width/2;
    this.y = height/2;
    this.length = 500;
    this.w = 200;
    this.hit;
  }
  drawButton() {
    rect(this.x - this.length/2, this.y - this.w/2, this.length, this.w);
    if (this.hit === true){
      textSize(50);
      fill("red");
      text("Press to start", this.x, this.y);
      textSize(10);
    }
    else{
      textSize(50);
      text("Press to start", this.x, this.y);
      textSize(10);
    }
  }

  checkClick() {
    this.hit = collidePointRect(mouseX,mouseY,this.x - this.length/2,this.y - this.w/2,this.length,this.w);
    if (this.hit === true && mouseIsPressed){
       return 1;
    }
    return 0;
  }
}
