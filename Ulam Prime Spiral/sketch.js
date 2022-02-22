// The Prime Spiral (Ulam Spiral)


let x,y;
let step=1;
let stepSize=5;
let numSteps = 1;
let state = 0 ;
let turnCounter=0;
let px;
let py;
let totalSteps;

// Function to test if number is prime

function isPrime(value){
  if(value == 1) return false; 
  let primey = true;
  for(let i=2; i< value/2;i++){
  if(value % i == 0){
  primey = false;
    break;
  }
}
return primey;
}
function setup() {
createCanvas(500, 500);
  
  const cols= width/ stepSize;
  const rows = height / stepSize;
  totalSteps= cols * rows;
  
 x=width/2;
 y=height/2; 
   background(0);
  px=x;
  py=y;
}
function draw() {
  
 
//   textSize(stepSize);
//   textAlign(CENTER,CENTER);
//   fill(255);
//   text(step,x,y);
 fill(255);

  stroke(255);
  
  //rectMode(CENTER);
 //square(x,y,stepSize);
  
  // If prime draw circle
 if(isPrime(step)){
  circle(x,y,stepSize*0.5);
 }
  
  // Connect current to previous with a line
 // line(x,y,px,py);
  px = x;
  py = y;
 
  // Move according to state
  
  switch (state) {
    case 0: 
      x+= stepSize;
      break;
      case 1:
      y-= stepSize;
      break;
      case 2: 
      x-= stepSize;
      break;
      case 3:
      y += stepSize;
      break;
      
  }
  
  // Change state
  
  if(step % numSteps == 0) {
    state = (state +1) % 4;
    turnCounter++;
    if(turnCounter % 2 == 0){
      numSteps++;
    }
  }
  step++;
  
  if(step > totalSteps){
    noLoop();
  }
 // frameRate(1);
  
}