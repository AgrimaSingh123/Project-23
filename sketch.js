const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bg;

function preload()
{
	floor=loadImage("Floor.jpg");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	

	//Create the Bodies Here.
	bg=createSprite(width/2,height/2,width,height);
	bg.addImage(floor);
	bg.scale=1.75;

	b1=new Dustbin(600,height-40,30/100*width,20);
	b2=new Dustbin(710,height-100,20,100);
	b3=new Dustbin(490,b2.y,b2.width,b2.height);

	paper=new Paper(100,640,50);
	ground=new Ground(400,700-10,800,40);

	Engine.run(engine);
}


function draw() {
  background(0);
  Engine.update(engine);
  drawSprites();
  b1.display();
  b2.display();
  b3.display();
  paper.display();
  ground.display();
}