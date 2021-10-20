function setup() {
  createCanvas(windowWidth, windowHeight)
  background(0,200,255)	
}

function draw() {
		
	  fill(88,175,15);
		strokeWeight(0);
		ellipse(650,765,1475,580)
  
	//body
		strokeWeight(1)
    fill(255,234,0);
		rect(560,263,56,200);
		triangle(910,270,780,360,910,360);
		rect(560,358,350,210); 
		rect(485,160,150,145);
  //eyes
		fill(255)
		strokeWeight(1);
		ellipse(495,227,71,62);
		ellipse(625,227,71,62);
		
  //nose
		fill(255,109,0);
		strokeWeight(1);
		quad(510,274,615,274,685,340,435,340);
		rect(760,568,27,90);
		rect(735,568,25,65);
		quad(703,635,760,635,760,658,670,658);
		quad(725,658,787,658,787,680,700,680); 
		
  //eyes
		fill(0)
		ellipse(495,227,32,28);
		ellipse(625,227,32,28);
		rect(537,286,15,15);
		rect(570,286,15,15);
	
		fill(0);
		strokeWeight(1.5);
		line(618,440,618,527);
		line(618,527,757,527);
		line(757,440,757,527);
		
  //cap
		fill('red');
		strokeWeight(0)
		ellipse(560,150,172,77);
		rect(474,107,171,50);
		strokeWeight(2)
		quad(564,53,673,100,564,139,445,100); 
		line(475,109,475,156);
		line(645,109,645,156);
		line(568,90,660,110);
		line(662,111,662,160);
		line(661,160,655,170);
		line(662,160,661,174);
		line(663,160,668,170);
		strokeWeight(3.2);
		ellipse(564,89,21,13); 
}