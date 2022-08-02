const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;


var box1, ground
var ball;
var box3,box4
var enigine,world;



function setup() 
{
  createCanvas(700,700);

  engine=Engine.create();
  world=engine.world;

  box1= new Box(550,200,100,100,"blue");
  box3= new Box(430,200,100,100,"purple");
 ball= new Ball(100,250,100,"red");
 box4= new Box(310,200,100,100,"green");
 //ground se pone a la mitad
 ground= new Box(350,650,700,20,"cyan"); //se modifico el dato de inicio en X
 Matter.Body.setStatic(ground.body,true);

 //este comando hacia falta 
rectMode(CENTER);
}

function draw() 
{
  background(200);

  Engine.update(engine);

 box1.display();
 ball.display();
 box3.display();
 box4.display();
 ground.display();
 

}







