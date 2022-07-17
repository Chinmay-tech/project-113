function setup() {
  createCanvas(640, 520);
  //canvas.position(110, 250);
  video=createCapture(VIDEO);
}

function draw() {
  fill('red');
  circle(90,90,90);
  fill('green');
  rect(80, 135, 20, 300);
  fill('red');
  circle(90,440,90);
  fill('green');
  rect(133, 435, 300, 20);
  fill('green');
  rect(423, 135, 20, 300);
   fill('red');
  circle(433,440,90); 
  fill('green');
  rect(133,80, 300, 20);
   fill('red');
  circle(433,90,90);
}

function preload(){

}

function takeSnapshot(){    
  save('student_name.png');
}

