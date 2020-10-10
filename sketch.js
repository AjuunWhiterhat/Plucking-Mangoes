
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree, launcher,stone,ground;
var mango1,mango2,mango3,mango4,mango5,mago6,mango7,mango8;
var world,engine,constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2,height-10,width,10);
	
	tree = new Final(1200,height-210,320,420);
	
	launcher = new Launcher(400,height-70,150,220);
	
	stone = new Stone(355,height-100,50,50);
	
	chain = new Sling(stone.body,{x:360,y:height-115});

	mango1 = new Mango(1180,height-350,50,50);
	mango2 = new Mango(1250,height-370,60,60);
	mango3 = new Mango(1190,height-300,50,50);
	mango4 = new Mango(1180,height-250,50,50);
	mango5 = new Mango(1270,height-300,60,60)
	mango6 = new Mango(1100,height-300,60,60);
	mango7 = new Mango(1100,height-245,60,60);
	mango8 = new Mango(1310,height-270,55,55);

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230, 230, 230);
  push();
  fill("red");
  text("Press space to get a second Chance to play",100,100);
  pop();

  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  detectcollision(stone,mango4);
  detectcollision(stone,mango5);
  detectcollision(stone,mango6);
  detectcollision(stone,mango7);
  detectcollision(stone,mango8);
  
  ground.display();
  tree.display();
  launcher.display();
  chain.display();
  stone.display();
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  
  
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    chain.fly();
}

function keyPressed(){
	if(keyCode ===32){
		Matter.Body.setPosition(stone.body,{x:360,y:height-115});
		chain = new Sling(stone.body,{x:360,y:height-115});
	}
}

function detectcollision(stone,mango){
	mangoBodyPosition=mango.body.position
	stoneBodyPosition=stone.body.position

	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=mango.height+stone.height)
	{
		Matter.Body.setStatic(mango.body,false);
	}
}



