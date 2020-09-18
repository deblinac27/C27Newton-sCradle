
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var bobObject;
var roof;
var rope;
var sbpx, sbpy;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(width/2, height/4, width/3, 20);
	bobd = 40;
	sbpx = width/2;
	sbpy = height/4 + 500;

	//Create the Bodies Here.
	bobObject1 = new Bob(sbpx - bobd*2, sbpy, bobd);
	bobObject2 = new Bob(sbpx - bobd, sbpy, bobd);
	bobObject3 = new Bob(sbpx, sbpy, bobd);
	bobObject4 = new Bob(sbpx+bobd, sbpy, bobd);
	bobObject5 = new Bob(sbpx+bobd*2, sbpy, bobd);

	rope1 = new Rope(bobObject1.body, roof.body, -bobd*2,0);
	rope2 = new Rope(bobObject2.body, roof.body, -bobd*1,0);
	rope3 = new Rope(bobObject3.body, roof.body, 0,0);
	rope4 = new Rope(bobObject4.body, roof.body, bobd*1,0);
	rope5 = new Rope(bobObject5.body, roof.body, bobd*2,0);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(227, 227, 227);
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50, y:-45});
	}
}
 /*function drawLine(constraint){
	bobBodyPosition = constraint.bodyA.position;
	roofBodyPosition = constraint.bodyB.position;
	roofBodyOffset = contraint.pointB;
	roofBodyx = roofBodyPosition.x + roofBodyOffset.x;
	roofBodyy = roofBodyPosition.y + roofBodyOffset.y;
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyx, roofBodyy)
 }*/


