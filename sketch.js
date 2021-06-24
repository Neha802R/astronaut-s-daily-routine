var astronaut;
var bg , bathingImg;
var brushing , brushingImg;
var drinking , drinkingImg;
var eating , eatingImg;
var gym , gymImg;
var bg , bgImg;
var moving , movingImg;
var sleeping , sleepingImg;

function preload(){

 bathingImg = loadAnimation("bath1.png","bath2.png");
 brushingImg = loadImage("brush.png");
 drinkingImg = loadAnimation("drink1.png","drink2.png");
 eatingImg = loadAnimation("eat1.png","eat2.png");
 gymImg = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
 bgImg = loadImage("iss.png");
 movingImg = loadAnimation("move.png","move1.png");
 sleepingImg = loadImage("sleep.png");
   
}

function setup() {
  createCanvas(400, 400);
  
  bg = createSprite(200,200)
  bg.addImage("bg",bgImg);

  astronaut = createSprite(300,230);
  astronaut.addImage("sleeping",sleepingImg);
  astronaut.scale = 0.1
  astronaut.visible = false;
 

   edges = createEdgeSprites();
}

function draw() {
  background(220);
  
  if(keyDown("enter")){
    astronaut.visible = true;
  }
  if(keyDown("UP_ARROW")){
    astronaut.addImage("brushing",brushingImg);
    astronaut.changeImage("brushing");
    astronaut.velocityX = 0;

  }
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating",eatingImg);
    astronaut.changeAnimation("eating");                 astronaut.velocityX = 0;
  }
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming",gymImg);
    astronaut.changeAnimation("gymming");
    astronaut.velocityX = 0;
  }
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing",bathingImg);
    astronaut.changeAnimation("bathing");
    astronaut.velocityX = 0;
  }
  if(keyDown("m")){
    astronaut.addAnimation("moving",movingImg);
    astronaut.changeAnimation("moving")
    astronaut.velocityX = -2;
  }
  
  astronaut.bounceOff(edges);

  drawSprites();
  
  
  fill("black");
  text("INSTRUCTIONS:",50,50);
  text("1.UP_ARROW:BRUSHING",50,70);
  text("2.LEFT_ARROW:EATING",50,90);
  text("3.DOWN_ARROW:GYMMING",50,110);
  text("4.RIGHT_AAROW:BATHING",50,130);
  text("5.m:MOVING",50,150);
  text.visible = true;
  
}
