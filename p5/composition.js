var winSize, left, right, up, down;
	
function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	// place your drawing code here
	
	noCursor();
	background(200);
	smooth();
	fill("#afaff1");
	ellipse(width/2,height/2,300,300);
	rect(width/2,0,100,100);
    triangle(50,20,100,150,40,130);
	strokeWeight(2);
	stroke(35,164,200);
	line(0,mouseY,width,mouseY);
	line(mouseX,0,mouseX,height);
	strokeWeight(10);
    //window();
    winSize = 10;
	left = mouseX-winSize;
	right = mouseX+winSize;
	up = mouseY-winSize;
	down = mouseY+winSize;
	
	fill(255);
	noStroke();
	rect(0,0,left,height);
	rect(right,0,width-right,height);
	rect(left,0,right-left,up);
	rect(left,down,right-left,height-down);
}

function window(){
	
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

