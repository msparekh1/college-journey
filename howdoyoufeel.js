let x = 15;

function setup() {
  createCanvas(800, 750);
  frameRate(100);
  background(255);
  colorPicker = createColorPicker("black");
  colorPicker.position(370, height + 30);
  createA (href='https://preview.p5js.org/msparekh/present/gZ490zKcB'
,'Next');
}

function draw() {
  if (mouseIsPressed) {
    stroke(colorPicker.color());
    line(pmouseX, pmouseY, mouseX, mouseY);
    strokeWeight(x);
  }
  
  if (keyIsPressed){
    ellipseColor = colorPicker.color();
    fill(ellipseColor);
    noStroke();
    ellipse(mouseX, mouseY, x, x);
 }
}

function mouseWheel(changeSize) {
  x = x - changeSize.deltaY;
}