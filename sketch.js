const Engine = Matter.Engine
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine;
var world;
var ground;
var monster;
var flying_boi;
var box,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var BG;
var rope;
function preload() {
//preload the images here
BG = loadImage("GamingBackground.png");
}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
    world = engine.world;
    ground = new Ground(40,700, 2000,20);
    box = new Box(700,700,40,40); 
    box2  = new Box(700,40,40,40);
    box3  = new Box(750,40,40,40) ;
    box4 = new Box(700,40,40,40) ;
    box5 = new Box(750,40,40,40) ;
    box6 = new Box(700,40,40,40) ;
    box7 = new Box(750,40,40,40) ;
    box8 = new Box(700,40,40,40) ;
    box9 = new Box(750,40,40,40) ;
    box10 = new Box(750,40,40,40);

    monster = new Monster(830,70,90,90);

    flying_boi = new FlyingBoi(600,30,80);

    rope = new Chain(flying_boi.body ,{x: 60, y: 500})
  // create sprites here

}

function draw() {
  background(BG);
  Engine.update(engine)
ground.display();

box.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();

monster.display();

flying_boi.display();

rope.display();
}
function mouseDragged(){
  Matter.Body.setPosition(flying_boi.body, {x: mouseX, y: mouseY})
  }
  
  function mouseReleased(){
  rope.fly();
  }
  function keyPressed(){
    if(keyCode == 32){
      rope.attach(flying_boi.body)
   
    }   
   
   }
  

