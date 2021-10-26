
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ball;


function setup() {
	createCanvas(1000,1000);
	engine = Engine.create();
	world = engine.world;
  
	//Create the Bodies Here.
	 groundObj=new Ground(width/2, 670, width, 20);
	 leftSide=new Ground(1100, 600, 20, 120);

	 ball_options={
		 isStatic: false,
		restitution: 0.3,
		friction:0,
		density: 1.2
	}
     ball =  Bodies.circle(50, 50, 20, ball_options);
	 World.add(world, ball);

}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipse(ball.position.x, ball.position.y, 20);
 
   groundObj.display();

}

function keyPressed(){
if (keyCode===UP_ARROW){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.5});
}
}

