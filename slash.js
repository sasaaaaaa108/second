class Slash {
  constructor(x, y, startingArc) {
    this.x = x;
    this.y = y;
    this.startingArc = startingArc + 40;
    this.endingArc = this.startingArc + 180;
    this.angle = 0;
    this.amt = 0;
  }

  display() {
    strokeWeight(1);
    stroke("#FFFFFF");
      fill("#00649A")
  
    arc(
      this.x,
      this.y,
      size - offset,
      size - offset,
      this.startingArc + this.angle,
      this.endingArc + this.angle,
      PIE
    );

    arc(
      this.x,
      this.y,
      size - offset,
      size - offset,
      this.endingArc + this.angle,
      this.startingArc + this.angle,
      PIE
    );
    
  }
  move() {
    if (this.amt > 1) {
      this.amt = 0;
    } else {
      this.amt += 0.009;
    }

    this.angle = easeInOutQuad(this.amt) * 360;
  }
}
