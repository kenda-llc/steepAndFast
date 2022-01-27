function setup() {

  createCanvas(600, 700);
  background(29, 69, 145);
  stroke(20, 33, 61);
  strokeWeight(2);

  const coneX = width-100;
  const coneY = height * 0.5;
  const coneSize = width * 0.2;
  const coneRotation = 10;
  
   const cone1X = width-100;
  const cone1Y = height * 0.5;
  const cone1Size = width * 0.2;
  const cone1Rotation = 10;

  rotate(radians(coneRotation));

  // Draw inverted background
  push();
  translate(0, coneY);
  fill(44, 117, 255);
  rect(0, 0, width*1.5, height);
  pop();
  
  push();
  fill(255, 255, 63);
  translate(coneX, coneY-25);
  triangle(-(coneSize/2), 0, coneSize/2, 0, 0, -(coneSize*2));
  pop();

    push();
  fill(255, 76, 76);
  translate(coneX*0.5, coneY+125);
  triangle(-(coneSize/2), 0, coneSize/2, 0, 0, -(coneSize*2));
  pop();
 
  noLoop();
  
        let from = color(255, 255, 0);
let to = color(253, 21, 19);
colorMode(RGB); // Try changing to HSB.
  let interK = lerpColor(from, to, 0.33);
let interL = lerpColor(from, to, 0.66);
fill(from);
rect(200, 50, 50, 60);
fill(interK);
rect(275, 50, 50, 60);
fill(interL);
rect(350, 50, 50, 60);
fill(to);
rect(425, 50, 50, 60);
  
        let from0 = color(254, 218, 2);
let to0 = color(208, 0, 0);
colorMode(RGB); // Try changing to HSB.
  let interI = lerpColor(from0, to0, 0.33);
let interJ = lerpColor(from0, to0, 0.66);
fill(from0);
rect(75, 125, 150, 60);
fill(interI);
rect(250, 125, 150, 60);
fill(interJ);
rect(325, 125, 150, 60);
fill(to0);
rect(400, 125, 150, 60);
  
   colorMode(RGB);
let from1 = color(255, 186, 8);
let to1 = color(157, 2, 8);
colorMode(RGB); // Try changing to HSB.
let interA = lerpColor(from1, to1, 0.33);
let interB = lerpColor(from1, to1, 0.66);
fill(from1);
rect(100, 200, 175, 60);
fill(interA);
rect(250, 200, 175, 60);
fill(interB);
rect(325, 200, 175, 60);
fill(to1);
rect(400, 200, 175, 60); 
  
        let from2 = color(250, 163, 7);
let to2 = color(106, 4, 15);
colorMode(RGB); // Try changing to HSB.
  let interG = lerpColor(from2, to2, 0.33);
let interH = lerpColor(from2, to2, 0.66);
fill(from2);
rect(125, 275, 200, 60);
fill(interG);
rect(250, 275, 200, 60);
fill(interH);
rect(350, 275, 200, 60);
fill(to2);
rect(400, 275, 200, 60);
  
  let from3 = color(244, 140, 6);
let to3 = color(55, 6, 23);
colorMode(RGB); // Try changing to HSB.
  let interC = lerpColor(from3, to3, 0.33);
let interD = lerpColor(from3, to3, 0.66);
fill(from3);
rect(150, 350, 225, 60);
fill(interC);
rect(250, 350, 225, 60);
fill(interD);
rect(350, 350, 225, 60);
fill(to3);
rect(400, 350, 225, 60); 
  
    let from4 = color(232, 93, 4);
let to4 = color(3, 7, 30);
colorMode(RGB); // Try changing to HSB.
  let interE = lerpColor(from4, to4, 0.33);
let interF = lerpColor(from4, to4, 0.66);
fill(from4);
rect(175, 425, 250, 60);
fill(interE);
rect(250, 425, 250, 60);
fill(interF);
rect(375, 425, 250, 60);
fill(to4);
rect(425, 425, 250, 60);
}