//var verschiebung = 

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
	// place your drawing code here
	background(200,10);
	smooth();
	ellipse(width/2,height/2,300,300)
	strokeWeight(2);
	stroke(35,164,200);
	line(0,mouseY,width,mouseY);
	line(mouseX,0,mouseX,height);
}

