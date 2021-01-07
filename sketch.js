var movingRect, fixedRect;
var a, b;                                     

function setup() {

  createCanvas(800,400);

  movingRect = createSprite(400, 200, 50, 50);
  fixedRect = createSprite(500, 200, 50, 50);
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";

  a = createSprite(300, 200, 25, 30);
  b = createSprite(400, 300, 30, 25);
  movingRect.velocityX = 4;
}

function draw() {
  background(255,255,255);  

  bounceOff(movingRect, fixedRect);

  if(isTouching(a, fixedRect)) {

    a.shapeColor = "blue";
    fixedRect.shapeColor = "blue";

  } else {

    a.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  //fixedRect.x = World.mouseX;
  //fixedRect.y = World.mouseY;

  //a.x = World.mouseX;
  //a.y = World.mouseY;
  
  console.log(fixedRect.x - movingRect.x);
  drawSprites();
}