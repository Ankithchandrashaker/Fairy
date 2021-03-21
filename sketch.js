var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.setCollider("rectangle",0,0,1000,500)
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);
  Engine.update(engine)
  star.x=starBody.position.x;
  star.y=starBody.position.y;
  keyPressed();
  if (fairy.isTouching(star)) {
	Matter.Body.setStatic(starBody,true)
  }
  drawSprites();

}

function keyPressed() {
	//write code here
	if (keyIsDown(LEFT_ARROW)){
		fairy.x=fairy.x-5
	}
	if (keyIsDown(RIGHT_ARROW)){
		fairy.x=fairy.x+5
	}
	if (keyIsDown(UP_ARROW)){
		fairy.y=fairy.y-5
	}
	if (keyIsDown(DOWN_ARROW)) {
        Matter.Body.setStatic(starBody,false)
	}
}
