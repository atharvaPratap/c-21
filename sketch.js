var fixedRect, movingRect, comingRect, goingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  comingRect = createSprite(100,400,50,80);
  
   goingRect = createSprite(800,400,70,70);

  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  comingRect.velocityX = 5;
  goingRect.velocityX = -5;
}

function draw() {
  background(0,0,0);  
  bounceOff(movingRect,fixedRect);
  bounceOff(comingRect,goingRect);
  drawSprites();
}


