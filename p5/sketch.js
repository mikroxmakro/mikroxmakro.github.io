//var verschiebung = 

function setup() {
  createCanvas(windowWidth, windowHeight,WEBGL);
}

function draw() {
	// place your drawing code here
	//noCursor();
	background(200,10);
	/*smooth();
	fill("#afaff1");
	ellipse(width/2,height/2,300,300);
    rect(width/2,0,100,100,10);
    triangle(400,200,100,500,40,30);
	strokeWeight(2);
	stroke(35,164,200);
	quad(0,100,0,450,0,200,400,300);
	line(0,mouseY,width,mouseY);
	line(mouseX,0,mouseX,height);
	strokeWeight(10);
	stroke("red");
	point(mouseX,mouseY);
	new_curve();*/
	rotateX(frameCount * 0.2);
    rotateZ(frameCount * 0.01);
    cylinder(200, 200);
}

function new_curve() {
    translate(200,300);
    stroke(255, 102, 0);
    curve(5, 26, 5, 26, 73, 24, 73, 61);
    stroke(0);
    curve(5, 26, 73, 24, 73, 61, 15, 65);
    stroke(255, 102, 0);
    curve(73, 24, 73, 61, 15, 65, 15, 65);
}

