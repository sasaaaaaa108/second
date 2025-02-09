class Pacman {
  constructor(x, y, startingArc) {
    this.x = x;
    this.y = y;
    this.startingArc = startingArc;
    this.endingArc = this.startingArc +270;
    this.angle = 0;
    this.amt = 0;
  }

  display() {
    noStroke();
    fill("#D8BB73")

    arc(
      this.x,
      this.y,
      size - offset,
      size - offset,
      this.startingArc + this.angle,
      this.endingArc + this.angle
    );
  }

  move() {
    if (this.amt > 1) {
      this.amt = 0;
    } else {
      this.amt += 0.009;
    }

    this.angle = easeInOutQuint(this.amt) * 360;
  }
}
