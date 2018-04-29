function preload() {
  console.log("Hello, This is the preload() function!");
}

function setup() {
  console.log("Hello, This is the setup() function!");
  canvas = createCanvas(1175, 550);
  setTitle("Hash tables");
  canvas.position(100, 80);
}

function draw() {
  background(255);
  console.log("Hello, This is the draw() function!");
  noLoop();

}