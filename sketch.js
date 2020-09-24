const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var groundobj;


function setup() {
  createCanvas(1200,800);
  createSprite(400, 200, 50, 50);

  groundobj = new Ground(400,200,200,10);


  engine = Engine.create();
  world = engine.world;
}

function draw() {
  background(255,255,255);  

  groundobj.display();
  drawSprites();
}