
var fixedRect, movingRect;
var gameObject1,gameObject2,gameObject3,gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  
  gameObject1 = createSprite(100,100,50,80);
  gameObject1.shapeColor = "green"

  gameObject2 = createSprite(475,400,50,80);
  gameObject2.shapeColor = "green"
  
  gameObject3 = createSprite(550,400,50,80)
  gameObject3.shapeColor = "green"

  gameObject4 = createSprite(650,400,50,80);
  gameObject4.shapeColor = "green"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if(isTouching(movingRect,gameObject1) === true){
    movingRect.shapeColor = "red";
    gameObject1.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    gameObject1.shapeColor = "green";
  }
  

  if(isTouching(movingRect,gameObject2) === true){
    movingRect.shapeColor = "red";
    gameObject2.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    gameObject2.shapeColor = "green";
  }
  

  drawSprites();
}

/*
ball1.bounceOff(ball2);
ball1.bounceOff(ball2);



*/