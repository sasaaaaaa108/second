let canvas;
let canvasWidth = 900;
let canvasHeight = 900;

let spaceGroteskFont;
let bgColor;

let colsInput = document.getElementById('input-cols');
let sizeInput = document.getElementById('input-size');

let checkbox;

let size = 20;

function preload() {
  spaceGroteskFont = loadFont("SpaceGrotesk-Regular.ttf");
}

let p;
let cols;
let colsgrid = 50;
let rowsgrid = 50;
let pacmans = [];
let offset = 0;
let offsetSpacing = 20;

function setup() {
  checkbox = createCheckbox('Option 1', false);
  checkbox.parent('checkbox-container');
  checkbox.changed(changeHandler);
  checkbox.style('color', 'white');
  

  checkbox2 = createCheckbox('Option 2', false); // Creating the second checkbox
  checkbox2.parent('checkbox-container-2');
  checkbox2.changed(changeHandler2);
    checkbox2.style('color', 'white');
  
  canvasWidth = parseInt(document.getElementById("input-width").value);
  canvasHeight = parseInt(document.getElementById("input-height").value);
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent("canvas-container");
 

  bgColor = color("#00649A"); 
  angleMode(DEGREES);

  p = new Pacman(width / 2, height / 2, 0);

  cols = width / colsgrid;
  rows = height / rowsgrid;

  makePacmans();
}

function mouseClicked() {
  makePacmans();
}

function makePacmans() {
  for (let i = 0; i < colsgrid; i++) {
    pacmans[i] = [];
    for (let j = 0; j < rowsgrid; j++) {
      let startingAngle;
      if (j % 2 == 0) {
        if (i % 2 == 0) {
          startingAngle = 0;
        } else {
          startingAngle = 90;
        }
      } else {
        if (i % 2 == 0) {
          startingAngle = 270;
        } else {
          startingAngle = 90;
        }
      }

      if ((i + j) % 2 === 0) {
        pacmans[i][j] = new Slash(
          size / 2 + i * size + offset,
          size / 2 + j * size + offset,
          startingAngle
        );
      } else {
        pacmans[i][j] = new Pacman(
          size / 2 + i * size + offset,
          size / 2 + j * size + offset,
          startingAngle
        );
      }
    }
  }
}

function draw() {
  background(bgColor);
  size = document.getElementById("input-size").value
  
  var colsgrid = parseInt(document.getElementById("cols").value);
  var rowsgrid = parseInt(document.getElementById("rows").value);

  for (let i = 0; i < colsgrid; i++) {
    for (let j = 0; j < rowsgrid; j++) {
      pacmans[i][j].display();
      pacmans[i][j].move();
    }
  }
}

function changeCanvasSize() {
  canvasWidth = parseInt(document.getElementById("input-width").value);
  canvasHeight = parseInt(document.getElementById("input-height").value);
  resizeCanvas(canvasWidth, canvasHeight);
  clearCanvas();
}

document.getElementById("input-width").addEventListener("change", function () {
  changeCanvasSize();
});

document.getElementById("input-height").addEventListener("change", function () {
  changeCanvasSize();
});

function changeColor() {
  let selectedColor = document.getElementById("colorPicker").value;
  bgColor = color(selectedColor);
}

document.getElementById("colorPicker").addEventListener("input", changeColor);

function changeHandler() {
  if (this.checked()) {
    for (let i = 0; i < colsgrid; i++) {
      pacmans[i] = [];
      for (let j = 0; j < rowsgrid; j++) {
        let startingAngle;
        if (j % 2 == 0) {
          if (i % 2 == 0) {
            startingAngle = 90;
          } else {
            startingAngle = 270;
          }
        } else {
          if (i % 2 == 0) {
            startingAngle = 90;
          } else {
            startingAngle = 180;
          }
        }

        pacmans[i][j] = new Slash(
          size / 2 + i * size + offset,
          size / 2 + j * size + offset,
          startingAngle
        );
      }
    }
  } else {
    for (let i = 0; i < colsgrid; i++) {
      for (let j = 0; j < rowsgrid; j++) {
        let startingAngle;
        if (j % 2 == 0) {
          if (i % 2 == 0) {
            startingAngle = 90;
          } else {
            startingAngle = 270;
          }
        } else {
          if (i % 2 == 0) {
            startingAngle = 90;
          } else {
            startingAngle = 180;
          }
        }

        if ((i + j) % 2 === 0) {
          pacmans[i][j] = new Slash(
            size / 2 + i * size + offset,
            size / 2 + j * size + offset,
            startingAngle
          );
        } else {
          pacmans[i][j] = new Pacman(
            size / 2 + i * size + offset,
            size / 2 + j * size + offset,
            startingAngle
          );
        }
      }
    }
  }
}
function changeHandler2() {
  if (this.checked()) {
    for (let i = 0; i < colsgrid; i++) {
      for (let j = 0; j < rowsgrid; j++) {
        let startingAngle;
        if (j % 2 == 0) {
          if (i % 2 == 0) {
            startingAngle = 90;
          } else {
            startingAngle = 270;
          }
        } else {
          if (i % 2 == 0) {
            startingAngle = 90;
          } else {
            startingAngle = 180;
          }
        }

        if ((i + j) % 2 === 0) {
          pacmans[i][j] = new Pacman( // Create Pacman when checkbox2 is checked
            size / 2 + i * size + offset,
            size / 2 + j * size + offset,
            startingAngle
          );
        } else {
          pacmans[i][j] = new Pacman(
            size / 2 + i * size + offset,
            size / 2 + j * size + offset,
            startingAngle
          );
        }
      }
    }
  } else {
    // Revert to default behavior when checkbox2 is unchecked
    for (let i = 0; i < colsgrid; i++) {
      for (let j = 0; j < rowsgrid; j++) {
        let startingAngle;
        if (j % 2 == 0) {
          if (i % 2 == 0) {
            startingAngle = 90;
          } else {
            startingAngle = 270;
          }
        } else {
          if (i % 2 == 0) {
            startingAngle = 90;
          } else {
            startingAngle = 180;
          }
        }

        if ((i + j) % 2 === 0) {
          pacmans[i][j] = new Slash(
            size / 2 + i * size + offset,
            size / 2 + j * size + offset,
            startingAngle
          );
        } else {
          pacmans[i][j] = new Pacman(
            size / 2 + i * size + offset,
            size / 2 + j * size + offset,
            startingAngle
          );
        }
      }
    }
  }
}

 function exportToPNG() {
      saveCanvas('myCanvas', 'png'); // Save canvas as 'myCanvas.png'
    }

