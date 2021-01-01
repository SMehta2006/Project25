
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	paper = new Paper(100,600,70);
	//box1 = new Box(700,575,20,220);
	box2 = new Box(800,575,200,200);
	//box3 = new Box(900,575,20,220);
	ground = new Ground();
	Engine.run(engine);
  
}


function draw() {
  background(200);
  Engine.update(engine);
  
  paper.display();
 // box1.display();
  box2.display();
  //box3.display();
  ground.display();

  keyPressed();

  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper	.body.position,{x:12,y:-12});
	}
	
}

