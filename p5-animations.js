var cvs3d;
var a,b,maxValue,minValue;

function setup() {
	cvs3d = createCanvas(windowWidth-18, 100, WEBGL);
	cvs3d.position(0,54);
	cvs3d.id("header-animation");
	a = 200;
	b = 200;
	maxValue = 600;
	minValue = 200;
}

function draw() {
	background('rgba(0,0,0,0)');
	a = map(mouseX,0,windowWidth/2,maxValue,minValue);
	b = map(mouseY,0,windowHeight/2,maxValue,minValue);
	a = map(mouseX,windowWidth/2,windowWidth,minValue,maxValue);
	b = map(mouseY,windowHeight/2,windowHeight,minValue,maxValue);
	rotateX(frameCount * 0.005);
	rotateZ(frameCount * 0.005);
	translate(300,frameCount * 0.05,0);
	box(a, b);
}

function windowResized() {
  resizeCanvas(windowWidth-18, 100);
}

