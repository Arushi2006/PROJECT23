var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var l1,l2,l3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 ,{restitution:1, isStatic:true});
	World.add(world, packageBody);

	l1Body=Bodies.rectangle(400,648,200,20);
	World.add(world,l1Body);

	l2Body=Bodies.rectangle(400,600,20,200);
	World.add(world,l2Body);
	
	l3Body=Bodies.rectangle(500,558,200,20);
	World.add(world,l3Body);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2,650,width, 10 , {isStatic:true});
 	World.add(world, ground);
	Engine.run(engine);  
}
function draw()
   {
	  background(0);
	  rect(l1Body.position.x,l1Body.position.y,200,20);
	  rect(l2Body.position.x,l2Body.position.y,20,200);
	  rect(l3Body.position.x,l3Body.position.y,200,20);
      packageSprite.x= packageBody.position.x 
      packageSprite.y= packageBody.position.y 
      drawSprites();
      if(keyDown(DOWN_ARROW))
         {
		  Matter.Body.setStatic(packageBody,false,);  
        }
   }
