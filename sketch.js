
var mass = 20;

function setup() {
  createCanvas(windowWidth, windowHeight); 
  x=width;
  y=random(0,height);
 
}

function draw() {
  background(255);
  var c = 15;
  
  for (var k = 0; k <= width; k += 10) {
    for (var n = 0; n <= height; n += 10) {
      var we = dist(mouseX, mouseY, k, n) * mass / 250;
      if (we > c) {
        we = c; 
      }
      rectMode(CENTER);
      rect(k, n, we, we); 
      stroke(255);
      fill(0);
      
      
      
    } 
   
  }   
  var sn = random(5,300)
  if(frameCount%1<1){
  for(var m=0; m<=sn; m+=30 ){
  var sx= random(0,width);
  var sy= random(0,height);
  var szz=random(5,20);
  ellipse(sx,sy,szz);
  fill(255, 244, 79);
    stroke(255)
  
  }
    }
  
  
}


function mouseClicked(){
  mass -= 5;
}

function keyTyped() {
  if (key === 'a') {
    mass = 20;
  }
}

