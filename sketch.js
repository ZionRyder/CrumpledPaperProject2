
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground, dustbin1;//, dustbin2, dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100,500,60);
	
	ground = new Ground(600, 700, 1200, 50);

	dustbin1 = new Dustbin(900, 577, 200, 200);
	//dustbin2 = new Dustbin(1000, 577, 20, 200);
	//dustbin3 = new Dustbin(800, 577, 20, 200);

  
}


function draw() {
	
Engine.update(engine);
  rectMode(CENTER);
  background(200,200,255);
paper.display();
ground.display();
dustbin1.display();
//dustbin2.display();
//dustbin3.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW)

	Body.applyForce(paper.body, paper.body.position, {x: 85, y:-85})
}

