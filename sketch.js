const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var score;
var score = 0;
var slingshot;

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(900,400);
  ground = new Ground();
  stand1 = new Stand(380,300,270,10);
  stand2 = new Stand(700,200,200,10);

  block1 = new Block(280,275,30,40);
  block2 = new Block(310,275,30,40);
  block3 = new Block(340,275,30,40);
  block4 = new Block(370,275,30,40);
  block5 = new Block(400,275,30,40);
  block6 = new Block(430,275,30,40);
  block7 = new Block(460,275,30,40);
  block8 = new Block(490,275,30,40);
  block9 = new Block(310,235,30,40);
  block10 = new Block(340,235,30,40);
  block11 = new Block(370,235,30,40);
  block12 = new Block(400,235,30,40);
  block13 = new Block(430,235,30,40);
  block14 = new Block(460,235,30,40);
  block15 = new Block(340,195,30,40);
  block16 = new Block(370,195,30,40);

  blocks1 = new Block(640,175,30,40);
  blocks2 = new Block(670,175,30,40);
  blocks3 = new Block(700,175,30,40);
  blocks4 = new Block(730,175,30,40);
  blocks5 = new Block(760,175,30,40);
  blocks6 = new Block(670,135,30,40);
  blocks7 = new Block(700,135,30,40);
  blocks8 = new Block(730,135,30,40);
  blocks9 = new Block(700,95,30,40);


ball = Bodies.circle(50,200,20);
World.add(world,ball);

slingshot = new SlingShot(this.ball,{x:200,y:200});



   
}

function draw() {
  background(0);
  Engine.update(engine); 
  strokeWeight(2);
  stroke("white");
  textSize(13);
  fill("red");
  text("Score :"+ score,width-300, 50);
  
  ground.display();

  stand1.display();
  stand2.display();

fill("black")
 block1.display();
 block1.score();
 block2.display();
 block2.score();
 block3.display();
 block3.score();
 block4.display(); 
 block4.score();
 block5.display();
 block5.score();
 block6.display();
 block6.score();
 block7.display();
 block7.score();
 block8.display();
 block8.score();
fill("orange")
 block9.display();
 block9.score();
 block10.display();
 block10.score();
 block11.display();
 block11.score();
 block12.display();
 block12.score();
 block13.display();
 block13.score();
 block14.display();
 block14.score();
 fill("red")
 block15.display();
 block15.score();
 block16.display();
 block16.score();
 
fill("green")
 blocks1.display();
 blocks1.score();
 blocks2.display();
 blocks2.score();
 blocks3.display();
 blocks3.score();
 blocks4.display();
 blocks4.score(); 
 blocks5.display();
 blocks5.score();
 fill("violet")
 blocks6.display();
 blocks6.score();
 blocks7.display();
 blocks7.score();
 blocks8.display();
 blocks8.score();
 fill("cyan")
 blocks9.display();
 blocks9.score();

ellipse(ball.position.x,ball.position.y,20);
slingshot.display();
}

function mouseDragged(){
  Matter.body.setPosition(this.ball ,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(this.ball);
  }
}