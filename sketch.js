
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject;
var mango1;
var mango2;
var mango3;
var mango4;
var mango5;
var mango6;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1150,250,30);
	mango3=new mango(1040,210,30);
	mango4=new mango(1200,180,30);
	mango5=new mango(999,100,30);
	mango6=new mango(950,190,30);

	treeObj=new tree(1050,580);
  stoneObj=new stone(200,50);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  
  detectCollision(stoneObj,mango1)
  detectCollision(stoneObj,mango2)
  detectCollision(stoneObj,mango3)
  detectCollision(stoneObj,mango4)
  detectCollision(stoneObj,mango5)
  detectCollision(stoneObj,mango6)


  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  stoneObj.display();
  groundObject.display();
}

function detectCollision(stoneObj,mango){
   mangoBodyPosition=lmango.body.position
   stoneBodyPosition=lstone.body.position

   var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y )
   if(distance<=lmango.r+lstone.r){
     Matter.Body.setStatic(lmango.body,false)
   }
}


function keyPressed(){
    if(keyCode===32){
		Matter.Body.setPosition(stoneObj.body,{x:235,y:420});
        launcherObject.attach(stoneObj.body);
    }
}