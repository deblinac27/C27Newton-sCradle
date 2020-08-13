
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var bobObject;
var roof;
var rope;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Bob(340, 400, 30);
	bobObject2 = new Bob(370, 400, 30);
	bobObject3 = new Bob(400, 400, 30);
	bobObject4 = new Bob(430, 400, 30);
	bobObject5 = new Bob(460, 400, 30);

	roof = new Roof(400, 100, 500, 20);

	rope1 = new Rope(bobObject1.body, roof.body, -60,0);
	rope2 = new Rope(bobObject2.body, roof.body, -30,0);
	rope3 = new Rope(bobObject3.body, roof.body, 0,0);
	rope4 = new Rope(bobObject4.body, roof.body, 30,0);
	rope5 = new Rope(bobObject5.body, roof.body, 60,0);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(227, 227, 227);
  
  if(keyCode === UP_ARROW){
	  Matter.Body.setPosition(bobObject1.body,{x:100, y:100});
  }
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



