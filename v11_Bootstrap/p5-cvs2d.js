var cvs2d;

function setup() {
	cvs2d = createCanvas(windowWidth, 100, P2D);
	cvs2d.position(0,123);
	//cvs3d.style.position = "relative";
}

function draw() {
	background('rgba(0,0,0,0)');
	rect(mouseX,50,20,20);
}
