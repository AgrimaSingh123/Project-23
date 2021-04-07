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
	createCanvas(1000, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bg=createSprite(width/2,height/2,width,height);
	bg.addImage(floor);
	bg.scale=1.75;

	b1=new Dustbin(width-165,height-40,25/100*width,20);
	b2=Bodies.rectangle(width-50,height-100,20,100,{isStatic:true});
	World.add(world,b2);
	b3=new Dustbin(width-280,height-100,20,100);

	ground=Bodies.rectangle(width/2,height-20,2000,20,{isStatic:true});
	World.add(world,ground)

    paper=Bodies.circle(50,500,50,{isStatic:false,restitution:0.3,friction:0.5,density:1.2});
    World.add(world,paper);

	Engine.run(engine);
}


function draw() {
  background(0);
  paper.velocityY=paper.velocityY+8;
  Engine.update(engine);
  rectMode(CENTER);
  drawSprites();
  b1.display();
  b3.display();
  fill("white");
  paper.x= paper.position.x ;
  paper.y= paper.position.y;
  //paper
  ellipse(paper.position.x,paper.position.y,40);
  fill("brown");
  //bounce target of ball
  rect(b2.position.x,b2.position.y,20,100);
  fill("grey");
  rect(ground.position.x,ground.position.y,width,20);
  if(keyCode===UP_ARROW){
	Matter.Body.applyForce(paper,paper.position,{x:10,y:-20});
} 

}