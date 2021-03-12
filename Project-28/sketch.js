const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var boy,tree,stone,sling,ground;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10
var world

function preload(){
boy=loadImage("boy.png");
}

function setup(){
createCanvas(1475,630);
engine = Engine.create();
world = engine.world;

tree = new Tree(1050,615);
stone = new Stone(235,420,30);
sling = new Slingshot(stone.body,{x:240,y:460})
ground = new Ground(width/2,610,width,20);  

mango1 = new Mango(910,220,40);
mango2 = new Mango(970,170,30);
mango3 = new Mango(1000,100,30);
mango4 = new Mango(1075,90,40);
mango5 = new Mango(1045,200,40);
mango6 = new Mango(980,280,30);
mango7 = new Mango(1120,135,30);
mango8 = new Mango(1110,265,30);
mango9 = new Mango(1190,195,40);
mango10 = new Mango(1230,260,30);

Engine.run(engine);
}

function draw(){
background("darkgrey");
textSize(30);
fill("yellow");
textFont("Arial");
text("Press Space to get a Second Chance!!!",50,50);
image(boy,200,380,200,300);
  
tree.display();
stone.display();
ground.display();
sling.display();
mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display()
mango6.display();
mango7.display();
mango8.display();
mango9.display();
mango10.display();

detectCollision(stone,mango1);
detectCollision(stone,mango2);
detectCollision(stone,mango3);
detectCollision(stone,mango4);
detectCollision(stone,mango5);
detectCollision(stone,mango6);
detectCollision(stone,mango7);
detectCollision(stone,mango8);
detectCollision(stone,mango9);
detectCollision(stone,mango10);
}

function mouseDragged(){
Matter.Body.setPosition(stone.body,{x: mouseX,y: mouseY}) 
}

function mouseReleased(){
sling.fly();
}

function keyPressed(){
if(keyCode === 32) {
Matter.Body.setPosition(stone.body,{x: 235,y: 420}) 
sling.attach(stone.body);
}
}

function detectCollision(lstone,lmango){
mangoPosition = lmango.body.position
stonePosition = lstone.body.position

var distance = dist(stonePosition.x,stonePosition.y,mangoPosition.x,mangoPosition.y)
if(distance <= lmango.r + lstone.r){
Matter.Body.setStatic(lmango.body,false);
} 
}