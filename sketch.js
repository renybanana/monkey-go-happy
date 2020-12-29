
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score=0;
var score1=0;
var obstaclesGroup, obstacleImage,obstacle;
function preload(){
  
  
  monkeyRunning=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("running",monkeyRunning);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10)
  ground.velocityX= -4
  ground.x = ground.width/2;
  console.log(ground.x)
  bananaG = new Group();
  obstaclesGroup = new Group();

  
}


function draw() {
  background("lightgreen");
  if(monkey.isTouching(bananaG)){
    score1 = score1 +1
    bananaG.destroyEach();
  }
  score = score + Math.round(getFrameRate()/60);
  if(ground.x>0){
    ground.x=ground.width/2;
  }
  if(keyDown("space")&& monkey.y >= 200) {
      //trex speed
        monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
  bananas();
  obstacles();
  ground.shapeColor = "red";
  
  var survivalTime = 0
  
  text("survival time:"+ score,300,50);
  text("score:"+ score1,300,40);
  textSize(20);
  drawSprites();
}
function bananas(){
  if (World.frameCount % 80 === 0){
  var banana = createSprite(400,150,10,10)
  banana.y = Math.round(random(120,200));
  banana.addImage(bananaImage)
  banana.scale = 0.1
  banana.velocityX= -5
  banana.lifetime = 200;
  
  bananaG.add(banana)
  }
  
}
function obstacles() {
  if(frameCount % 300 === 0) {
    var obstacle = createSprite(325,325,10,40);
    obstacle.addImage(obstacleImage)
    obstacle.velocityX = -6;    
    obstacle.scale = 0.1;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}





