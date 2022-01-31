function drawNameWithLines ()
{
  // insert your code here to draw the letters of your name 
  // using only lines()
  //Printing J
  line(200,45,250,45);
  line(225, 45, 225, 95);
  line(225, 95, 200, 95);
  line(200, 95, 200, 75);
  //Printing D
  line(265, 45, 265, 95);
  line(265, 45, 285, 45);
  line(265, 95, 285, 95);
  line(285, 45, 300, 70);
  line(285, 95, 300, 70);
  }

function drawNameWithTriangles ()
{
  // insert your code here to draw the letters of your name 
  // using only ltriangles()
  // triangle (34, 45, 100, 100, 12, 255);
  triangle(200, 105, 250, 105, 240, 115);
  triangle(250, 105, 240, 115, 250, 155);
  triangle(250, 157, 200, 155, 248, 145);
  triangle(200, 155, 210, 135, 210, 155);

  triangle(265,105,265,155,300,130);
  

}

// -----------------------------------------------------------
//
//  Do not edit below this lne
//
// -----------------------------------------------------------

let doLine;
let doTri;
let lineColor;
let fillColor;
let backgroundColor;

function setup() {
  createCanvas(500, 500);
  backgroundColor = color (150, 150, 150);
  background(backgroundColor);
  doLine = false;
  doTri = false;
  lineColor = color (0, 0, 0);
  fillColor = color (255, 0, 0);
}

function draw ()
{
  if (doLine) stroke(lineColor); else stroke (backgroundColor);
  drawNameWithLines();
  
  if (doTri) {
     fill(fillColor);
     stroke(fillColor);
  }
  else {
    fill(backgroundColor);
    stroke(backgroundColor);
  }
  drawNameWithTriangles();
}

function keyPressed()
{
  if (key == 'l') doLine = !doLine;
  if (key == 't') doTri = !doTri;
}
