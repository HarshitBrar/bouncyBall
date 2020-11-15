const Engine = Matter.Engine
const World = Matter.World  
const Bodies = Matter.Bodies
var myWorld,myEngine;
var ground,ball;
function setup() {
  createCanvas(400,400);
  myEngine = Engine.create();
  myWorld = myEngine.world
  var ground_options = {
    isStatic : true
  }

  ground = Bodies.rectangle(200,380,400,20,ground_options)
  World.add(myWorld,ground)
  var ball_option = {
    restitution : 0.5
  }
  ball = Bodies.circle(200,100,50,ball_option);
  World.add(myWorld,ball);
  console.log(ball);
}

function draw() {
  background(0);
  Engine.update(myEngine);
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,20)
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,50,50)
  drawSprites();
}
