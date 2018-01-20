var cvs3d, cvs2d;

function setup() {
	cvs3d = createCanvas(windowWidth, 100, WEBGL);
	cvs3d.position(0,123);
	cvs3d = createCanvas(windowWidth, 100, P2D);
	cvs3d.position(0,123);
	//cvs3d.style.position = "relative";
}

function draw() {
	background('rgba(0,0,0,0)');
	rotateX(frameCount * 0.01);
	rotateZ(frameCount * 0.01);
	cylinder(mouseX, mouseY);
}

function draw() {
	rect(mouseX,50,20,20);
}
