var winSize, left, right, up, down;
var t_y = height;
var t_x = width*0.8;
	
function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	// place your drawing code here
	background(200);
	smooth();
	mycomposition();
    
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
	ellipse(width/2,height/2,300,300);
	fill("#af3aa1");
	rect(width/2,0,100,100);
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

