function setup() {
createCanvas(800,600);
}

function draw() {
  
  background(255);
  translate(mouseX, mouseY);
  ellipseMode(CENTER);
  

  //몸통
  fill(100);
  stroke(0);
  strokeWeight(4);
  ellipse(0,120,200,220);
  
  //귀
  fill(100);
  stroke(0);
  strokeWeight(5);
  triangle(-100,-110,-40,-80,-90,-40);
  
  fill(100);
  stroke(0);
  strokeWeight(5);
  triangle(100,-110,40,-80,90,-40);
  
  //꼬리
  fill(100);
  stroke(0);
  strokeWeight(4);
  rect(65,220,150,30,0,20,20,0);
  
  //배털
  fill(255);
  noStroke();
  triangle(-70,60,70,60,0,160);
  
  //뒷발
  fill(100);
  stroke(3);
  strokeWeight(4);
  rect(-70,210,65,40,60,10,10,10);
  
  fill(100);
  stroke(3);
  strokeWeight(4);
  rect(5,210,65,40,10,60,10,10);
  
  //앞다리
  fill(100);
  stroke(3);
  strokeWeight(4);
  rect(-35,85,30,165,0,0,30,30);
  
  fill(100);
  stroke(3);
  strokeWeight(4);
  rect(5,85,30,165,0,0,30,30);
  
  //머리
  fill(100);
  stroke(0);
  strokeWeight(5);
  ellipse(0,0,200,180);
  
  //눈
  fill(240,240,170);
  noStroke();
  ellipse(-60,0,40,60);
  
  fill(240,240,170);
  noStroke();
  ellipse(60,0,40,60);
  
  //동공
  fill(0);
  ellipse(-60,0,10,50);
  
  fill(0);
  ellipse(60,0,10,50);
  
  //코
  fill(260,150,200);
  stroke(250,100,100);
  strokeWeight(2);
  triangle(0,40,15,20,-15,20);
  
  //발가락
  stroke(0);
  line(-60,230,-60,250);
  line(-50,230,-50,250);
  
  stroke(0);
  line(60,230,60,250);
  line(50,230,50,250);

}