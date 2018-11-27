class Button  {
  constructor(x, y) {
    // assigning varribiles
    this.x = x;
    this.y = y;
    this.width = width/2;
    this.height = height/4;
    this.hit = false;
  }

  drawButton() {
    let col = this.hit ? "grey" : "white";
    fill(col);

    rect(this.x, this.y, this.width, this.height);

    push();
    textSize(textSizes*2);
    fill("black");
    text("Press to start", this.x, this.y);
    pop();
  }

  checkClick() {
    this.hit = this.buttonHover(this.x, this.y, this.width, this.height);
    
    if (this.hit && mouseIsPressed) {
       return 1;
    }
    return 0;
  }

  buttonHover(x, y, w, h) {
    let left = x - w/2;
    let right = x + w/2;
    let top = y - h/2;
    let bottom = y + h/2;

    if (mouseX >= left && mouseX <= right
    && mouseY >= top && mouseY <= bottom) {
      return true;
    }

    return false;
  }
}
