let x = 0;
let y = 0;
let spacing = 30;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  points = [1,400]
   colors = [ 
   /* 
     "#6F9CEB", "#98B9F2", "#918EF4", 
    "#E4F0D0", "#A5F8D3", "#802392",
    "#EDF0DA", "#FFCDBC", "#F5853F",
    "#FF6542", "#E0CBA8", "#C57B57",
    "#FB6376", "#F2F3AE", "#FFCF00"
  */
   'red','blue','yellow','blueviolet','white','orange'  
   ];
  weight=[1,2,3,4,5,6,7,8,9,10];
}

function draw() {
  //stroke(255);
  stroke(random(colors));
  strokeWeight(random(weight));
  if (random(1) < 0.4) {
    circle(x,y + spacing,10);
    line(x, y, x + spacing, y + spacing);
   // curve(y, x, x, y, 73, 24, 73, 61);
  
    point(x,y+ spacing);
  } else {
    
  //  circle(y,x + spacing,10);
    point(y,x+ spacing);
    
    line(x, y + spacing, x + spacing, y);
  // curve(x, y + spacing, x, y, 73, 24, 73, 61);
  }
  x = x + spacing;
  if (x > width) {
    x = 0;
    y = y + spacing;
  }
  
  
}
function mousePressed(){
 x=0;
  y=0;
  background(0);
}