
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,ground,r1,r2,r3;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 500);
	engine = Engine.create();

	

	
  world = engine.world;
  rs1=createSprite(1100,460,80,10);
	rs1.shapeColor=color(255,0,255);

	rs2=createSprite(1055,435,10,60);
	rs2.shapeColor=color(255,0,255);

	rs3=createSprite(1145,435,10,60);
	rs3.shapeColor=color(255,0,255);
	paper= new Paper(85,450);
  ground=new Ground(800, 480, 1600, 10 );
  
	r1=Bodies.rectangle(1100,460,80,10,{isStatic:true});
	World.add(world,r1);

	r2=Bodies.rectangle(1055,435,10,60,{isStatic:true});
	World.add(world,r2);

	r3=Bodies.rectangle(1145,435,10,60,{isStatic:true});
	World.add(world,r3);

  Engine.run(engine);
  
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  paper.display();
  ground.display();
  drawSprites();
 
}

function keyPressed(){
    if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
}
}
