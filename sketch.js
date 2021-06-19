var warrior,corona
var obsacle1
var invisibleground
function preload()
{
backgroundimg = loadImage("background.png")	
}

function setup() {
	createCanvas(1000, 550);

bg = createSprite(500,280,1000,450);
bg.addImage(backgroundimg)
bg.scale = 0.8;
bg.velocityX = -3
	warrior = createSprite(100,450,30,40);
invisibleground = createSprite(100,520,500,20)
invisibleground .visible= false	
}
function draw() {

  background(0);
  
  if (bg.x<200)
  {
    bg.x= 650
  }
  if(keyDown("space"))
  {
warrior.velocityY = -10
  }
  warrior.velocityY = warrior.velocityY + 0.5
  warrior.collide(invisibleground)
  drawSprites();
 
}



