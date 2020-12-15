
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var wall,line1,ball1;
var line2,ball2;
var line3,ball3;
var line4,ball4;
var line5,ball5;
var line6,ball6;
var line7,ball7;
var line8,ball8;


function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   wall = new Ground(350,50,300,20);
   ball1 = new Ball(320,100,40);
   line1 = new Chain(ball1.body,wall.body,-140,10);

   ball2 = new Ball(370,100,40);
   line2 = new Chain(ball2.body,wall.body,-100,10);

   ball3 = new Ball(400,100,40);
   line3 = new Chain(ball3.body,wall.body,-60,10);

   ball4 = new Ball(550,150,40);
   line4 = new Chain(ball4.body,wall.body,-20,10);

   ball5 = new Ball(570,100,40);
   line5 = new Chain(ball5.body,wall.body,20,10);
   
   ball6 = new Ball(620,100,40);
   line6 = new Chain(ball6.body,wall.body,60,10);

   ball7 = new Ball(670,100,40);
   line7 = new Chain(ball7.body,wall.body,100,10);
  
   ball8 = new Ball(720,100,40);
   line8 = new Chain(ball8.body,wall.body,140,10);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  ball1.display();
  line1.display();
  ball2.display();
  line2.display();
  ball3.display();
  line3.display();
  ball4.display();
  line4.display();
  ball5.display();
  line5.display();
  ball6.display();
  line6.display();
  ball7.display();
  line7.display();
  ball8.display();
  line8.display();
  wall.display();
  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
}



