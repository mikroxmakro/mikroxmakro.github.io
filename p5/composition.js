var winSize, left, right, up, down;
var t_y = height;
var t_x = width*0.8;
var xpos, ypos, r;
var c;
var ellipseX, ellipseY, ellipseSize, rectX, rectY, rectSize;
	
function setup() {
	createCanvas(windowWidth, windowHeight);
	xpos = random(width);
	ypos = random(height);
	c = new Artifact();
	ellipseX = width/2;
	ellipseY = height/2;
	ellipseSize = 300;
	mouseX = width/2;
	mouseY = height/2;
}

function draw() {
	// place your drawing code here
	background(200);
	smooth();
	mycomposition();
	c.display();
	c.movingCircle();
    
	/*strokeWeight(2);
	stroke(35,164,200);
	line(0,mouseY,width,mouseY);
	line(mouseX,0,mouseX,height);*/
    mywindow();
}

function mywindow(){
	noCursor();
	rectMode(CORNER);
	winSize = width/20;
	left = mouseX-winSize;
	right = mouseX+winSize;
	up = mouseY-winSize;
	down = mouseY+winSize;
	
	fill(255);
	stroke(255);
	rect(0,0,left,height);
	rect(right,0,width-right,height);
	rect(left,0,right-left,up);
	rect(left,down,right-left,height-down);
}

function mycomposition() {
    strokeWeight(3);
	stroke("#809aaa");
	fill("#527A7A");
	//randomize(2,1,ellipseX,ellipseY,ellipseSize);
	if(millis()%2==1){
		ellipseX = random(width);
		ellipseY = random(height);
		ellipseSize = random(30,300);
	}
	ellipse(ellipseX,ellipseY,ellipseSize,ellipseSize);
	fill("#af3aa1");
	if(millis()%4==2){
		rectX = random(width);
		rectY = random(height);
		rectSize = random(10,100);
	}
	rect(rectX,rectY,rectSize,rectSize);
	fill("#FFFF9C");
    triangle(50,20,100,150,40,130);
    fill("#82FFFF");
    ellipse(width*0.7,height*0.8,80,80);
    for(var i=1; i<20; i++){
    	point(width*0.3+random(-i,i),height*0.7+random(-i,i));
    }
    fill("#FFFF9C");
    s = "The quick brown fox jumped over the lazy dog.";
	text(s, 10, 10, 70, 80); // Text wraps within text box
    s = "The quick brown fox jumped over the lazy dog.";
	text(s, width*0.4, height*0.6, 90, 90); // Text wraps within text box
	var r = millis()%0.7;
	applyMatrix();
	fill("#00E3E3");
	rectMode(CENTER);
	translate(width*0.8,height*0.6);
	rotate(r);
	rect(0,0,20,20);
	resetMatrix();
	fill("#2DB9FF");
	applyMatrix();
	if(t_y<height) {
		t_y++;
	} else {
		t_y = -30;
		t_x = random(width);
	}
	translate(t_x,t_y);
	triangle(0,0,30,0,15,30);
	console.log(t_y);
	resetMatrix();
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
/*
function randomize(var m, var rest, var objX, var objY, objSize){
	if(millis()%m==rest){
		objX = random(width);
		objY = random(height);
		objSize = random(30,300);
	}
}
*/
function Artifact() {
	var size;
	
	this.display = function(){
		noFill();
		strokeWeight(1);
		stroke(23,25,135);
		size = 30;
	};

	this.movingCircle = function(){
		applyMatrix();
		var t = new Date();
		var m = t.getMilliseconds();
		if(m%3==2){
			r = noise(-TWO_PI,TWO_PI);
			xpos = xpos + random(-1.5,1.5);
			ypos = ypos + random(-1.5,1.5);
		}	
		translate(xpos,ypos);
		rotate(r);
		ellipse(0,0,size,size);
		resetMatrix();
	};
}
