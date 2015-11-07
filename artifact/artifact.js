var xpos, ypos, r;

function setup() {
	createCanvas(windowWidth, windowHeight);
	xpos = random(width);
	ypos = random(height);
}

function draw() {
	// place your drawing code here
	background(255);
	smooth();
	var t = new Date();
	var m = t.getMilliseconds();
	if(m%13==2){
		r = noise(-TWO_PI,TWO_PI);
		xpos = xpos + random(-1.5,1.5);
		ypos = ypos + random(-1.5,1.5);
	}	
	translate(xpos,ypos);
	rotate(r);
	ellipse(0,0,20,20);
	console.log(m%13);	
}

