let point1,counter=1;

function setup() {
  createCanvas(600, 500);
  point1=createVector(floor(random(width)),floor(random(height)));
  background(255);
}

function draw() {
  for (let i=0;i<50;i++) {
  stroke(255);
  text(counter,10,10);
  let r=floor(random(3));
  switch(r) {
    case 0:
      point1.x=(point1.x+width/2)/2;
      point1.y=point1.y/2;
      break;
    case 1:
      point1.x=point1.x/2;
      point1.y=(point1.y+height)/2;
      break;
    case 2:
      point1.x=(point1.x+width)/2;
      point1.y=(point1.y+height)/2;
      break;  
  }
  if(point1.y<height/2) {
    stroke(160, 32, 240);
  } else if (point1.x<width/2) {
    if (point1.y>height/2) stroke(255,0,0);
  } else if (point1.x>width/2) {
    if (point1.y>height/2) stroke(0,255,0);
  }
  strokeWeight(4);
  point(point1.x,point1.y);
  counter++;
  }
}