
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof(width/2, 90, 500, 50);

	bobObject1 = new Bob(250,600,40,40);
	bobObject2 = new Bob(330,600,40,40);
	bobObject3 = new Bob(410,600,40,40);
	bobObject4 = new Bob(490,600,40,40);
	bobObject5 = new Bob(570,600,40,40);

	bobDiameter = 40 *2

	rope1 = new Rope(bobObject1.body, roof.body,-160,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(250);

  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  
  drawSprites();
}



