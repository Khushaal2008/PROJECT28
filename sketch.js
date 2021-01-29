
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,15);
	mango2=new mango(1010,200,30);
	mango3=new mango(1200,330,20);
	mango4=new mango(1000,50,30);
	mango5=new mango(890,150,25);
	mango6=new mango(870,250,27);
	mango7=new mango(1100,300,30);
	mango8=new mango(1200,200,15);
	mango9=new mango(1000,300,30);
	mango10=new mango(1100,200,30);

	treeObj=new tree(1050,600);
	groundObject=new ground(width/2,600,width,20);

stone = new Rock(235,420,30)
 rope = new Rope(stone.body,{x:250,y:450})
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,370,200,300);


  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  stone.display();
  rope.display();
  groundObject.display();

  detectCollision(stone,mango1)
  detectCollision(stone,mango2)
  detectCollision(stone,mango3)
  detectCollision(stone,mango4)
  detectCollision(stone,mango5)
  detectCollision(stone,mango6)
  detectCollision(stone,mango7)
  detectCollision(stone,mango8)
  detectCollision(stone,mango9)
  detectCollision(stone,mango10)
}

function mouseDragged(){
Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})	
}

function mouseReleased() {
	rope.fly();
}

function keyPressed() {
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
		rope.attach(stone.body)
	}
		

}

function detectCollision(lstone,lmango) {
	mango1BodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

    var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mango1BodyPosition.x, mango1BodyPosition.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false)
	}
	
	
}