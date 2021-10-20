let snowflakes = [];
var canvas;

function setup() {
  createCanvas(windowWidth, windowHeight);
 fill(240);
  noStroke();
   createA (href='graduateduck'
,'Next');
}

function draw() {
  background('skyblue');
  let t = frameCount / 60;

  for (let i = 0; i < random(5); i++) {
    snowflakes.push(new snowflake());
  }


  for (let flake of snowflakes) {
    flake.update(t);
    flake.display();
  }
}

function snowflake() {

  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);

  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    let w = 0.6;
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // size of snowflakes
    this.posY += pow(this.size, 0.5);

    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
}
