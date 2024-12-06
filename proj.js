let x = [];
let y = [];
let xSpeed = [];
let ySpeed = [];
let size = [];
let r = [];
let g = [];
let b = [];

let slider;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Create the slider to dynamically control ball count
  slider = createSlider(0, 1000, 50); // Starting with 50 balls
  slider.position(10, 10);
  slider.size(100);

  initializeBalls(slider.value()); // Initialize with starting slider value
}

function draw() {
  background(0, 50);

  let maxBalls = slider.value();

  // Update the number of balls if the slider value changes
  if (maxBalls != x.length) {
    initializeBalls(maxBalls); // Reinitialize balls to match the slider value
  }

  // Loop through the number of balls set by the slider
  for (let i = 0; i < maxBalls; i++) {
    // Update position
    x[i] += xSpeed[i];
    y[i] += ySpeed[i];

    // Bounce the balls off the edges
    if (x[i] < 0 || x[i] > width) {
      xSpeed[i] *= -1;
    }
    if (y[i] < 0 || y[i] > height) {
      ySpeed[i] *= -1;
    }

    // Draw the balls
    fill(r[i], g[i], b[i]);
    noStroke();
    ellipse(x[i], y[i], size[i], size[i]);
  }
}

// Function to initialize balls
function initializeBalls(count) {
  x = [];
  y = [];
  xSpeed = [];
  ySpeed = [];
  size = [];
  r = [];
  g = [];
  b = [];

  for (let i = 0; i < count; i++) {
    x[i] = width / 2;
    y[i] = height / 2;
    xSpeed[i] = random(-5, 5);
    ySpeed[i] = random(-5, 5);
    size[i] = random(10, 50);
    r[i] = random(255);
    g[i] = random(255);
    b[i] = random(255);
  }
}
